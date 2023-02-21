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

const MovieCard = ({ MovieData }) => {
  const { setModalData, setIsModalOpen, isModalOpen } =
    useContext(GlobalContext);

  const getModalDataHandler = (movie) => {
    setModalData({
      title: movie.title,
      poster: `https://image.tmdb.org/t/p/w200${movie.poster_path}`,
      date: movie.release_date,
      rating: movie.vote_average,
      overview: movie.overview,
    });
  };

  return (
    <React.Fragment>
      <CardContainer>
        {MovieData.map((movie) => {
          return (
            <CardBox
              key={movie.id}
              onClick={() => {
                getModalDataHandler(movie);
                setIsModalOpen(true);
              }}
            >
              <Image
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt="moviePoster"
              />
              <Content>
                <Titlte>{movie.title}</Titlte>
                <ReleaseDate>({movie.release_date})</ReleaseDate>
                <Rating>
                  <IMDB>IMDB: </IMDB> <StarIMG src={Star} alt="star-symbol" />
                  {Math.round(movie.vote_average * 10) / 10}
                </Rating>
              </Content>
            </CardBox>
          );
        })}
        {isModalOpen === true ? <Modal /> : null}
      </CardContainer>
    </React.Fragment>
  );
};

export default MovieCard;
