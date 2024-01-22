import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { Container, Menu, Li } from "./style";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [changeBackground, setChangeBackground] = useState(false);
  const { pathname } = useLocation();

  window.onscroll = () => {
    if (!changeBackground && window.scrollY > 150) {
      setChangeBackground(true);
    }
    if (changeBackground && window.scrollY < 150) {
      setChangeBackground(false);
    }
  };

  return (
    <Container changeBackground={changeBackground}>
      <img src={Logo} alt="logo-site" />
      <Menu>
        <Li isActive={pathname === "/"}>
          <Link to="/">Home</Link>
        </Li>
        <Li isActive={pathname.includes("filmes")}>
          <Link to="/filmes">Filmes</Link>
        </Li>
        <Li isActive={pathname.includes("series")}>
          <Link to="/series">Series</Link>
        </Li>
      </Menu>
    </Container>
  );
};

export default Header;
