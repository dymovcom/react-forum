import { Suspense } from "react";
import { AppRouter } from "app/providers/router";
import { Header } from "widgets/header";
import { Sidebar } from "widgets/sidebar";
import "./styles/index.scss";

export const App = () => {
  return (
    <div className="app">
      <Suspense fallback="">
        <Header />
        <div className="content">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
