import css from "@/css/student.list.module.css";
const StudentList = ({ studentList, setStudent }) => {
  const viewList = studentList.map((item) => (
    <li
      key={item.st_num}
      className={css.item}
      onClick={() => setStudent(item)}
    >
      <strong>{item.st_num}</strong>
      <strong>{item.st_name}</strong>
      <span> {item.st_dept}</span>
    </li>
  ));
  return (
    <>
      <h1>학생 리스트</h1>
      <ul className={css.body}>
        <li className={`${css.item} ${css.title}`}>
          <strong>학번</strong>
          <strong>이름</strong>
          <span>학과</span>
        </li>
      </ul>
      <section className="list">
        <ul>{viewList}</ul>
      </section>
    </>
  );
};
export default StudentList;
