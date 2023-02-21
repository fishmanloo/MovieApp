import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

export const ModalContainer = styled.div`
  display: flex;
  background-color: black;
  flex-direction: row;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  max-width: 60%;
  width: auto;
  overflow-y: auto;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
`;

export const Poster = styled.img`
  height: 100%;
  width: auto;

  @media (max-width: 900px) {
    width: 100%;
    max-height: 400px;
  }
`;

export const Titlte = styled.h1`
  margin-left: 3%;
  font-weight: 800;
  color: white;
  font-size: 25px;
`;

export const Description = styled.h1`
  margin-left: 3%;
  font-weight: 600;
  color: white;
  font-size: 15px;
  max-height: 200px;

  overflow-y: "auto";
`;

export const MovieIcon = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Overview = styled.p`
  margin-left: 3%;
  font-weight: 600;
  color: white;
  font-size: 18px;
`;

export const StarIMGModal = styled.img`
  height: 12px;
  width: 12px;
  margin-left: 5px;
  margin-right: 5px;
`;
