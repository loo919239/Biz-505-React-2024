import "../css/TodoInput.css";
import { useRef } from "react";

const TodoInput = ({ todoItem, setTodoItem, todoInsert }) => {
  const inputRef = useRef();

  const onInsertHandler = () => {
    todoInsert();
    setTodoItem("");
  };

  const onChangeHander = (e) => {
    const text = e.target.value;
    setTodoItem(text);
  };
  return (
    <div className="todoInput">
      <input placeholder="TODO" value={todoItem} onChange={onChangeHander} />
      <button disabled={todoItem.length < 2} onClick={onInsertHandler}>
        추가
      </button>
    </div>
  );
};

export default TodoInput;
