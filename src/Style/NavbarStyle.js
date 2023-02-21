import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.img`
  width: 60px;
  height: 60px;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 1rem;
  margin-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-flow: nowrap;
  margin-top: auto;
  margin-bottom: auto;
  @media (max-width: 900px) {
    display: none;
  }
`;

const NavbarLink = styled(NavLink)`
  padding-right: 50px;
  list-style-type: none;
  font-size: 20px;
  font-weight: 600;
  color: #ffd700;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: white;
  }

  @media (max-width: 300) {
    font-size: 10px;
  }
`;

const HamburgerMenu = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: block;
  }
`;

const Menu = styled.div`
  background-color: darkblue;
`;

export { StyledLogo, Nav, Ul, NavbarLink, HamburgerMenu, Menu };
