import React, { useContext } from "react";
import { useQuery } from "react-query";
import { getTvShowDetails } from "../api/api";
import { GlobalContext } from "../context/SearchQueryContext";
import TvShowCard from "../Components/Cards/TvShowCard";
import SearchResults from "./SearchResults";
import LoadSpinner from "../Components/UTIL/LoadSpinner";

const TVShows = () => {
  const { query } = useContext(GlobalContext);

  const { isLoading, data, isError } = useQuery("TvShows", getTvShowDetails);

  if (isLoading) {
    return <LoadSpinner></LoadSpinner>;
  }
  if (isError) {
    return <h1>Ups Something Went Wrong</h1>;
  }
  return query === "" ? <TvShowCard TvShowData={data} /> : <SearchResults />;
};

export default TVShows;
