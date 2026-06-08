import { useEffect, useMemo, useState } from 'react';

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark';

  const themeParam = new URLSearchParams(window.location.search).get('theme');
  const savedTheme = window.localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (themeParam === 'light' || themeParam === 'dark') return themeParam;
  return savedTheme || (prefersDark ? 'dark' : 'light');
};

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const isDark = theme === 'dark';
    document.body.classList.toggle('dark-mode', isDark);
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDark ? '#020403' : '#edf8f8');
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return useMemo(
    () => ({
      theme,
      isDark: theme === 'dark',
      toggleTheme: () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
    }),
    [theme],
  );
}
