import React, { useState, useEffect, useRef } from "react";

import TextField from "@mui/material/TextField";

import {
  Background,
  Info,
  Poster,
  Container,
  ContainerButtons,
  Tela,
} from "./styles";
import Button from "../../components/Button";
import Slider from "../../components/Slider";
import { getImages } from "../../utils/getImages";
import Modal from "../../components/Modal";
import { useNavigate } from "react-router-dom";
import {
  getKeyword,
  getMovies,
  getPopularPerson,
  getPopularSeries,
  getTopMovies,
  getTopSeries,
} from "../../services/getData";
import SearchScreen from "../../components/SearchScreen";

const Home = () => {
  const [movie, setMovie] = useState();
  const [showModal, setShowModal] = useState(false);
  const [topMovie, setTopMovie] = useState();
  const [topseries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [popularPerson, setPopularPerson] = useState();
  const [keyword, setKeyword] = useState("");
  const [search, setSearch] = useState("");
  const searchRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const getAllData = async () => {
      Promise.all([
        getMovies(),
        getTopMovies(),
        getTopSeries(),
        getPopularSeries(),
        getPopularPerson(),
        getKeyword(search),
      ])
        .then(
          ([
            movie,
            topMovie,
            topSeries,
            popularSeries,
            popularPerson,
            keyword,
          ]) => {
            setMovie(movie[0]);
            setTopMovie(topMovie);
            setTopSeries(topSeries);
            setPopularSeries(popularSeries);
            setPopularPerson(popularPerson);
            setKeyword(keyword);
          }
        )
        .catch((err) => console.error(err));
    };

    getAllData();
  }, [search]);

  const buscar = () => {
    const name = searchRef.current.value;
    setSearch(name);
  };

  console.log(keyword);

  return (
    <>
      {(keyword.length > 0 && <SearchScreen keyword={keyword} />) ||
        (movie && (
          <>
            <Background img={getImages(movie.backdrop_path)}>
              {showModal && (
                <Modal movieId={movie.id} setShowModal={setShowModal} />
              )}
              <Container>
                <Info>
                  <h1>{movie.title}</h1>
                  <p>{movie.overview}</p>
                  <ContainerButtons>
                    <Button
                      onClick={() => navigate(`/detalhe/${movie.id}`)}
                      red
                    >
                      Assista agora
                    </Button>
                    <Button onClick={() => setShowModal(true)}>
                      Assista o trailer
                    </Button>
                  </ContainerButtons>
                </Info>
                <Poster>
                  <img
                    src={getImages(movie.poster_path)}
                    alt="imagem-capa-filme"
                  />
                </Poster>
              </Container>
            </Background>
            <div>
              {topMovie && <Slider info={topMovie} title={"Top Filmes"} />}
              {topseries && <Slider info={topseries} title={"Top series"} />}
              {popularSeries && (
                <Slider info={popularSeries} title={"Series pupulares"} />
              )}
              {popularPerson && (
                <Slider info={popularPerson} title={"Artistas pupulares"} />
              )}
            </div>
          </>
        ))}
      <Tela>
        <TextField
          variant="outlined"
          ref={searchRef}
          style={{
            border: "1px solid #000",
            outline: "none",
            backgroundColor: "rgba(0,0,0,0.3)",
          }}
        />
        <button onClick={buscar}>Buscar</button>
      </Tela>
    </>
  );
};

export default Home;
