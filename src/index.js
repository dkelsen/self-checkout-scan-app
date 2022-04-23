import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Theme from "./Theme";
import GlobalCSS from "./global.css";

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <GlobalCSS />
      <App />
    </Theme>
  </React.StrictMode>,
  document.getElementById("root")
);
