import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.img`
  width: 60px;
  height: 60px;
`;

const Nav = styled.div`
  height: auto;
  width: 100%;
  position: absolute;
  height: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: #ffd700;
  z-index: 1;

  @media (min-width: 900px) {
    display: none;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;

  @media (max-width: 560px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const NavbarLink = styled(NavLink)`
  padding-right: 100px;
  list-style-type: none;
  font-size: 20px;
  font-weight: 600;
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: white;
  }

  @media (max-width: 560px) {
    padding-bottom: 10px;
  }
`;

export { StyledLogo, Nav, Ul, NavbarLink };
