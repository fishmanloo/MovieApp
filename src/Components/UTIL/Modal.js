import React, { useContext } from "react";
import { GlobalContext } from "../../context/SearchQueryContext";
import {
  ModalOverlay,
  ModalContainer,
  Poster,
  Description,
  MovieIcon,
  Titlte,
  Overview,
  StarIMGModal,
  FlexContainer,
} from "../../Style/ModalStyled";
import { HiXMark } from "react-icons/hi2";
import { IMDB, Popularity, Rating } from "../../Style/CardStyled";
import Star from "../../Assets/Star.png";

const Modal = () => {
  const { setIsModalOpen, modalData } = useContext(GlobalContext);

  const CloseModalHandler = () => {
    setIsModalOpen(false);
  };

  console.log("name", modalData.name);
  return (
    <ModalOverlay onClick={CloseModalHandler}>
      <ModalContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <FlexContainer>
          <div>
            <Poster src={modalData.poster} alt="modal poster" />
          </div>
          <div>
            <MovieIcon>
              <Titlte>
                {modalData.title ? modalData.title : modalData.name}
                {modalData.date ? <span>({modalData.date})</span> : null}
              </Titlte>
              <HiXMark color="red" size="30" onClick={CloseModalHandler} />
            </MovieIcon>
            {modalData.rating ? (
              <Rating>
                <IMDB>IMDB: </IMDB>{" "}
                <StarIMGModal src={Star} alt="star-symbol" />
                {modalData.rating}
              </Rating>
            ) : (
              <Rating>
                <Popularity>Popularity: </Popularity>
                <StarIMGModal src={Star} alt="star-symbol" />
                {modalData.popularity}
              </Rating>
            )}

            <Overview>Details:</Overview>
            {modalData.overview ? (
              <Description>{modalData.overview}</Description>
            ) : (
              <Description>{modalData.biography}</Description>
            )}
          </div>
        </FlexContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
