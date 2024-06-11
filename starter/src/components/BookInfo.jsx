import React from "react";
import bookCover from "../icons/book_cover.png";
import { BookStyle } from "../const";
import ShelfChanger from "./ShelfChanger";
import PropTypes from "prop-types";

const { BookWidth, BookHeight } = BookStyle;

const BookInfo = ({ book, onChangeBookSelf }) => {
  const thumbnail = book.imageLinks
    ? `url(${book.imageLinks.thumbnail})`
    : `url(${bookCover})`;
  const authors = book.authors?.join(", ");

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              backgroundImage: thumbnail,
              width: BookWidth,
              height: BookHeight,
            }}
          />
          <ShelfChanger book={book} onChangeBookSelf={onChangeBookSelf} />
        </div>
        <div className="book-title">{book.title}</div>
        {authors && <div className="book-authors">{authors}</div>}
      </div>
    </li>
  );
};

BookInfo.propTypes = {
  book: PropTypes.object.isRequired,
  onChangeBookSelf: PropTypes.func.isRequired,
};

export default BookInfo;
