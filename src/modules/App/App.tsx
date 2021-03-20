import { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";
import { AppContent } from "./AppContent";
import { GlobalStyles } from "./GlobalStyles";
import { LightTheme } from "./themes";

export const App: FunctionComponent = () => (
  <ThemeProvider theme={LightTheme}>
    <GlobalStyles />
    <AppContent />
  </ThemeProvider>
);
