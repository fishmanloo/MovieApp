import styled from "styled-components";

export const CardContainer = styled.div`
  height: auto;
  width: auto;
  margin: 1%;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardBox = styled.div`
  cursor: pointer;
  position: relative;
  margin: 1%;
  width: 200px;
  height: 290px;

  ::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5x);
    background: rgb(185, 185, 185, 0.1);
    border-radius: 0px 0px 10px 10px;
  }
`;

export const Content = styled.div`
  position: absolute;
  width: 100%;
  min-height: 25%;
  border-radius: 0px 0px 10px 10px;
  bottom: 0;
  z-index: 1;

  ::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: rgb(185, 185, 185, 0.1);
    backdrop-filter: blur(5px);
    border-radius: 0px 0px 10px 10px;
    z-index: -1;
  }
`;

export const Titlte = styled.h1`
  font-weight: 800;
  margin-left: 3%;
  color: white;
  font-size: 15px;
`;

export const ReleaseDate = styled.h1`
  margin-left: 3%;
  color: white;
  font-size: 13px;
`;

export const Rating = styled.h1`
  margin-left: 3%;
  font-size: 13px;
`;

export const Popularity = styled.span`
  color: black;
  margin-right: 3%;
  background-color: rgb(255, 255, 26, 0.9);
`;

export const IMDB = styled.span`
  color: black;
  background-color: yellow;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

export const StarIMG = styled.img`
  height: 6%;
  width: 6%;
  margin-left: 5px;
  margin-right: 5px;
`;
