import React from "react";
import darth from "../../assets/images/darth-vader.png";
import back from "../../assets/images/back-white.png";

export default ({ side, handleCommand }) => (
  <>
    <div className="side side-dark page-content">
        <button className="btnGoBack" onClick={e => {handleCommand({ op: "goBack" });}}>
          <img src={back} alt="go back" /> back
        </button>

        <button className="btnPadawan" onClick={e => {handleCommand({ op: "starWars" });}}>
            choose your path again, Padawan
        </button>

        <div className="side-image">
            <img src={darth} title="Darth Vader" alt="Darth Vader" />
        </div>

        <h2 className="your-master">
            Your master is <span>{side.name}</span>
        </h2>

    </div>
  </>
);
