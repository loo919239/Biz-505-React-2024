import styles from "../css/MemoMain.module.css";
import "../css/Memo.css";
import MemoMainLeft from "./MemoMainLeft.jsx";
import MemoMainRight from "./MemoMainRight.jsx";

import MemoDate from "./MemoDate.jsx";
import MemoList from "./MemoList.jsx";
import MemoInput from "./MemoInput.jsx";
import MemoItem from "./memoItem.jsx";

import moment from "moment";

import React, { useState } from "react";

const MemoMain = () => {
  const [memo, setMemo] = useState({
    m_seq: 0,
    m_id: "UUID",
    m_author: "loo919239@naver.com",
    m_date: moment().format("YYYY-MM-DD"),
    m_time: moment().format("HH:mm:ss"),
    m_subject: "",
    m_memo: "",
    m_image: "",
  });

  const [memoList, setMemoList] = useState([]);
  const memoInset = () => {
    const newMemoList = [...memoList, { ...memo, m_date: moment().format("YYYY-MM-DD"), m_time: moment().format("HH:mm:ss") }];
    setMemoList([...newMemoList]);
    setMemo({ ...memo, m_date: moment().format("YYYY-MM-DD"), m_time: moment().format("HH:mm:ss"), m_subject: "", m_memo: "", m_image: "" });
  };

  return (
    <div className={styles.main}>
      <div className={styles.aside}>
        <MemoMainLeft>
          <MemoDate memo={memo} setMemo={setMemo} />
          <MemoList memoList={memoList} />
        </MemoMainLeft>
      </div>
      <div className={styles.aside}>
        <MemoMainRight>
          <MemoInput memo={memo} setMemo={setMemo} memoInsert={memoInset} />
        </MemoMainRight>
      </div>
    </div>
  );
};

export default MemoMain;
