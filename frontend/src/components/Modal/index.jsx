import React, { useEffect, useState } from "react";
import { Background, Container } from "./style";
import { getMovieVideos } from "../../services/getData";

const Modal = ({ movieId, setShowModal }) => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    const getMovies = async () => {
      setMovie(await getMovieVideos(movieId));
    };

    getMovies();
  }, []);

  return (
    <>
      <Background onClick={() => setShowModal(false)}>
        {movie && (
          <Container>
            <button>X</button>
            <iframe
              src={`https://www.youtube.com/embed/${movie.key}`}
              title="Youtube Video Player"
              height="500px"
              width="100%"
            ></iframe>
          </Container>
        )}
      </Background>
    </>
  );
};

export default Modal;
