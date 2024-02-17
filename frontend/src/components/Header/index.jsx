import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/logo.png";
import { Container, Menu, Li } from "./style";
import { Link, useLocation } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { getKeyword } from "../../services/getData";
import SearchScreen from "../SearchScreen";

const Header = () => {
  const [changeBackground, setChangeBackground] = useState(false);
  const { pathname } = useLocation();

  const [keyword, setKeyword] = useState("");
  const [search, setSearch] = useState("");
  const searchRef = useRef();

  useEffect(() => {
    const getData = async () => {
      Promise.all([getKeyword(search)])
        .then(([keyword]) => {
          setKeyword(keyword);
        })
        .catch((err) => console.error(err));
    };

    getData();
  }, [search]);

  const buscar = () => {
    const name = searchRef.current.value;
    setSearch(name);
  };

  console.log(keyword);
  console.log(search);

  window.onscroll = () => {
    if (!changeBackground && window.scrollY > 150) {
      setChangeBackground(true);
    }
    if (changeBackground && window.scrollY < 150) {
      setChangeBackground(false);
    }
  };

  return (
    <>
      {keyword.length > 0 && <SearchScreen keyword={keyword} search={search} />}
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
          <Li isActive={true}>
            <input type="text" ref={searchRef} />
            <button onClick={buscar}>
              <SearchIcon fontSize="large" />
            </button>
          </Li>
        </Menu>
      </Container>
    </>
  );
};

export default Header;
