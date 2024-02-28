import styles from "@/css/Notice.input.module.css";
// api/notice.js 에 선언된 createNotice 함수를 사용하겠다.
import { createNotice } from "@/app/api/notice";
/**
 * 공지사항 작성하기
 * 작성자, 제목, 내용, 중요도
 * 저장버튼
 */
// notice/input/page.js
export default () => {
  const actionHandler = async (formData) => {
    "use server";
    console.log(formData);
    // action에 의해서 전달된 formData 를 JSON type 의 데이터로 변환하기
    const noticeData = {
      m_author: formData.get("m_author"),
      m_flag: formData.get("m_flag"),
      m_subject: formData.get("m_subject"),
      m_content: formData.get("m_content"),
    };

    await createNotice(noticeData);
  };

  return (
    <form
      action={actionHandler}
      method="POST"
      className={styles.form}
    >
      <div>
        <input placeholder="작성자" name="m_author"></input>
      </div>
      <div>
        <select name="m_flag">
          <option value="0">중요도 선택</option>
          <option value="1">중요공지</option>
          <option value="2">일반공지</option>
          <option value="3">지난공지</option>
        </select>
      </div>
      <div>
        <input placeholder="제목" name="m_subject"></input>
      </div>
      <div>
        <textarea
          placeholder="내용"
          rows="10"
          name="m_content"
        ></textarea>
      </div>
      <div>
        <input type="submit" value="저장"></input>
      </div>
    </form>
  );
  // return (
  //   <>
  //     <h1>공지사항 작성하기</h1>
  //     <div className="input">
  //       <input type="text" placeholder="제목" />
  //       <input className="text" type="text" placeholder="내용" />
  //       <div className="div">
  //         <input type="text" placeholder="작성자" />
  //         <input type="text" placeholder="중요도" />
  //       </div>
  //       <input type="button" value="저장" />
  //     </div>
  //   </>
  // );
};
