import { Suspense } from "react";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/navbar";
import { Sidebar } from "widgets/sidebar";
import "./styles/index.scss";

export const App = () => {
  return (
    <div className="app">
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
