import React from "react";
import { Container } from "./style";
import { getImages } from "../../utils/getImages";

const Card = ({ item }) => {
  return (
    <Container>
      <img src={getImages(item.poster_path)} alt="" />
      <h3>{item.original_title}</h3>
    </Container>
  );
};

export default Card;
