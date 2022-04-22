import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Theme from "./Theme";
import GlobalCSS from "./global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Theme>
      <GlobalCSS />
      <App />
    </Theme>
  </React.StrictMode>
);
