import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Layout from "./Layout/Layout.jsx";

import smoothscroll from "smoothscroll-polyfill";

// Activate polyfill
smoothscroll.polyfill();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Layout>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Layout>
);
