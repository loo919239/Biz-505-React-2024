import React, { useState, useEffect } from "react";
import "./Speech.css";
import boy from "./boy.png";

const Speech = () => {
  return (
    <>
      <div className="conversationBox-back">
        <img
          src={boy}
          className="avatar"
          alt="A's avatar"
          width="200px"
        />
        <div id="conversationBox" className="conversation-box">
          <div id="speechContainer" className="speech-container">
            <div className="speech-part" style={{ display: "none" }}>
              <span className="num" style={{ display: "none" }}>
                speech.s_num
              </span>
              <span className="speaker" style={{ display: "none" }}>
                speech.s_speaker
              </span>
              <span className="message">speech.s_message</span>
            </div>
          </div>
        </div>
        <button id="skipButton">skip</button>
        <button id="nextButton">&#187;&#187;</button>
      </div>
    </>
  );
};

export default Speech;
