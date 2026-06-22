/* Additional line icons — stroke 1.7, round caps, currentColor (规范 §6.5). */
type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} width="24" height="24">
      <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} width="24" height="24">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function LayersIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} width="24" height="24">
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5M3 16.5l9 5 9-5" />
    </svg>
  );
}

export function DeviceIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} width="24" height="24">
      <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
      <path d="M6 7h12" />
      <path d="M10 18h4" />
    </svg>
  );
}

export function BankIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} width="24" height="24">
      <path d="M3 9.5 12 4l9 5.5" />
      <path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8" />
      <path d="M3 21h18" />
    </svg>
  );
}

export function TagIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} width="24" height="24">
      <path d="M3.5 11.5 11 4h7v7l-7.5 7.5a2 2 0 0 1-2.8 0l-4.2-4.2a2 2 0 0 1 0-2.8Z" />
      <circle cx="14.5" cy="7.5" r="1.2" />
    </svg>
  );
}

export function UsersIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} width="24" height="24">
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.5a3 3 0 0 1 0 5.5M17 19a5.5 5.5 0 0 0-2.5-4.6" />
    </svg>
  );
}

export function BoltIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} width="24" height="24">
      <path d="M13 2 4 13h6l-1 9 9-11h-6l1-9Z" />
    </svg>
  );
}

export function PrinterIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} width="24" height="24">
      <path d="M7 8V3h10v5" />
      <path d="M5 8h14a2 2 0 0 1 2 2v6h-4M5 16H3v-6a2 2 0 0 1 2-2Z" />
      <rect x="7" y="14" width="10" height="7" rx="1" />
    </svg>
  );
}

export function BikeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} width="24" height="24">
      <circle cx="6" cy="17" r="3" />
      <circle cx="18" cy="17" r="3" />
      <path d="M6 17 10 8h3l2 3h3M10 8l1.5 6M13 11h5" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} width="24" height="24">
      <path d="M5 12.5 10 17l9-10" />
    </svg>
  );
}

export function AppleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} width="20" height="20">
      <path d="M16.4 12.7c0-2 1.6-2.9 1.7-3-.9-1.4-2.4-1.5-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.3 0-2.6.8-3.2 2-1.4 2.4-.4 6 1 8 .7 1 1.5 2 2.5 2 1 0 1.4-.6 2.6-.6s1.5.6 2.6.6 1.7-.9 2.4-1.9c.7-1.1 1-2.1 1-2.2 0 0-1.9-.7-1.9-2.9ZM14.6 6.2c.5-.7.9-1.6.8-2.6-.8 0-1.8.5-2.4 1.2-.5.6-1 1.5-.8 2.5.9.1 1.8-.4 2.4-1.1Z" />
    </svg>
  );
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} width="20" height="20">
      <path d="M3.6 2.8 13 12l-9.4 9.2c-.4-.2-.6-.6-.6-1.1V3.9c0-.5.2-.9.6-1.1ZM14.4 13l2.6 2.6-3.2 1.8-2-2 2.6-2.4Zm0-2L11.8 8.6l2-2 3.2 1.8L14.4 11Zm3.7-1.3 2.7 1.5c.7.4.7 1.4 0 1.8l-2.7 1.5L15.2 12l2.9-2.3Z" />
    </svg>
  );
}
