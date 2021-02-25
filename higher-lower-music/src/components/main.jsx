import React from "react";

import "../styles/style.css";
import Navbar from "./navbar";
function Main() {
  return (
    <main>
      <div className="fields">
        <div className="left">
          <span className="score">Score: 1</span>
          <div className="leftvideo">
            <iframe
              src="https://www.youtube.com/embed/d7ypnPjz81I?modestbranding=1?rel=0"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="separator"></div>

        <div className="right">
          <span className="highscore">Highscore: 13</span>
          <div className="rightvideo">
            <iframe
              src="https://www.youtube.com/embed/d7ypnPjz81I?modestbranding=1?rel=0"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="interaction">
            <p>X has</p>
            <div className="buttons">
              <button className="higher">More</button>
              <span>or</span>
              <button className="lower">Less</button>
            </div>
            <p>views than Y</p>
          </div>
        </div>
      </div>
      <div className="vs">
        <span>VS</span>
      </div>
    </main>
  );
}

export default Main;
