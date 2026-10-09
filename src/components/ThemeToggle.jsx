export function ThemeToggle({ theme }) {
  return (
    <button
      type="button"
      onClick={theme.toggleTheme}
      className="icon-btn theme-toggle text-sm font-bold"
      aria-label={
        theme.isDark ? "Switch to Classic suit" : "Switch to Symbiote suit"
      }
      aria-pressed={theme.isDark}
    >
      <span className="suit-dot" />
      <span>{theme.isDark ? "Symbiote" : "Classic suit"}</span>
    </button>
  );
}
