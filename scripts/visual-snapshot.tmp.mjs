import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

const browserCandidates = [
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
];

const browserPath = browserCandidates.find((candidate) => existsSync(candidate));
if (!browserPath) throw new Error("No Edge or Chrome binary found.");

const outputDir = path.join(process.cwd(), ".tmp-visual-qa");
const port = 9510 + Math.floor(Math.random() * 500);
const userDataDir = path.join(tmpdir(), `portfolio-visual-${Date.now()}`);
const browser = spawn(
  browserPath,
  [
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    "--no-first-run",
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDataDir}`,
    "about:blank"
  ],
  { stdio: "ignore" }
);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function waitForDebugEndpoint() {
  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json`);
      if (response.ok) return response.json();
    } catch {
      await sleep(120);
    }
  }
  throw new Error("Timed out waiting for browser debugging endpoint.");
}

const targets = await waitForDebugEndpoint();
const pageTarget = targets.find((target) => target.type === "page");
const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  ws.addEventListener("open", resolve, { once: true });
  ws.addEventListener("error", reject, { once: true });
});

let id = 0;
const pending = new Map();
ws.addEventListener("message", (event) => {
  const message = JSON.parse(event.data.toString());
  if (!message.id || !pending.has(message.id)) return;
  const { resolve, reject } = pending.get(message.id);
  pending.delete(message.id);
  if (message.error) reject(new Error(message.error.message));
  else resolve(message.result);
});

function send(method, params = {}) {
  id += 1;
  ws.send(JSON.stringify({ id, method, params }));
  return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
}

async function evaluate(expression) {
  const result = await send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text ?? "Runtime evaluation failed.");
  return result.result.value;
}

async function snapshot(name, width, height, x, y) {
  await send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: width < 768
  });
  await send("Page.navigate", { url: "http://localhost:3000/" });
  await sleep(1200);
  await send("Input.dispatchMouseEvent", { type: "mouseMoved", x, y });
  await evaluate(`document.dispatchEvent(new MouseEvent("mousemove", {
    clientX: ${x},
    clientY: ${y},
    bubbles: true,
    cancelable: true,
    view: window
  })); true`);
  await sleep(600);
  const diagnostics = await evaluate(`JSON.stringify({
    width: window.innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
    ambientDisplay: getComputedStyle(document.querySelector(".ambient-cursor")).display,
    ambientOpacity: getComputedStyle(document.querySelector(".ambient-cursor")).opacity,
    ambientEnabled: document.documentElement.hasAttribute("data-ambient-cursor")
  })`);
  const screenshot = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
  const file = path.join(outputDir, `${name}.png`);
  await writeFile(file, Buffer.from(screenshot.data, "base64"));
  console.log(`${file}\n${diagnostics}`);
}

try {
  await mkdir(outputDir, { recursive: true });
  await send("Page.enable");
  await send("Runtime.enable");
  await snapshot("desktop-ambient", 1440, 1000, 940, 360);
  await snapshot("mobile-no-ambient", 390, 1000, 180, 320);
} finally {
  ws.close();
  browser.kill();
}
