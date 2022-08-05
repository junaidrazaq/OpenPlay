import React from "react";
import { ThemeProvider } from "styled-components";
import Home from "./Components/app/Home";
import { Global } from "./Components/shared";
import { Provider } from "react-redux";
import { store } from "./redux";

const theme = {
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Global />
        <Home />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
