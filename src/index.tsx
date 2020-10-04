import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

declare global {
  interface Window {
    ktReactAppVersion: any;
  }

  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
    interface IntrinsicAttributes {
      [elemName: string]: any;
    }
  }
}

window.ktReactAppVersion = "0.0.1";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
