import { Route, Routes } from 'react-router-dom';
import { useTheme } from './hooks/useTheme.js';
import { HomePage } from './pages/HomePage.jsx';
import { ResumePage } from './pages/ResumePage.jsx';
import { ThanksPage } from './pages/ThanksPage.jsx';

export default function App() {
  const theme = useTheme();

  return (
    <Routes>
      <Route path="/" element={<HomePage theme={theme} />} />
      <Route path="/resume" element={<ResumePage theme={theme} />} />
      <Route path="/thanks" element={<ThanksPage theme={theme} />} />
      <Route path="*" element={<HomePage theme={theme} />} />
    </Routes>
  );
}
