import css from "@/css/studen.detail.module.css";
const StudentDetail = ({ children, student }) => {
  return (
    <>
      <div className={css.body}>
        <div>
          <strong>학번</strong>
          <span>{student.st_num}</span>
        </div>
        <div>
          <strong>이름</strong>
          <span>{student.st_name}</span>
        </div>
        <div>
          <strong>학과</strong>
          <span>{student.st_dept}</span>
        </div>
        <div>
          <strong>학년</strong>
          <span>{student.st_grade}</span>
        </div>
        <div>
          <strong>학전화번호</strong>
          <span>{student.st_tel}</span>
        </div>
        <div>
          <strong>주소</strong>
          <span>{student.addr}</span>
        </div>
      </div>
      {children}
    </>
  );
};

export default StudentDetail;
