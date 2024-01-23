import React from "react";
import { useEffect, useState } from "react";
import {
  getMovieById,
  getMovieCredits,
  getMovieSimilar,
  getMovieVideos,
} from "../../services/getData";

import { useParams } from "react-router-dom";
import { Background, Container, Cover, Info } from "./styles";
import { getImages } from "../../utils/getImages";

const Details = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState();
  const [movieCredits, setMovieCredits] = useState();
  const [movieSimilar, setMovieSimilar] = useState();
  const [movieVideos, setMovieVideos] = useState();
  const [] = useState();

  useEffect(() => {
    const getAllData = async () => {
      Promise.all([
        getMovieById(id),
        getMovieCredits(id),
        getMovieSimilar(id),
        getMovieVideos(id),
      ])
        .then(([movie, credits, similar, videos]) => {
          setMovie(movie);
          setMovieCredits(credits);
          setMovieSimilar(similar);
          setMovieVideos(videos);
        })
        .catch((err) => console.error(err));
    };

    getAllData();
  }, []);
  return (
    <>
      {movie && (
        <>
          <Background image={getImages(movie.backdrop_path)} />
          <Container>
            <Cover>
              <img src={getImages(movie.poster_path)} alt="" />
            </Cover>
            <Info>
              <h2>{movie.title}</h2>
              <div>Gêneros</div>
              <p>{movie.overview}</p>
              <div>Creditos</div>
            </Info>
          </Container>
        </>
      )}
    </>
  );
};

export default Details;
