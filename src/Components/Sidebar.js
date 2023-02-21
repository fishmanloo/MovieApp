import React, { useContext } from "react";
import { Nav, Ul, NavbarLink } from "../Style/SideBarStyled";
import { GlobalContext } from "../context/SearchQueryContext";

const Sidebar = () => {
  const { setQuery } = useContext(GlobalContext);
  const SearchQueryHandler = () => {
    setQuery("");
  };

  return (
    <Nav>
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

export default Sidebar;
