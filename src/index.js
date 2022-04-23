import React from "react";
import ReactDOM from "react-dom";
import Helmet from "react-helmet";

import App from "./App";
import Theme from "./Theme";
import GlobalCSS from "./global.css";

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Encode+Sans:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Theme>
      <GlobalCSS />
      <App />
    </Theme>
  </React.StrictMode>,
  document.getElementById("root")
);
