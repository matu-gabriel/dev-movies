import React, { useState, useEffect } from "react";


import {
  Background,
  Info,
  Poster,
  Container,
  ContainerButtons,
} from "./styles";
import Button from "../../components/Button";
import Slider from "../../components/Slider";
import { getImages } from "../../utils/getImages";
import Modal from "../../components/Modal";
import { useNavigate } from "react-router-dom";
import {
  getMovies,
  getPopularPerson,
  getPopularSeries,
  getTopMovies,
  getTopSeries,
} from "../../services/getData";

const Home = () => {
  const [movie, setMovie] = useState();
  const [showModal, setShowModal] = useState(false);
  const [topMovie, setTopMovie] = useState();
  const [topseries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [popularPerson, setPopularPerson] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const getAllData = async () => {
      Promise.all([
        getMovies(),
        getTopMovies(),
        getTopSeries(),
        getPopularSeries(),
        getPopularPerson(),
      ])
        .then(([movie, topMovie, topSeries, popularSeries, popularPerson]) => {
          setMovie(movie[0]);
          setTopMovie(topMovie);
          setTopSeries(topSeries);
          setPopularSeries(popularSeries);
          setPopularPerson(popularPerson);
        })
        .catch((err) => console.error(err));
    };

    getAllData();
  }, []);

  return (
    <>
      {movie && (
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
                  <Button onClick={() => navigate(`/detalhe/${movie.id}`)} red>
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
      )}
    </>
  );
};

export default Home;
