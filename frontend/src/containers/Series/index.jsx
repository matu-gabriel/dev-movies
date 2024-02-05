import React, { useEffect, useState } from "react";
import {
  getAiringToday,
  getOnTheAir,
  getPopularSeries,
  getTopSeries,
} from "../../services/getData";
import { Background, Container, Info, ContainerButtons, Poster } from "./style";
import { getImages } from "../../utils/getImages";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import Slider from "../../components/Slider";
import Modal from "../../components/Modal";

const Movies = () => {
  const [popularSeries, setPopularSeries] = useState();
  const [showModal, setShowModal] = useState(false);
  const [topSeries, setTopSeries] = useState();
  const [onTheAir, setOnTheAir] = useState();
  const [airingToday, setAiringToday] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      Promise.all([
        getPopularSeries(),
        getTopSeries(),
        getOnTheAir(),
        getAiringToday(),
      ])
        .then(([popularSeries, topSeries, onTheAir, airingToday]) => {
          setPopularSeries(popularSeries[Math.floor(Math.random() * 19)]);
          setTopSeries(topSeries);
          setOnTheAir(onTheAir);
          setAiringToday(airingToday);
        })
        .catch((err) => console.log(err));
    };
    getData();
  }, []);

  console.log(airingToday);

  return (
    <>
      {popularSeries && (
        <Background img={getImages(popularSeries.backdrop_path)}>
          {showModal && (
            <Modal movieId={popularSeries.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{popularSeries.title}</h1>
              <p>{popularSeries.overview}</p>
              <ContainerButtons>
                <Button
                  onClick={() =>
                    navigate(`/detalhe/${popularSeries.genre_ids[0]}`)
                  }
                  red
                >
                  Assista agora
                </Button>
                <Button onClick={() => setShowModal(true)}>
                  Assista o trailer
                </Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img
                src={getImages(popularSeries.poster_path)}
                alt="imagem-capa-filme"
              />
            </Poster>
          </Container>
        </Background>
      )}
      {topSeries && <Slider info={topSeries} title={"Top Series"} />}
      {onTheAir && <Slider info={onTheAir} title={"No ar"} />}
      {airingToday && <Slider info={airingToday} title={"Indo ao ar"} />}
    </>
  );
};

export default Movies;
