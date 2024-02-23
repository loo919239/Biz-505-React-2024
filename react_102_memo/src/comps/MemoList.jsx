import React from "react";

const MemoList = ({ List }) => {
  return (
    <ul>
      {List.map((Item, index) => (
        <li key={index}>{Item.li}</li>
      ))}
    </ul>
  );
};

export default MemoList;
