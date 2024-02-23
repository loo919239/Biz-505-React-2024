import "../css/MemoInput.css";

const MemoInput = () => {
  return (
    <div className="input">
      <input className="tosubject" type="text" placeholder="제목을 입력하세요" />
      <input className="tomemo" type="text" placeholder="메모를 입력하세요" />
      <input className="toimage" type="file" />
      <input type="button" value="저장" />
    </div>
  );
};

export default MemoInput;
