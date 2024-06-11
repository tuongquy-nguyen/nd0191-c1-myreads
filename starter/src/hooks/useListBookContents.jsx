import { useEffect, useState } from "react";
import { getAll, update } from "../BooksAPI";

export const useListBookContents = () => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAll();
        setBookList(data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  const handleChangeShelf = async (currentBook, newBookShelf) => {
    try {
      await update(currentBook, newBookShelf);
      setBookList((pre) =>
        pre.map((b) =>
          b.id === currentBook.id ? { ...b, shelf: newBookShelf } : b
        )
      );
    } catch (error) {
      console.error("Error updating book shelf:", error);
    }
  };

  return {
    bookList,
    handleChangeShelf,
  };
};
