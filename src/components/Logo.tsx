export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 210 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="18" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M11 14L18 27L25 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <text x="44" y="25" fontFamily="Inter, system-ui, sans-serif" fontWeight="600" fontSize="18" fill="currentColor" letterSpacing="-0.5">VERDE</text>
      <text x="107" y="25" fontFamily="Inter, system-ui, sans-serif" fontWeight="300" fontSize="18" fill="currentColor" letterSpacing="-0.5">IMPORT</text>
    </svg>
  );
}

export function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="18" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M11 14L18 27L25 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
