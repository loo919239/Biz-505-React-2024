// BookList
const BookList = ({ bookList }) => {
  // const bookList = [
  //   "자바완전정복",
  //   "자바입문",
  //   "MySQL",
  //   "데이터베이스",
  //   "NodeJS",
  // ];
  const viewList = bookList.map((book) => {
    return <li>{book}</li>;
  });

  return <aside>{viewList}</aside>;
};

export default BookList;

// export default () => {
//   return <h1>도서 리스트</h1>;
// };
