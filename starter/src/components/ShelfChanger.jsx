const ShelfChanger = ({ book, onChangeBookSelf }) => {
  return (
    <div className="book-shelf-changer">
      <select
        onChange={(event) => onChangeBookSelf(book, event.target.value)}
        value={book.shelf || "none"}
      >
        <option value="moveTo" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default ShelfChanger;
