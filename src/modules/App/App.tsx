import { FunctionComponent } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { AppContent } from "./AppContent";
import { GlobalStyles } from "./GlobalStyles";
import { LightTheme } from "./themes";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

export const App: FunctionComponent = () => (
  <QueryClientProvider client={client}>
    <ThemeProvider theme={LightTheme}>
      <GlobalStyles />
      <AppContent />
    </ThemeProvider>
  </QueryClientProvider>
);
