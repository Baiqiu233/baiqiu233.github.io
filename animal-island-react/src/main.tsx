import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/m-plus-rounded-1c";
import "animal-island-ui/style";
import "./index.less";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
