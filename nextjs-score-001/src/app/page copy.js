"use client";
// import Image from "next/image";
import styles from "@/css/page.module.css";
import StudentList from "./comps/StudentList";
import { useEffect, useState } from "react";
// import 한 selectAll 함수를 st_selectAll 이라는 이름으로 사용하겠다.
import { selectAll as st_selectAll } from "@/app/api/student.js";
import StudentDetail from "./comps/StudentDtail";
import ScoreList from "./comps/ScoreList";
import { findByStNum } from "./api/score";

export default function Home() {
  const [studentList, setStudentList] = useState([]);
  const [scoreList, setScoreList] = useState([]);
  const [selectStudent, setSelectStudent] = useState(null);
  const [studentDetail, setStudentDetail] = useState(null);
  useEffect(() => {
    const stdFetch = async () => {
      const result = await st_selectAll();
      if (result) setStudentList(result);
    };
    stdFetch();
  }, []);

  useEffect(() => {
    const scoreFetch = async () => {
      if (selectStudent) {
        const result = await findByStNum(selectStudent);
        setScoreList(result);
        setStudentDetail(result);
      }
    };
    if (selectStudent !== null) {
      scoreFetch();
    }
  }, [selectStudent]);

  const handleStudentSelect = async (st_num) => {
    setSelectStudent(st_num);
    setScoreList([]);
    setStudentDetail([]);
  };

  return (
    <main className={styles.main}>
      <section className={styles.list}>
        <StudentList
          studentList={studentList}
          handleStudentSelect={handleStudentSelect}
        />
      </section>
      <section className={styles.detail}>
        <StudentDetail studentDetail={studentDetail}>
          <ScoreList scoreList={scoreList} />
        </StudentDetail>
      </section>
    </main>
  );
}
