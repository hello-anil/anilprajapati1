import { useEffect, useMemo, useState } from "react";
const getInitialTheme = () => {
  const preset = new URLSearchParams(window.location.search).get("suit");
  if (preset === "classic" || preset === "symbiote") return preset;
  try {
    return window.localStorage.getItem("spider-suit-v1") === "symbiote"
      ? "symbiote"
      : "classic";
  } catch {
    return "classic";
  }
};
export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    document.body.classList.toggle("dark-mode", theme === "symbiote");
    document.documentElement.style.colorScheme = "dark";
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", "#101014");
    try {
      window.localStorage.setItem("spider-suit-v1", theme);
    } catch {
      /* Switching works without storage. */
    }
  }, [theme]);
  return useMemo(
    () => ({
      theme,
      isDark: theme === "symbiote",
      toggleTheme: () =>
        setTheme((current) => (current === "classic" ? "symbiote" : "classic")),
    }),
    [theme],
  );
}
