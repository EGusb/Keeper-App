// Reformatted according to: https://github.com/reactwg/react-18/discussions/5

import React from "react";
import ReactDOMClient from "react-dom/client";

import App from "./components/App";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
