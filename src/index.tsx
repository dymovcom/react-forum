import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "app";
import { ThemeProvider } from "app/providers/ThemeProvider";
import "shared/config/i18n/i18n";

render(<BrowserRouter>
  <ThemeProvider>
    <App />
  </ThemeProvider>
  {/* eslint-disable-next-line react/jsx-closing-tag-location */}
</BrowserRouter>, document.getElementById("root"));
