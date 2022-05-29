import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Swiper.css";
import { Pagination } from "swiper";
import how from './../../assets/how_to.png'
import pro from './../../assets/props.png'



const swiper = () => {
  return (
    <div className="swiper_div">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="d1">
          <a href="https://www.figma.com/file/QFKUZ8eN0CUu4nghfsAkeX/tech.start?node-id=6%3A2"><img src={how} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={how} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={how} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={how} alt="" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={pro} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pro} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pro} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pro} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default swiper
