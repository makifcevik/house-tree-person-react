import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import App from "./App.tsx";
import "@fontsource/poppins";
import "@fontsource/roboto";
import { BrowserRouter } from "react-router-dom";
import "./utils/i18n/index.ts";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      //staleTime: 5 * 60 * 1000, // 5 minutes caching
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

const rootElement = document.getElementById("root") as HTMLElement;

createRoot(rootElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
