import "normalize.css";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${p => p.theme.pageBackground};
  }
  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;
