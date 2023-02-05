import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { className } from "./halpers/classNames";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPage } from "./pages/MainPage";
import { useTheme } from "./theme/useTheme";
import "./styles/index.scss";

export const App = () => {
  const { theme, toggleTheme} = useTheme()

  return (
    <div className={className('app', theme)}>
      <button onClick={toggleTheme}>toggle theme</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О нас</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}