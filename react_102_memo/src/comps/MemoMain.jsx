import styles from "../css/MemoMain.module.css";
import "../css/Memo.css";
import MemoMainLeft from "./MemoMainLeft.jsx";
import MemoMainRight from "./MemoMainRight.jsx";
import { useState, useEffect } from "react";
// import uuid from "react-uuid";

// MemoLeft MemoRight 에서 import 할 컴포넌트를 Main 에서 import 하고
// MemoLeft MemoRight 에서 children 으로 보내서 컴포넌트를 합성하기
import MemoDate from "./MemoDate.jsx";
import MemoList from "./MemoList.jsx";
import MemoInput from "./MemoInput.jsx";

const MemoMain = () => {
  const [Item, setItem] = useState("");
  const [List, setList] = useState(() => {
    return localStorage.getItem("List") ? JSON.parse(localStorage.getItem("List")) : [];
  });

  const saveStorage = () => {
    localStorage.setItem("List", JSON.stringify(List));
  };
  // 어떤 특장한 데이터가 변경되었을때 실행할 event 를 설정
  useEffect(saveStorage, [List]);

  const insert = () => {
    // seq: uuid(),
    const newList = [...List, { li: Item, complete: false }];
    setList(newList);
  };

  return (
    <div className={styles.main}>
      <div className={styles.aside}>
        <MemoMainLeft>
          <MemoDate />
          <MemoList List={List} />
        </MemoMainLeft>
      </div>
      <div className={styles.aside}>
        <MemoMainRight>
          <MemoInput Item={Item} setItem={setItem} insert={insert} />
        </MemoMainRight>
      </div>
    </div>
  );
};

export default MemoMain;
