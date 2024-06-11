import { Link } from "react-router-dom";
import Shelf from "./Shelf";
import { useListBookContents } from "../hooks/useListBookContents";
import { CONTENT_TYPES } from "../const";

const ListBookContent = () => {
  const { bookList, handleChangeShelf } = useListBookContents();

  const renderBookshelf = (contentType, index) => {
    const contentTypeBookList = bookList.filter(
      (book) => book.shelf === contentType.type
    );
    return (
      <div className="bookshelf" key={index}>
        <h2 className="bookshelf-title">{contentType.title}</h2>
        <div className="bookshelf-books">
          <Shelf
            bookList={contentTypeBookList}
            onChangeBookSelf={handleChangeShelf}
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="list-books-content">
        {bookList.length > 0 && <div>{CONTENT_TYPES.map(renderBookshelf)}</div>}
      </div>
      <div className="open-search">
        <Link
          to={{
            pathname: "/search",
            state: { currentBookList: bookList },
          }}
        />
      </div>
    </div>
  );
};

export default ListBookContent;
