import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { deepmerge } from "@mui/utils";
import { customStyledComponentsTheme, defaultTheme } from "./themes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={deepmerge(defaultTheme, customStyledComponentsTheme)}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
