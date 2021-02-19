import React from "react";

import "../styles/style.css";
import Navbar from "./navbar";
function Main() {
  return (
    <main>
      <div className="fields">
        <div className="left">
          <span className="score">Score: 1</span>
        </div>
        <div className="separator"></div>

        <div className="right">
          <span className="highscore">Highscore: 13</span>
        </div>
      </div>
      <div className="vs">
        <span>VS</span>
      </div>
    </main>
  );
}

export default Main;
