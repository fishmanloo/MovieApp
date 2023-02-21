import React, { useContext } from "react";
import { GlobalContext } from "../context/SearchQueryContext";
import Movies from "./Movies";
import SearchResults from "./SearchResults";

const Home = () => {
  const { query } = useContext(GlobalContext);

  return query === "" ? <Movies /> : <SearchResults />;
};

export default Home;
