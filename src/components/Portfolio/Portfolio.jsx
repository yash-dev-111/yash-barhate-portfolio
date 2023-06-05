import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";

import p1 from "../../img/p1.png"
import p2 from "../../img/p2.png"
import p3 from "../../img/p3.png"

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href='https://jobfinder-global.onrender.com/'><img src={p1} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://ykartonline.onrender.com/"><img src={p2} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://twitter-mern.onrender.com/"><img src={p3} alt="" /></a>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Portfolio;
