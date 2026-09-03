"use client";

import { useEffect } from "react";

export function AmbientCursor() {
  useEffect(() => {
    const root = document.documentElement;
    const finePointer = window.matchMedia("(min-width: 900px) and (hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let enabled = false;
    let currentX = window.innerWidth * 0.68;
    let currentY = window.innerHeight * 0.18;
    let targetX = currentX;
    let targetY = currentY;
    let activeCard: HTMLElement | null = null;

    const resetCard = () => {
      if (!activeCard) return;
      activeCard.style.removeProperty("--media-light-x");
      activeCard.style.removeProperty("--media-light-y");
      activeCard.style.removeProperty("--media-depth-x");
      activeCard.style.removeProperty("--media-depth-y");
      activeCard = null;
    };

    const setEnabled = () => {
      enabled = finePointer.matches && !reducedMotion.matches;
      root.toggleAttribute("data-ambient-cursor", enabled);
      root.style.setProperty("--ambient-opacity", "0");
      if (!enabled) resetCard();
    };

    const update = () => {
      frame = 0;
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;
      root.style.setProperty("--ambient-x", `${currentX.toFixed(1)}px`);
      root.style.setProperty("--ambient-y", `${currentY.toFixed(1)}px`);

      if (Math.abs(targetX - currentX) > 0.2 || Math.abs(targetY - currentY) > 0.2) {
        frame = window.requestAnimationFrame(update);
      }
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    const moveLight = (event: MouseEvent | PointerEvent) => {
      if (!enabled) return;
      if ("pointerType" in event && event.pointerType !== "mouse") return;
      targetX = event.clientX;
      targetY = event.clientY;
      root.style.setProperty("--ambient-opacity", "1");
      requestUpdate();

      const card = event.target instanceof Element ? event.target.closest<HTMLElement>(".project-media-button") : null;
      if (card !== activeCard) resetCard();
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const xRatio = rect.width ? (event.clientX - rect.left) / rect.width : 0.5;
      const yRatio = rect.height ? (event.clientY - rect.top) / rect.height : 0.5;
      const shiftX = (xRatio - 0.5) * 7;
      const shiftY = (yRatio - 0.5) * 5;

      activeCard = card;
      card.style.setProperty("--media-light-x", `${(xRatio * 100).toFixed(1)}%`);
      card.style.setProperty("--media-light-y", `${(yRatio * 100).toFixed(1)}%`);
      card.style.setProperty("--media-depth-x", `${shiftX.toFixed(2)}px`);
      card.style.setProperty("--media-depth-y", `${shiftY.toFixed(2)}px`);
    };

    const onPointerLeave = () => {
      root.style.setProperty("--ambient-opacity", "0");
      resetCard();
    };

    setEnabled();
    finePointer.addEventListener("change", setEnabled);
    reducedMotion.addEventListener("change", setEnabled);
    document.addEventListener("pointermove", moveLight, { passive: true });
    document.addEventListener("mousemove", moveLight, { passive: true });
    window.addEventListener("pointermove", moveLight, { passive: true });
    window.addEventListener("mousemove", moveLight, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("blur", onPointerLeave);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      finePointer.removeEventListener("change", setEnabled);
      reducedMotion.removeEventListener("change", setEnabled);
      document.removeEventListener("pointermove", moveLight);
      document.removeEventListener("mousemove", moveLight);
      window.removeEventListener("pointermove", moveLight);
      window.removeEventListener("mousemove", moveLight);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("blur", onPointerLeave);
      root.removeAttribute("data-ambient-cursor");
      root.style.removeProperty("--ambient-x");
      root.style.removeProperty("--ambient-y");
      root.style.removeProperty("--ambient-opacity");
      resetCard();
    };
  }, []);

  return <div className="ambient-cursor" aria-hidden="true" />;
}
