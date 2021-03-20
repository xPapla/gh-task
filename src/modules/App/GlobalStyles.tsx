import "@fontsource/roboto";
import "@fontsource/roboto/700.css";
import "normalize.css";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Roboto";
    background: ${p => p.theme.pageBackground};
  }
  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;
