import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";

import store from "@/data/store";

import "@/app/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
