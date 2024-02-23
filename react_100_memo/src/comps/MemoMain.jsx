import MemoList from "./MemoList";
import MemoInput from "./MemoInput";
import "../css/MemoMain.css";

const MemoMain = () => {
  return (
    <div className="all">
      <header className="h2">
        <h2>오늘은 내 생의 가장 젊은 날</h2>
      </header>
      <section className="main">
        <div className="aside">
          <MemoList />
        </div>
        <div className="aside">
          <MemoInput />
        </div>
      </section>
      <footer>
        <address>CopyRight &copy; loo919239@naver.com</address>
      </footer>
    </div>
  );
};

export default MemoMain;
