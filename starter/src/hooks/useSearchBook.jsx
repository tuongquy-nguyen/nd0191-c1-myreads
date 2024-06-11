import { useState, useEffect } from "react";
import { search, update } from "../BooksAPI";

export const useSearchBook = (location) => {
  const [bookList, setBookList] = useState([]);
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    setBookList(location.state.currentBookList);
  }, [location.state.currentBookList]);

  const handleBookShelf = (bookList, searchList) => {
    if (bookList && searchList) {
      const updatedResults = searchList.map((searchBook) => {
        const matchingBook = bookList.find((book) => book.id === searchBook.id);
        return matchingBook
          ? { ...searchBook, shelf: matchingBook.shelf }
          : searchBook;
      });
      setSearchList(updatedResults);
    }
  };

  const handleSearch = async (input) => {
    if (!input) {
      setSearchList([]);
      return;
    }

    try {
      const res = await search(input);
      setSearchList(res);
      handleBookShelf(bookList, res);
    } catch (error) {
      setSearchList([]);
    }
  };

  const handleOnChangeBookSelf = async (book, newShelf) => {
    try {
      await update(book, newShelf);
      book.shelf = newShelf;
      setBookList((prevBooks) =>
        prevBooks.map((b) => (b.id === book.id ? { ...b, shelf: newShelf } : b))
      );
    } catch (error) {
      console.error("Error updating book shelf:", error);
    }
  };

  return {
    bookList,
    setBookList,
    searchList,
    setSearchList,
    handleSearch,
    handleOnChangeBookSelf,
  };
};
