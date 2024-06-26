import React, { useState, useEffect, useRef } from "react";
import boy from "../img/boy.png";
import "../css/speech.css";
import Game1 from "./Game1";

const Speech = ({ speeches, currentLevel }) => {
  const [filteredSpeeches, setFilteredSpeeches] = useState([]);
  const [currentSpeechIndex, setCurrentSpeechIndex] = useState(0);
  const [isSpeechVisible, setIsSpeechVisible] = useState(true);

  const speechContainerRef = useRef(null);

  useEffect(() => {
    const levelSpeeches = speeches.filter(
      (speech) => speech.s_num === currentLevel
    );
    setFilteredSpeeches(levelSpeeches);
    setCurrentSpeechIndex(0);
    setIsSpeechVisible(true);

    if (speechContainerRef.current) {
      speechContainerRef.current.focus();
    }
  }, [speeches, currentLevel]);

  const handleNextSpeech = () => {
    if (currentSpeechIndex < filteredSpeeches.length - 1) {
      setCurrentSpeechIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsSpeechVisible(false);
    }
  };

  const handleSkip = () => {
    setIsSpeechVisible(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" || event.key === "13") {
      event.preventDefault();
      handleNextSpeech();
    }
  };

  return (
    <>
      {isSpeechVisible && (
        <div
          className="conversationBox-back"
          tabIndex={0}
          onKeyPress={handleKeyPress}
          ref={speechContainerRef}
        >
          <img
            src={boy}
            className="avatar"
            alt="A의 아바타"
            style={{
              opacity:
                filteredSpeeches[currentSpeechIndex]?.s_speaker ===
                "B"
                  ? 0.5
                  : 1,
            }}
          />
          <div id="conversationBox" className="conversation-box">
            <div id="speechContainer" className="speech-container">
              {filteredSpeeches.length > 0 && (
                <div className="speech-part">
                  <span className="num" style={{ display: "none" }}>
                    {filteredSpeeches[currentSpeechIndex]?.s_num}
                  </span>
                  <span
                    className="speaker"
                    style={{ display: "none" }}
                  >
                    {filteredSpeeches[currentSpeechIndex]?.s_speaker}
                  </span>
                  <span
                    className="message"
                    style={{
                      color:
                        filteredSpeeches[currentSpeechIndex]
                          ?.s_speaker === "A"
                          ? "green"
                          : "black",
                    }}
                  >
                    {filteredSpeeches[currentSpeechIndex]?.s_message}
                  </span>
                </div>
              )}
            </div>
          </div>
          <button id="skipButton" onClick={handleSkip}>
            건너뛰기
          </button>
          {filteredSpeeches.length > 1 && (
            <button id="nextButton" onClick={handleNextSpeech}>
              &#187;&#187;
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Speech;
