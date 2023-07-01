import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import theme from "./theme.js";
import App from "./App.jsx";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      cacheTime: 300_00, // 5 minutes
      staleTime: 0, // 0 seconds
      refetchOnWindowFocus: false, // don't refetch on window focus
      refetchOnReconnect: true,
      refetchOnMount: true,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <App />
        <ReactQueryDevtools />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
