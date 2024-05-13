import React, { useState, useEffect } from "react";
import boy from "../img/boy.png";
import "../css/speech.css";

const Speech = ({ speeches, currentLevel }) => {
  const [currentSpeechIndex, setCurrentSpeechIndex] = useState(0);
  const [avatarOpacity, setAvatarOpacity] = useState(1);
  const [filteredSpeeches, setFilteredSpeeches] = useState([]);

  useEffect(() => {
    const levelSpeeches = speeches.filter((speech) => {
      speech.level === currentLevel;
    });
    setFilteredSpeeches(levelSpeeches);
  }, [speeches, currentLevel]);

  useEffect(() => {
    const currentSpeech = filteredSpeeches[currentSpeechIndex];
    if (currentSpeech) {
      setAvatarOpacity(currentSpeech.speaker === "B" ? 0.5 : 1);
    }
  }, [currentSpeechIndex, filteredSpeeches]);

  const endConversation = () => {
    // 대화가 종료될 때의 처리를 합니다.
  };

  const handleNextSpeech = () => {
    setCurrentSpeechIndex((prevIndex) => prevIndex + 1);
    if (currentSpeechIndex + 1 >= filteredSpeeches.length) {
      endConversation();
    }
  };

  const handleSkip = () => {
    endConversation();
  };

  return (
    <>
      {filteredSpeeches.length > 0 && ( // 대화가 있을 때만 대화 상자를 렌더링합니다.
        <div className="conversationBox-back">
          <img
            src={boy}
            className="avatar"
            alt="A의 아바타"
            style={{ opacity: avatarOpacity }}
          />
          <div id="conversationBox" className="conversation-box">
            <div id="speechContainer" className="speech-container">
              {filteredSpeeches.map((speech, index) => (
                <div
                  className="speech-part"
                  key={index}
                  style={{
                    display:
                      index === currentSpeechIndex ? "block" : "none",
                  }} // 현재 대화만 표시합니다.
                >
                  <span className="num" style={{ display: "none" }}>
                    {speech.s_num}
                  </span>
                  <span
                    className="speaker"
                    style={{ display: "none" }}
                  >
                    {speech.s_speaker}
                  </span>
                  <span className="message">{speech.s_message}</span>
                </div>
              ))}
            </div>
          </div>
          <button id="skipButton" onClick={handleSkip}>
            건너뛰기
          </button>
          <button id="nextButton" onClick={handleNextSpeech}>
            &#187;&#187;
          </button>
        </div>
      )}
    </>
  );
};

export default Speech;
