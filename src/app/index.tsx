import { Suspense } from "react";
import { AppRouter } from "app/providers/router";
import { classNames } from "shared/lib/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { Navbar } from "widgets/navbar";
import { Sidebar } from "widgets/sidebar";
import "./styles/index.scss";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", theme)}>
      <Suspense fallback="">
        <Navbar />
        <div className="content">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
