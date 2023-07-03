import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./App.scss";

function App() {
  return (
    <>
      <div className="wrapper">Ecco le due liste</div>
      <div className="container">
        <ul>
          <li>item 1</li>
          <li>item 2</li>
        </ul>
      </div>
      <ul>
        <li>item 1.1</li>
        <li>item 1.2</li>
      </ul>
    </>
  );
}

export default App;
