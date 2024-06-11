import Shelf from "./Shelf";

const SearchBookResult = (props) => {
  const { searchList, handleOnChangeBookSelf } = props;

  return (
    <div className="search-books-results">
      <Shelf bookList={searchList} onChangeBookSelf={handleOnChangeBookSelf} />
    </div>
  );
};

export default SearchBookResult;
