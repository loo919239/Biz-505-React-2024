const MemoInput = ({ Item, setItem, insert }) => {
  const onInsertHandler = () => {
    insert();
    setItem("");
  };

  const onChangeHander = (e) => {
    const text = e.target.value;
    setItem(text);
  };
  return (
    <>
      <input type="text" placeholder="메모제목" onChange={onChangeHander} />
      <input type="text" placeholder="메모를 입력하세요" />
      <input type="file" />
      <input type="button" value="추가" onClick={onInsertHandler} />
      <input type="hidden" value="삭제" />
    </>
  );
};

export default MemoInput;
