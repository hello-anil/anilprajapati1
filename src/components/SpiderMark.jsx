export function SpiderMark({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M32 18v30M27 26l-7-9-2-11m19 20 7-9 2-11M26 31 13 24 7 12m31 19 13-7 6-12M26 36 12 38 5 51m33-15 14 2 7 13M27 41 19 51l-1 10m19-20 8 10 1 10"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <ellipse cx="32" cy="35" rx="7" ry="14" fill="currentColor" />
      <circle cx="32" cy="20" r="5" fill="currentColor" />
    </svg>
  );
}
