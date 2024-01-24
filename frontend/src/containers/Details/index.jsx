import React from "react";
import { useEffect, useState } from "react";
import {
  getMovieById,
  getMovieCredits,
  getMovieSimilar,
  getMovieVideos,
} from "../../services/getData";

import { useParams } from "react-router-dom";
import { Background, Container, ContainerMovies, Cover, Info } from "./styles";
import { getImages } from "../../utils/getImages";
import SpanGenres from "../../components/SpanGenres";
import Credits from "../../components/Credits";
import Slider from "../../components/Slider";

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
              <SpanGenres genres={movie.genres} />
              <p>{movie.overview}</p>
              <div>
                <Credits credits={movieCredits} />
              </div>
            </Info>
          </Container>
          <ContainerMovies>
            {movieVideos &&
              movieVideos.map((video) => (
                <div key={video.id}>
                  <h4>{video.name}</h4>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title="Youtube Video Player"
                    height="500px"
                    width="100%"
                  ></iframe>
                </div>
              ))}
          </ContainerMovies>
          {movieSimilar && (
            <Slider info={movieSimilar} title={"Filmes similares"} />
          )}
        </>
      )}
    </>
  );
};

export default Details;
