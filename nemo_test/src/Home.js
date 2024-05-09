import React from "react";
import sun from "./img/sun.png";
import cloud from "./img/cloud.png";
import rainy from "./img/rainy.png";
import snow from "./img/snow.png";
import smile from "./img/smile.png";
import fish from "./img/fish.png";
import jellyfish from "./img/jellyfish.png";
import whale from "./img/whale.png";
import question from "./img/question.png";
import completeImg from "./img/complete_img.png";
import exMark from "./img/ex-mark.png";
import "./App.css";
import "./css/main.css";
import "./css/main_screen.css";
import Speech from "./app/speech/Speech";

function App() {
  const clear_data1 = { c_clear: 1 }; // 예시 데이터
  const clear_data2 = { c_clear: 0 }; // 예시 데이터
  const clear_data3 = { c_clear: 1 }; // 예시 데이터
  const clear_data4 = { c_clear: 0 }; // 예시 데이터
  const clear_data5 = { c_clear: 0 }; // 예시 데이터

  return (
    <div className="App">
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
          <div className="HM-home_picture">
            {clear_data5.c_clear !== 1 && (
              <>
                <div>
                  <div id="LEVEL3" className="YS_p_div">
                    {clear_data3.c_clear === 1 ? (
                      <img
                        className={`YS_picture_c ${
                          clear_data1.c_clear === 1 &&
                          clear_data2.c_clear === 1 &&
                          clear_data3.c_clear === 1 &&
                          clear_data4.c_clear !== 1
                            ? "fade-in"
                            : ""
                        }`}
                        src={jellyfish}
                        alt="Jellyfish Image"
                      />
                    ) : (
                      <img
                        className={`YS_picture ${
                          clear_data1.c_clear === 1 &&
                          clear_data2.c_clear === 1 &&
                          clear_data4.c_clear !== 1
                            ? "next_level"
                            : ""
                        }`}
                        src={question}
                        alt="Question Image"
                      />
                    )}
                  </div>
                  <div id="LEVEL1" className="YS_p_div">
                    {clear_data1.c_clear === 1 ? (
                      <img
                        className={`YS_picture_c ${
                          clear_data1.c_clear === 1 &&
                          clear_data2.c_clear !== 1 &&
                          clear_data3.c_clear !== 1 &&
                          clear_data4.c_clear !== 1
                            ? "fade-in"
                            : ""
                        }`}
                        src={smile}
                        alt="Smile Image"
                      />
                    ) : (
                      <img
                        className={`YS_picture ${
                          clear_data2.c_clear !== 1 &&
                          clear_data3.c_clear !== 1 &&
                          clear_data4.c_clear !== 1
                            ? "next_level"
                            : ""
                        }`}
                        src={question}
                        alt="Question Image"
                      />
                    )}
                  </div>
                </div>
                <div>
                  <div id="LEVEL4" className="YS_p_div">
                    {clear_data4.c_clear === 1 ? (
                      <img
                        className={`YS_picture_c ${
                          clear_data1.c_clear === 1 &&
                          clear_data2.c_clear === 1 &&
                          clear_data3.c_clear === 1 &&
                          clear_data4.c_clear === 1
                            ? "fade-in"
                            : ""
                        }`}
                        src={whale}
                        alt="Whale Image"
                      />
                    ) : (
                      <img
                        className={`YS_picture ${
                          clear_data1.c_clear === 1 &&
                          clear_data2.c_clear === 1 &&
                          clear_data3.c_clear === 1
                            ? "next_level"
                            : ""
                        }`}
                        src={question}
                        alt="Question Image"
                      />
                    )}
                  </div>
                  <div id="LEVEL2" className="YS_p_div">
                    {clear_data2.c_clear === 1 ? (
                      <img
                        className={`YS_picture_c ${
                          clear_data1.c_clear === 1 &&
                          clear_data2.c_clear === 1 &&
                          clear_data3.c_clear !== 1 &&
                          clear_data4.c_clear !== 1
                            ? "fade-in"
                            : ""
                        }`}
                        src={fish}
                        alt="Fish Image"
                      />
                    ) : (
                      <img
                        className={`YS_picture ${
                          clear_data1.c_clear === 1 &&
                          clear_data3.c_clear !== 1 &&
                          clear_data4.c_clear !== 1
                            ? "next_level"
                            : ""
                        }`}
                        src={question}
                        alt="Question Image"
                      />
                    )}
                  </div>
                </div>
              </>
            )}
            {clear_data5.c_clear === 1 && (
              <div className="complete_img_box">
                <img
                  className="YS_picture fade-in"
                  src={completeImg}
                  alt="Complete Image"
                />
              </div>
            )}
            <section className="ex-mark hidden" id="LEVEL5">
              <img
                className="YS_picture next_level"
                src={exMark}
                alt="Exclamation Mark"
                width="100%"
              />
            </section>
          </div>
        </div>
      </div>
      <Speech />
    </div>
  );
}

export default App;
