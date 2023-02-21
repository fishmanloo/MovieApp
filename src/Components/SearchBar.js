import React, { useContext } from "react";
import { GlobalContext } from "../context/SearchQueryContext";
import { Input } from "./UTIL/Input";

const SearchBar = () => {
  const { query, setQuery } = useContext(GlobalContext);

  const SearchQueryHandler = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Input placeholder="Search" value={query} onChange={SearchQueryHandler} />
  );
};

export default SearchBar;
