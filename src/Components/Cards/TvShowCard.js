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
} from "../../Style/CardStyled";
import Star from "../../Assets/Star.png";
import { GlobalContext } from "../../context/SearchQueryContext";
import Modal from "../UTIL/Modal";

const TvShowCard = ({ TvShowData }) => {
  const { setModalData, setIsModalOpen, isModalOpen } =
    useContext(GlobalContext);

  const getModalDataHandler = (TvShow) => {
    setModalData({
      title: TvShow.name,
      poster: `https://image.tmdb.org/t/p/w200${TvShow.poster_path}`,
      date: TvShow.first_air_date ? TvShow.first_air_date : "No air date found",
      rating: TvShow.vote_average,
      overview: TvShow.overview ? TvShow.overview : "No overview found",
    });
  };

  return (
    <CardContainer>
      {TvShowData.map((TvShow) => {
        return (
          <CardBox
            key={TvShow.id}
            onClick={() => {
              getModalDataHandler(TvShow);
              setIsModalOpen(true);
            }}
          >
            <Image
              src={`https://image.tmdb.org/t/p/w200${TvShow.poster_path}`}
              alt="moviePoster"
            />
            <Content>
              <Titlte>{TvShow.name}</Titlte>
              <ReleaseDate>({TvShow.first_air_date})</ReleaseDate>
              <Rating>
                <IMDB>IMDB: </IMDB> <StarIMG src={Star} alt="star-symbol" />
                {Math.round(TvShow.vote_average * 10) / 10}
              </Rating>
            </Content>
          </CardBox>
        );
      })}
      {isModalOpen === true ? <Modal /> : null}
    </CardContainer>
  );
};

export default TvShowCard;
