import React, { useContext } from "react";
import { useQuery } from "react-query";
import { GlobalContext } from "../context/SearchQueryContext";
import { getPersonDetails } from "../api/api";
import PeopleCard from "../Components/Cards/PeopleCard";
import SearchResults from "./SearchResults";
import LoadSpinner from "../Components/UTIL/LoadSpinner";
import axios from "axios";

const People = () => {
  const { query, actorId, actorDetail, setModalData } =
    useContext(GlobalContext);

  const getModalDataHandler = async (people) => {
    setModalData({
      name: people.name,
      poster: `https://image.tmdb.org/t/p/w200${people.profile_path}`,
      birthplace: people.place_of_birth,
      birthday: people.birthday,
      popularity: people.popularity,
      biography: people.biography,
    });
  };

  const { data: ActorData } = useQuery(["actor", actorId], async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/person/${actorId}?api_key=ef84810bce7de06c309380c0f94717b3&language=en-US`
    );
    // return setActorDetail(response.data);
    console.log("actorDetail", response.data);
    // await setActorDetail(response.data);
    await getModalDataHandler(response.data);
    console.log("test", actorDetail);
  });

  const { isLoading, data, isError } = useQuery("people", getPersonDetails);

  if (isLoading) {
    return <LoadSpinner></LoadSpinner>;
  }

  if (isError) {
    return <h1>Ups Something Went Wrong</h1>;
  }
  return query === "" ? (
    <PeopleCard PeopleData={data} ActorData={ActorData} />
  ) : (
    <SearchResults />
  );
};

export default People;
