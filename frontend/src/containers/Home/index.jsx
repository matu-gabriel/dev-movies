import React, { useState, useEffect } from "react";
import api from "../../services/api";

import {
  Background,
  Info,
  Poster,
  Container,
  ContainerButtons,
} from "./styles";
import Button from "../../components/Button";

const Home = () => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    const getMovies = async () => {
      const {
        data: { results },
      } = await api.get("/movie/popular");

      setMovie(results[10]);
    };

    getMovies();
  }, []);

  return (
    <>
      {movie && (
        <Background
          img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        >
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButtons>
                <Button red>Assista agora</Button>
                <Button>Assista o trailer</Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt="imagem-capa-filme"
              />
            </Poster>
          </Container>
        </Background>
      )}
    </>
  );
};

export default Home;
