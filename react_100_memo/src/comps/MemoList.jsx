import "../css/MemoList.css";

const MemoList = () => {
  return (
    <>
      <div className="date">
        <input className="todate" type="text" placeholder="2024-02-23" />
        <input className="totime" type="text" placeholder="09:18:00" />
        <input className="btn_new" type="button" value="새로작성" />
      </div>
      <div className="list">
        <ul>
          <li>설산에서 고행을</li>
          <li>없는 사막이다 보이는</li>
          <li>하는 온갖 과실이</li>
        </ul>
      </div>
    </>
  );
};

export default MemoList;
