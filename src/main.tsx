import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";

const theme = extendTheme({
  fonts: {
    body: "'Raleway', sans-serif",
    heading: "'Raleway', sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "#fefbf6",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
