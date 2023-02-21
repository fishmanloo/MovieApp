import React, { useContext } from "react";
import { useQuery } from "react-query";
import { GlobalContext } from "../context/SearchQueryContext";
import { getMovieDetails } from "../api/api";
import MovieCard from "../Components/Cards/MovieCard";
import LoadSpinner from "../Components/UTIL/LoadSpinner";
import SearchResults from "./SearchResults";

const Movies = () => {
  const { query } = useContext(GlobalContext);

  const { isLoading, data, isError } = useQuery("movies", getMovieDetails);

  if (isLoading) {
    return <LoadSpinner></LoadSpinner>;
  }
  if (isError) {
    return <h1>Ups Something Went Wrong</h1>;
  }

  return query === "" ? <MovieCard MovieData={data} /> : <SearchResults />;
};

export default Movies;
