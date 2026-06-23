"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import "./butler.css";

type Msg = { role: "ai" | "me"; text: string };

const GREETING =
  "Hi! I'm ShopMind. Ask me about NearShop, NearPay, pricing or getting started.";
const CHIPS = ["What is NearShop?", "NearPay fees?", "Pricing plans", "How do I sign up?"];

/* Mock reply logic — no real model. Replace with a real API call later. */
function mockReply(q: string): string {
  const s = q.toLowerCase();
  if (/(pay|card|wallet|near\s*pay|settle)/.test(s))
    return "NearPay supports cards & wallets with PCI DSS security, activated in 24 hours, and settles in under 48h. Transaction rates depend on your plan. (Demo answer)";
  if (/(price|pricing|plan|cost|fee)/.test(s))
    return "NearShop One is 3,999 AED/year (NearShop Duo + NearPay Move bundled free); NearShop Pro is 399 AED/month. (Demo answer)";
  if (/(shop|store|inventory|order|near\s*shop|restaurant|retail)/.test(s))
    return "NearShop runs your storefront, orders, inventory and memberships in one integrated system. (Demo answer)";
  if (/(sign|join|start|register|onboard|activate)/.test(s))
    return "Activation takes about 24 hours — tap Contact and our team gets you set up. (Demo answer)";
  if (/(boss|ai|assistant|manager)/.test(s))
    return "NearBoss is your AI store manager — daily numbers, marketing drafts and one-tap actions, right in your pocket. (Demo answer)";
  return "This is a UI demo — once a model is connected I'll answer for real. Try asking about NearShop, NearPay or pricing.";
}

function Sparkle() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v3M12 18v3M4.5 4.5l2 2M17.5 17.5l2 2M3 12h3M18 12h3M4.5 19.5l2-2M17.5 6.5l2-2" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function AiButler({ variant }: { variant: "v1" | "v2c" }) {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([{ role: "ai", text: GREETING }]);
  const [val, setVal] = useState("");
  const [typing, setTyping] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: "smooth" });
  }, [msgs, typing, open]);

  function send(text: string) {
    const t = text.trim();
    if (!t || typing) return;
    setVal("");
    setMsgs((m) => [...m, { role: "me", text: t }]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs((m) => [...m, { role: "ai", text: mockReply(t) }]);
    }, 750);
  }

  return (
    <div className="ab" data-variant={variant}>
      {!open && (
        <button className="ab-ball" aria-label="Ask ShopMind" onClick={() => setOpen(true)}>
          <Sparkle />
          <span className="badge">1</span>
        </button>
      )}

      <div className={`ab-overlay${open ? " open" : ""}`} onClick={() => setOpen(false)} />

      <aside className={`ab-drawer${open ? " open" : ""}`} role="dialog" aria-label="ShopMind chat">
        <header className="ab-head">
          <div className="ab-avatar"><Sparkle /></div>
          <div>
            <div className="t">ShopMind</div>
            <div className="s"><i />Online · demo</div>
          </div>
          <button className="ab-x" aria-label="Close" onClick={() => setOpen(false)}>×</button>
        </header>

        <div className="ab-msgs" ref={scroller}>
          {msgs.map((m, i) => (
            <div key={i} className={`ab-row ${m.role}`}>
              {m.role === "ai" && <div className="ab-mini"><Sparkle /></div>}
              <div className="ab-bubble">{m.text}</div>
            </div>
          ))}
          {typing && (
            <div className="ab-row ai">
              <div className="ab-mini"><Sparkle /></div>
              <div className="ab-bubble ab-typing"><span /><span /><span /></div>
            </div>
          )}
        </div>

        {msgs.length <= 1 && (
          <div className="ab-chips">
            {CHIPS.map((c) => (
              <button key={c} className="ab-chip" onClick={() => send(c)}>{c}</button>
            ))}
          </div>
        )}

        <form
          className="ab-input"
          onSubmit={(e) => { e.preventDefault(); send(val); }}
        >
          <input
            value={val}
            onChange={(e) => setVal(e.target.value)}
            placeholder="Ask anything about NearGo…"
            aria-label="Message"
          />
          <button className="ab-send" type="submit" disabled={!val.trim() || typing} aria-label="Send">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </form>
        <div className="ab-note">Demo — replies are canned, no AI model connected yet.</div>
      </aside>
    </div>
  );
}

/** Mounts the butler with the style matching the current route. */
export function AiButlerMount() {
  const p = usePathname() || "/";
  const variant: "v1" | "v2c" = p.startsWith("/v2c") ? "v2c" : "v1";
  // skip on the alternate design directions (v2 editorial / v2b arcade) to avoid style clash
  if (p.startsWith("/v2b") || (p.startsWith("/v2") && !p.startsWith("/v2c"))) return null;
  return <AiButler key={variant} variant={variant} />;
}
