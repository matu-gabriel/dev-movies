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
import Slider from "../../components/Slider";
import { getImages } from "../../utils/getImages";

const Home = () => {
  const [movie, setMovie] = useState();
  const [topMovie, setTopMovie] = useState();

  useEffect(() => {
    const getMovies = async () => {
      const {
        data: { results },
      } = await api.get("/movie/popular");

      setMovie(results[10]);
    };

    const getTopMovies = async () => {
      const {
        data: { results },
      } = await api.get("/movie/top_rated");

      console.log(results);
      setTopMovie(results);
    };

    getMovies();
    getTopMovies();
  }, []);

  return (
    <>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
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
              <img src={getImages(movie.poster_path)} alt="imagem-capa-filme" />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovie && <Slider info={topMovie} title={"Top Filmes"} />}
    </>
  );
};

export default Home;
