import BookInfo from "./BookInfo";
import PropTypes from "prop-types";

const Shelf = ({ bookList, onChangeBookSelf }) => {
  return (
    <ol className="books-grid">
      {bookList.map((item) => (
        <BookInfo
          book={item}
          key={item.id}
          onChangeBookSelf={onChangeBookSelf}
        />
      ))}
    </ol>
  );
};

export default Shelf;

Shelf.propTypes = {
  bookList: PropTypes.array.isRequired,
  onChangeBookSelf: PropTypes.func.isRequired,
};
