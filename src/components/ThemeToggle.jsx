export function ThemeToggle({ theme }) {
  return (
    <button
      type="button"
      onClick={theme.toggleTheme}
      className="icon-btn theme-toggle text-sm font-bold"
      aria-label={theme.isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={theme.isDark}
    >
      <i className={`bx ${theme.isDark ? 'bx-sun' : 'bx-moon'}`} aria-hidden="true" />
      <span>{theme.isDark ? 'Light' : 'Dark'}</span>
    </button>
  );
}
