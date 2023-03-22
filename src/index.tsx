import { ErrorBoundary } from "app/providers/errorBoundary";
import { StoreProvider } from "app/providers/StoreProvider";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "app";
import { ThemeProvider } from "app/providers/ThemeProvider";
import "shared/config/i18n/i18n";

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);
root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
);
