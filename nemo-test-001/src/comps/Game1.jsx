import React, { useState } from "react";

const Game1 = () => {
  const [lives, setLives] = useState(3); // 목숨 상태 변수 추가

  const handleLogout = () => {
    // 로그아웃 로직 구현
  };

  const handleClear = () => {
    // 정답 확인 로직 구현
  };

  const handleAllDelete = () => {
    // 모두 삭제 로직 구현
  };

  return (
    <>
      <div className="game-container">
        <div className="main-hint-container">
          {/* 힌트 컨테이너 */}
        </div>
        <div className="main-form-container">{/* 폼 컨테이너 */}</div>
        <div id="lives">목숨: {lives}</div> {/* 목숨 표시 */}
        <div className="clear">
          <button onClick={handleClear}>정답확인</button>{" "}
          {/* 정답 확인 버튼 */}
        </div>
        <div id="CLEAR_IS"></div>
      </div>
      <div className="HM-main_hover_box"></div>
      <nav className="HM-main_nav">
        <ul>
          <li>홈</li>
          <li>
            <button onClick={handleLogout}>로그아웃</button>
          </li>{" "}
          {/* 로그아웃 버튼 */}
        </ul>
      </nav>
    </>
  );
};

export default Game1;
