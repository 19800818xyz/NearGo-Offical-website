"use client";

import { useEffect } from "react";

/**
 * Knocket (TRTC) renders its launcher inside a shadow root (#contact-widget-auto),
 * anchored bottom-right by default — which collides with the ShopMind ball there.
 * Page CSS can't cross the shadow boundary, so we inject an override <style> into
 * the shadow root to move Knocket to the bottom-left, raised above the version
 * switcher (which also sits bottom-left).
 *
 * NOTE: this targets Knocket's internal class `.trtc-float-card`. If a future SDK
 * version renames it, re-check the selector (or set the position in the Knocket
 * dashboard instead and delete this component).
 */
const OVERRIDE_ID = "knocket-pos-override";
const OVERRIDE_CSS = `
/* launcher ball → bottom-left (all sizes), raised above the version switcher,
   so it never stacks on the ShopMind ball in the bottom-right */
.trtc-float-card.widget-sdk-float-card{
  left: 20px !important;
  right: auto !important;
  bottom: 84px !important;
}
/* chat panel → open from the left too, but ONLY on desktop where it's a
   floating card. On mobile the panel is full-screen, so leave it untouched
   (shifting it left would overflow the right edge). */
@media (min-width: 768px){
  .trtc-knocket-card{
    left: 20px !important;
    right: auto !important;
  }
}
`;

export function KnocketPosition() {
  useEffect(() => {
    let tries = 0;
    const timer = setInterval(() => {
      tries += 1;
      const host = document.querySelector<HTMLElement>("#contact-widget-auto");
      const shadow = host?.shadowRoot;
      if (shadow) {
        if (!shadow.getElementById(OVERRIDE_ID)) {
          const style = document.createElement("style");
          style.id = OVERRIDE_ID;
          style.textContent = OVERRIDE_CSS;
          shadow.appendChild(style);
        }
        clearInterval(timer);
      } else if (tries > 60) {
        // give up after ~30s (widget never mounted)
        clearInterval(timer);
      }
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return null;
}
