import React, { useContext } from "react";
import {
  CardContainer,
  CardBox,
  Content,
  Image,
  Titlte,
  ReleaseDate,
  Rating,
  IMDB,
  StarIMG,
  Popularity,
} from "../../Style/CardStyled";
import Star from "../../Assets/Star.png";
import { GlobalContext } from "../../context/SearchQueryContext";
import Modal from "../UTIL/Modal";

const SearchCard = ({ searchItemData }) => {
  const {
    setModalData,
    modalData,
    setIsModalOpen,
    isModalOpen,
    actorDetail,
    setActorId,
  } = useContext(GlobalContext);

  const getModalDataHandler = (searchItem) => {
    setModalData({
      title: searchItem.title ? searchItem.title : searchItem.name,
      poster: `https://image.tmdb.org/t/p/w200${
        searchItem.poster_path
          ? searchItem.poster_path
          : searchItem.profile_path
      }`,
      date: searchItem.release_date
        ? searchItem.release_date
        : searchItem.first_air_date,
      rating: searchItem.vote_average
        ? searchItem.vote_average
        : searchItem.popularity,
      overview: searchItem.overview
        ? searchItem.overview
        : actorDetail.biography,
    });
  };

  return (
    <CardContainer>
      {searchItemData.map((searchItem) => {
        return (
          <CardBox
            key={searchItem.id}
            onClick={() => {
              getModalDataHandler(searchItem);
              setActorId(searchItem.id);
              setIsModalOpen(true);
              console.log(modalData);
            }}
          >
            <Image
              src={`https://image.tmdb.org/t/p/w200${
                searchItem.poster_path
                  ? searchItem.poster_path
                  : searchItem.profile_path
              }`}
              alt="moviePoster"
            />
            <Content>
              <Titlte>
                {searchItem.title ? searchItem.title : searchItem.name}
              </Titlte>
              <ReleaseDate>
                {searchItem.release_date
                  ? searchItem.release_date
                  : searchItem.first_air_date}
              </ReleaseDate>
              {searchItem.vote_average ? (
                <Rating>
                  <IMDB>IMDB: </IMDB> <StarIMG src={Star} alt="star-symbol" />
                  {Math.round(searchItem.vote_average * 10) / 10}
                </Rating>
              ) : (
                <Rating>
                  <Popularity>Popularity: </Popularity>
                  <StarIMG src={Star} alt="star-symbol" />
                  {searchItem.popularity}
                </Rating>
              )}
            </Content>
          </CardBox>
        );
      })}
      {isModalOpen === true ? <Modal /> : null}
    </CardContainer>
  );
};

export default SearchCard;
