import React, { useContext } from "react";
import {
  CardContainer,
  CardBox,
  Content,
  Image,
  Titlte,
  Rating,
  StarIMG,
  Popularity,
} from "../../Style/CardStyled";
import Star from "../../Assets/Star.png";
import { GlobalContext } from "../../context/SearchQueryContext";
import Modal from "../UTIL/Modal";

const PeopleCard = ({ PeopleData }) => {
  const { setActorId, isModalOpen, setIsModalOpen } = useContext(GlobalContext);

  const settingActorId = async (id) => {
    setActorId(id);
  };

  return (
    <CardContainer>
      {PeopleData.map((people) => {
        return (
          <CardBox
            key={people.id}
            onClick={async () => {
              await settingActorId(people.id);
              setIsModalOpen(true);
            }}
          >
            <Image
              src={`https://image.tmdb.org/t/p/w200${people.profile_path}`}
              alt="moviePoster"
            />
            <Content>
              <Titlte>{people.name}</Titlte>
              <Rating>
                <Popularity>Popularity: </Popularity>{" "}
                <StarIMG src={Star} alt="star-symbol" />
                {people.popularity}
              </Rating>
            </Content>
          </CardBox>
        );
      })}
      {isModalOpen === true ? <Modal /> : null}
    </CardContainer>
  );
};

export default PeopleCard;
