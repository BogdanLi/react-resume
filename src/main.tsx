import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { I18nextProvider } from "react-i18next";
import App from "./App";
import i18n from "./lib/i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </StrictMode>
);
