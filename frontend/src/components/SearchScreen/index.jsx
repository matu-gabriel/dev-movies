import React from "react";
import { Container } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import "swiper/css/grid";
import "swiper/css/pagination";
import Card from "../Card";

const SearchScreen = ({ keyword, search }) => {
  return (
    <>
      <Container>
        <h1>Relacionados a "{search}"</h1>
        <h2>{keyword.title}</h2>
        <Swiper
          grabCursor={true}
          spaceBetween={30}
          slidesPerView={4}
          grid={{
            rows: 3,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          className="swiper"
        >
          {keyword.map((item, index) => (
            <SwiperSlide key={index}>
              <Card item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
};

export default SearchScreen;
