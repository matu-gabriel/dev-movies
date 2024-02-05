import React, { useEffect, useState } from "react";
import {
  getMovies,
  getNowPlaying,
  getTopMovies,
  getUpcoming,
} from "../../services/getData";
import { Background, Container, Info, ContainerButtons, Poster } from "./style";
import { getImages } from "../../utils/getImages";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import Slider from "../../components/Slider";
import Modal from "../../components/Modal";

const Movies = () => {
  const [movies, setMovies] = useState();
  const [topMovie, setTopMovie] = useState();
  const [showModal, setShowModal] = useState(false);
  const [nowPlaying, setNowPlaying] = useState();
  const [upcoming, setUpcoming] = useState();
  const navigate = useNavigate();
  console.log(movies);

  useEffect(() => {
    const getData = async () => {
      Promise.all([getMovies(), getTopMovies(), getNowPlaying(), getUpcoming()])
        .then(([movie, topMovie, nowPlaying, upcoming]) => {
          setMovies(movie[Math.floor(Math.random() * 19)]);
          setTopMovie(topMovie);
          setNowPlaying(nowPlaying);
          setUpcoming(upcoming);
        })
        .catch((err) => console.log(err));
    };
    getData();
  }, []);

  return (
    <>
      {movies && (
        <Background img={getImages(movies.backdrop_path)}>
          {showModal && (
            <Modal movieId={movies.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{movies.title}</h1>
              <p>{movies.overview}</p>
              <ContainerButtons>
                <Button onClick={() => navigate(`/detalhe/${movies.id}`)} red>
                  Assista agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o trailer
                </Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img
                src={getImages(movies.poster_path)}
                alt="imagem-capa-filme"
              />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovie && <Slider info={topMovie} title={"Top Filmes"} />}
      {nowPlaying && <Slider info={nowPlaying} title={"Assistir agora"} />}
      {upcoming && <Slider info={upcoming} title={"Em breve"} />}
    </>
  );
};

export default Movies;
