import sun from "../img/sun.png";
import cloud from "../img/cloud.png";
import rainy from "../img/rainy.png";
import snow from "../img/snow.png";

const MainHome = () => {
  return (
    <>
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
          </div>
        </div>
      </div>
    </>
  );
};
export default MainHome;
