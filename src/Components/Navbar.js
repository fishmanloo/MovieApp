import React, { useContext, useState } from "react";
import Logo from "../Assets/film-reel.png";
import {
  StyledLogo,
  Nav,
  Ul,
  NavbarLink,
  HamburgerMenu,
} from "../Style/NavbarStyle";
import { Button } from "./UTIL/Button";
import SearchBar from "./SearchBar";
import { GlobalContext } from "../context/SearchQueryContext";
import { Turn as Hamburger } from "hamburger-react";

export const Navbar = () => {
  const { setQuery, setMenuIsOpen, menuIsOpen } = useContext(GlobalContext);

  const SearchQueryHandler = () => {
    setQuery("");
  };

  return (
    <Nav>
      <NavbarLink to="/">
        <StyledLogo
          src={Logo}
          alt="Movie Reel Logo"
          onClick={SearchQueryHandler}
        ></StyledLogo>
      </NavbarLink>
      <SearchBar />
      <HamburgerMenu>
        <Hamburger
          toggled={menuIsOpen}
          toggle={() => setMenuIsOpen(!menuIsOpen)}
          color="gold"
        ></Hamburger>
      </HamburgerMenu>
      <Ul>
        <NavbarLink to="/Movies" onClick={SearchQueryHandler}>
          MOVIES
        </NavbarLink>
        <NavbarLink to="/Shows" onClick={SearchQueryHandler}>
          TV SHOWS
        </NavbarLink>
        <NavbarLink to="/People" onClick={SearchQueryHandler}>
          PEOPLE
        </NavbarLink>
      </Ul>
    </Nav>
  );
};

export default Navbar;
