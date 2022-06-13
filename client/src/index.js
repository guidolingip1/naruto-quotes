import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
registerServiceWorker();
