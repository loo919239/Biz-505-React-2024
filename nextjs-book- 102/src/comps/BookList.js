"use client";
import { useEffect } from "react";
import { getNaverBooks } from "@/api/naver_api";
const BookList = async ({ search }) => {
  const [books, setBooks] = useEffect([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getNaverBooks(search);
      setBooks([...result]);
    };
    fetchData();
  }, []);

  const viewList = books.map((book) => <li>{book.title}</li>);
  return <ul>{viewList}</ul>;
};

export default BookList;
