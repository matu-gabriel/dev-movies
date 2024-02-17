import React from "react";
import { Container } from "./style";
import { getImages } from "../../utils/getImages";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const navigate = useNavigate();

  const cliquei = (id) => {
    try {
      navigate(`/detalhe/${id}`);
      console.log("Deu bom");
    } catch (error) {
      console.log(`Deu ruim ${error}`);
    }
    console.log(id);
  };

  return (
    <Container>
      <button
        onClick={() => cliquei(item.id)}
        style={{ border: "none", backgroundColor: "transparent" }}
      >
        <img
          src={getImages(item.poster_path || item.profile_path || "")}
          alt=""
        />
      </button>
      <h3>{item.title || item.name}</h3>
    </Container>
  );
};

export default Card;
