import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ParticlesProvider } from "./components/ParticlesContext";
ReactDOM.render(
  <React.StrictMode>
    <ParticlesProvider>
      <App />
    </ParticlesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
