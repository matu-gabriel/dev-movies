import React from "react";
import api from "../../services/api";

const Home = () => {
  const getMovies = async () => {
    const { data } = await api.get("/movie/popular");

    console.log(data);
  };

  getMovies();

  return (
    <div>
      <h1>Home</h1>
      <p>Essa é a home</p>
    </div>
  );
};

export default Home;
