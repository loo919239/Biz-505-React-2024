import React, { useEffect, useState } from "react";

import sun from "../img/sun.png";
import cloud from "../img/cloud.png";
import rainy from "../img/rainy.png";
import snow from "../img/snow.png";

import "../css/main.css";
import "../css/main_screen.css";

import LEVEL from "./Level";
import WRITE from "./Write";
import SPEECH from "./Speech";
import speechesData from "./speechData";
const MainHome = () => {
  const [currentLevel, setCurrentLevel] = useState(null); // 현재 레벨을 상태로 유지합니다.

  const handleLevelClick = (levelNumber) => {
    setCurrentLevel(levelNumber);
  };

  return (
    <>
      <div class="HM-home_container">
        <div class="HM-home_top">
          <div class="HM-home_first_menu">
            <div class="HM-home_weather">
              <label>
                <span>날씨</span>
              </label>
            </div>
            <div class="HM-home_img">
              <img src={sun} alt="sun" />
              <img src={cloud} alt="cloud" />
              <img src={rainy} alt="rainy" />
              <img src={snow} alt="snow" />
            </div>
            <div>
              <label class="HM-home_cal">
                <span>년</span> <span>월</span> <span>일</span>
              </label>
            </div>
          </div>
          <div class="HM-home_second_menu">
            <label>제목 : 수족관을 다녀왔다!</label>
          </div>
        </div>
        <div className="HM-home_picture">
          <LEVEL onLevelClick={handleLevelClick} />
        </div>
        <WRITE />
        {currentLevel !== null && (
          <SPEECH
            speeches={speechesData}
            currentLevel={currentLevel}
          />
        )}
      </div>
    </>
  );
};
export default MainHome;
