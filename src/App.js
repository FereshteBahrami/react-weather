import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tehran" />
        <footer>
          <a
            href="https://github.com/FereshteBahrami/portfolio-project"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          , by{" "}
          <a
            href="https://www.linkedin.com/in/fereshtebahrami"
            target="_blank"
            rel="noreferrer"
          >
            Fereshte Bahrami
          </a>
        </footer>
      </div>
    </div>
  );
}
