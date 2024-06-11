import React from "react";
import { Link } from "react-router-dom";
import { useSearchBook } from "../hooks/useSearchBook";
import SearchBookResult from "../components/SearchBookResult";

const SearchPage = (props) => {
  const { location } = props;
  const { isError, handleOnChangeBookSelf, searchList, handleSearch } =
    useSearchBook(location);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            onChange={(event) => handleSearch(event.target.value)}
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <SearchBookResult
        searchList={searchList}
        handleOnChangeBookSelf={handleOnChangeBookSelf}
        isError={isError}
      />
    </div>
  );
};

export default SearchPage;
