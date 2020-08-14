import React from "react";


export default ({ handleCommand }) => (
  <>
    <div className="home page-content">

        <h1>
            Welcome to <span>iClinic</span>
        </h1>
        <p className="challenge">FRONTEND CHALLENGE</p>

        <button className="btnStart" onClick={e => {handleCommand({ op: "starWars" });}}>
            S T A R T
        </button>

    </div>
  </>
);
