import { Route, Routes, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import { useTheme } from "./hooks/useTheme.js";
import { HomePage } from "./pages/HomePage.jsx";
import { ResumePage } from "./pages/ResumePage.jsx";
import { ThanksPage } from "./pages/ThanksPage.jsx";

export default function App() {
  const theme = useTheme();
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage theme={theme} />} />
      <Route path="/resume" element={<ResumePage theme={theme} />} />
      <Route path="/thanks" element={<ThanksPage theme={theme} />} />
      <Route path="*" element={<HomePage theme={theme} />} />
    </Routes>
  );
}
