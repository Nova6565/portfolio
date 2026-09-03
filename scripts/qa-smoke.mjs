import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdtemp } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

const edgeCandidates = [
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
];

const browserPath = edgeCandidates.find((candidate) => existsSync(candidate));

if (!browserPath) {
  throw new Error("No Edge or Chrome binary found for smoke QA.");
}

const baseUrl = process.env.QA_BASE_URL ?? "http://localhost:3000";
const port = 9333 + Math.floor(Math.random() * 1000);
const userDataDir = await mkdtemp(path.join(tmpdir(), "portfolio-qa-"));

const browser = spawn(
  browserPath,
  [
    "--headless=new",
    "--disable-gpu",
    "--disable-software-rasterizer",
    "--disable-dev-shm-usage",
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
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json`);
      if (response.ok) return response.json();
    } catch {
      await sleep(150);
    }
  }
  throw new Error("Timed out waiting for headless browser debugging endpoint.");
}

const targets = await waitForDebugEndpoint();
const pageTarget = targets.find((target) => target.type === "page");

if (!pageTarget?.webSocketDebuggerUrl) {
  throw new Error("No debuggable page target found.");
}

const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  ws.addEventListener("open", resolve, { once: true });
  ws.addEventListener("error", reject, { once: true });
});

let id = 0;
const pending = new Map();

ws.addEventListener("message", (event) => {
  const message = JSON.parse(event.data.toString());
  if (message.id && pending.has(message.id)) {
    const { resolve, reject } = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) reject(new Error(message.error.message));
    else resolve(message.result);
  }
});

function send(method, params = {}) {
  id += 1;
  ws.send(JSON.stringify({ id, method, params }));
  return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
}

async function navigate(url, width = 1440, height = 1200) {
  await send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: width < 768
  });
  await send("Page.navigate", { url });
  await new Promise((resolve) => {
    const timeout = setTimeout(resolve, 5000);
    const listener = (event) => {
      const message = JSON.parse(event.data.toString());
      if (message.method === "Page.loadEventFired") {
        clearTimeout(timeout);
        ws.removeEventListener("message", listener);
        resolve();
      }
    };
    ws.addEventListener("message", listener);
  });
  await sleep(500);
}

async function evaluate(expression) {
  const result = await send("Runtime.evaluate", {
    expression,
    awaitPromise: true,
    returnByValue: true
  });
  if (result.exceptionDetails) {
    throw new Error(result.exceptionDetails.text ?? "Runtime evaluation failed.");
  }
  return result.result.value;
}

async function clickElement(expression, message) {
  const found = await evaluate(`(() => {
    const element = ${expression};
    if (!element) return null;
    element.scrollIntoView({ block: "center", inline: "center" });
    element.focus();
    return true;
  })()`);
  assert(found, message);
  await sleep(150);
  await send("Input.dispatchKeyEvent", { type: "keyDown", key: "Enter", code: "Enter", windowsVirtualKeyCode: 13 });
  await send("Input.dispatchKeyEvent", { type: "keyUp", key: "Enter", code: "Enter", windowsVirtualKeyCode: 13 });
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

try {
  await send("Page.enable");
  await send("Runtime.enable");

  await navigate(`${baseUrl}/`, 1440, 1200);
  assert(await evaluate("document.title.includes('Mohamed Adel Mahmoud')"), "Homepage title missing.");
  assert(await evaluate("document.documentElement.scrollWidth <= window.innerWidth"), "Desktop homepage has horizontal overflow.");
  assert(await evaluate("document.querySelector('.ambient-cursor[aria-hidden=\"true\"]') !== null"), "Ambient cursor layer missing.");
  await send("Input.dispatchMouseEvent", { type: "mouseMoved", x: 960, y: 380 });
  await sleep(500);
  assert(
    await evaluate("document.documentElement.hasAttribute('data-ambient-cursor')"),
    "Ambient cursor did not enable on desktop fine-pointer viewport."
  );
  assert(
    await evaluate("getComputedStyle(document.querySelector('.ambient-cursor')).display !== 'none'"),
    "Ambient cursor layer is hidden on desktop fine-pointer viewport."
  );
  assert(await evaluate("document.body.textContent.includes('PharmaSafe')"), "Homepage is missing PharmaSafe.");
  assert(await evaluate("document.body.textContent.includes('VeggieVision')"), "Homepage is missing VeggieVision.");
  assert(
    await evaluate(
      "Array.from(document.querySelectorAll('.project-media-image')).every((image) => image.getAttribute('alt') && getComputedStyle(image).objectFit === 'contain')"
    ),
    "One or more project media images is missing alt text or is not set to preserve proportions."
  );
  assert(await evaluate("document.querySelector('a[href=\"/projects/pharmasafe#platform-demo\"]') !== null"), "Homepage demo CTA missing.");
  const certificateCount = await evaluate(
    "Array.from(document.querySelectorAll('button')).filter((button) => button.getAttribute('aria-label')?.startsWith('Open certificate image')).length"
  );
  assert(certificateCount === 13, `Certificate gallery count is ${certificateCount}, not 13.`);
  assert(await evaluate("document.body.textContent.includes('5-Day AI Agents Intensive Course with Google')"), "Google certificate is missing.");
  assert(await evaluate("document.querySelector('a[download][href=\"/assets/resume/CV_MohamedAdel.pdf\"]') !== null"), "Resume download link missing.");
  await sleep(1200);

  await clickElement(
    "Array.from(document.querySelectorAll('button')).find((button) => button.getAttribute('aria-label')?.startsWith('Open certificate image'))",
    "Certificate preview button missing."
  );
  await sleep(700);
  assert(await evaluate("document.querySelector('[role=\"dialog\"][aria-modal=\"true\"]') !== null"), "Certificate modal did not open.");
  assert(await evaluate("document.activeElement?.getAttribute('aria-label') === 'Close image preview'"), "Certificate modal did not move focus to close control.");
  await evaluate(`
    window.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Escape',
        code: 'Escape',
        keyCode: 27,
        which: 27,
        bubbles: true,
        cancelable: true,
        composed: true
      })
    );
    true
  `);
  await sleep(700);
  assert(await evaluate("document.querySelector('[role=\"dialog\"]') === null"), "Certificate modal did not close with Escape.");
  assert(
    await evaluate("document.activeElement?.getAttribute('aria-label')?.startsWith('Open certificate image')"),
    "Certificate modal did not restore focus to the trigger."
  );

  assert(await evaluate("document.querySelector('button[aria-label=\"Open image preview for VeggieVision\"]') !== null"), "VeggieVision project preview button missing.");
  await clickElement(
    'document.querySelector(\'button[aria-label="Open image preview for VeggieVision"]\')',
    "VeggieVision project preview button missing."
  );
  await sleep(700);
  assert(await evaluate("document.querySelector('[role=\"dialog\"][aria-modal=\"true\"]') !== null"), "Project image modal did not open.");
  assert(await evaluate("document.body.textContent.includes('Supplied VeggieVision mobile app screenshots')"), "Project image modal caption missing.");
  await clickElement('document.querySelector(\'button[aria-label="Close image preview"]\')', "Project image modal close button missing.");
  await sleep(700);
  assert(await evaluate("document.querySelector('[role=\"dialog\"]') === null"), "Project image modal did not close.");
  await clickElement(
    'document.querySelector(\'button[aria-label="Open image preview for VeggieVision"]\')',
    "VeggieVision project preview button missing."
  );
  await sleep(700);
  await evaluate(`
    document.querySelector('[data-media-lightbox]')?.dispatchEvent(
      new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: window })
    );
    true
  `);
  await sleep(700);
  assert(await evaluate("document.querySelector('[role=\"dialog\"]') === null"), "Project image modal did not close from outside click.");

  await navigate(`${baseUrl}/`, 390, 1200);
  assert(await evaluate("document.documentElement.scrollWidth <= window.innerWidth"), "Mobile homepage has horizontal overflow.");
  assert(await evaluate("document.querySelector('button[aria-label=\"Open menu\"]') !== null"), "Mobile menu button missing.");
  await clickElement('document.querySelector(\'button[aria-label="Open menu"]\')', "Mobile menu button missing.");
  await sleep(250);
  assert(await evaluate("document.querySelector('button[aria-label=\"Close menu\"]') !== null"), "Mobile menu did not open.");

  await send("Emulation.setEmulatedMedia", {
    features: [{ name: "prefers-reduced-motion", value: "reduce" }]
  });
  assert(await evaluate("window.matchMedia('(prefers-reduced-motion: reduce)').matches"), "Reduced-motion media emulation failed.");
  assert(
    await evaluate("getComputedStyle(document.querySelector('.ambient-cursor')).display === 'none'"),
    "Ambient cursor is not disabled for reduced motion."
  );

  await navigate(`${baseUrl}/projects/pharmasafe`, 390, 1300);
  assert(await evaluate("document.documentElement.scrollWidth <= window.innerWidth"), "Mobile PharmaSafe page has horizontal overflow.");
  assert(
    await evaluate(
      "Array.from(document.querySelectorAll('.project-media-image')).every((image) => image.getAttribute('alt') && getComputedStyle(image).objectFit === 'contain')"
    ),
    "One or more mobile case-study images is missing alt text or is not set to preserve proportions."
  );
  assert(await evaluate("document.body.textContent.includes('Metrics and Evaluation')"), "Metrics and Evaluation section missing.");
  assert(await evaluate("document.body.textContent.includes('System Architecture')"), "System Architecture section missing.");
  assert(await evaluate("document.querySelector('video source[src$=\"pharmasafe-platform-demo-2026-06-25.mp4\"]') !== null"), "PharmaSafe demo video source missing.");
  assert(await evaluate("document.querySelector('video[preload=\"metadata\"][playsinline]') !== null"), "PharmaSafe demo video loading/playback attributes missing.");
  assert(await evaluate("document.querySelectorAll('img[src*=\"demo-screenshots\"]').length >= 11"), "PharmaSafe application screenshots missing from case study.");

  console.log("SMOKE_QA_PASSED");
} finally {
  ws.close();
  browser.kill();
}
