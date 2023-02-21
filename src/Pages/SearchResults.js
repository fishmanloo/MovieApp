import React, { useContext } from "react";
import { useQuery } from "react-query";
import { GlobalContext } from "../context/SearchQueryContext";
import axios from "axios";
import SearchCard from "../Components/Cards/SearchCard";
import LoadSpinner from "../Components/UTIL/LoadSpinner";

const SearchResults = () => {
  const { query, actorId, setActorDetail } = useContext(GlobalContext);

  const { data: ActorData } = useQuery(["actor", actorId], async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/person/${actorId}?api_key=ef84810bce7de06c309380c0f94717b3&language=en-US`
    );
    return setActorDetail(response.data);
  });

  const { isLoading, data, isError } = useQuery(["search", query], async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=ef84810bce7de06c309380c0f94717b3&language=en-US&query=%${query}&page=1&include_adult=false`
    );
    return response.data.results;
  });

  if (isLoading) {
    return <LoadSpinner />;
  }
  if (isError) {
    return <h1>Ups Something Went Wrong</h1>;
  }
  return <SearchCard searchItemData={data} ActorData={ActorData} />;
};

export default SearchResults;
