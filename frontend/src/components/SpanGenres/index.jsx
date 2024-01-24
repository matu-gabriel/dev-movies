import React from "react";
import { Container } from "./style";

const SpanGenres = ({ genres }) => {
  return (
    <Container>
      {genres &&
        genres.map((genre) => <span key={genre.id}>{genre.name}</span>)}
    </Container>
  );
};

export default SpanGenres;
