import React from "react";
import luke from "../../assets/images/luke-skywalker.png";
import back from "../../assets/images/back-black.png";

export default ({ side, handleCommand }) => (
  <>
    <div className="side side-light page-content">

        <button className="btnGoBack" onClick={e => {handleCommand({ op: "goBack" });}}>
            <img src={back} alt="go back" /> back
        </button>

        <button className="btnPadawan" onClick={e => {handleCommand({ op: "starWars" });}}>
            choose your path again, Padawan
        </button>

        <div className="side-image">
            <img src={luke} title="Darth Vader" alt="Darth Vader" />
        </div>

        <h2 className="your-master">
            Your master is <span>{side.name}</span>
        </h2>

    </div>
  </>
);
