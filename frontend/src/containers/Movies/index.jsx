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
<<<<<<< HEAD
import Modal from "../../components/Modal";
=======
>>>>>>> 0e8dd4c0415a5f9443758d0691acaa6af1740f25

const Movies = () => {
  const [movies, setMovies] = useState();
  const [topMovie, setTopMovie] = useState();
  const [nowPlaying, setNowPlaying] = useState();
  const [upcoming, setUpcoming] = useState();
  const navigate = useNavigate();

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
        <>
          <Background img={getImages(movies.backdrop_path)}>
            <Container>
              <Info>
                <h1>{movies.title}</h1>
                <p>{movies.overview}</p>
                <ContainerButtons>
                  <Button onClick={() => navigate(`/detalhe/${movies.id}`)} red>
                    Assista agora
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
          <div>
            {topMovie && <Slider info={topMovie} title={"Top Filmes"} />}
            {nowPlaying && (
              <Slider info={nowPlaying} title={"Assistir agora"} />
            )}
            {upcoming && <Slider info={upcoming} title={"Em breve"} />}
          </div>
        </>
      )}
    </>
  );
};

export default Movies;
