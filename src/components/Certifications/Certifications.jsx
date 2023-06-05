import React, { useContext } from "react";
import "./Certifications.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";

import c1 from "../../img/c1.png"
import c2 from "../../img/c2.png"
import c3 from "../../img/c3.png"
import c4 from "../../img/c4.png"
import c5 from "../../img/c5.png"

import { themeContext } from "../../Context";
const Certifications = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="certifications" id="certifications">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Developer</span>
      <span>Certifications</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href='https://trainings.internshala.com/view_certificate/9E8EEC27-1B07-078D-9710-C23895A39E20/9z949b5u5i0/'><img src={c1} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://trainings.internshala.com/view_certificate/09100F8B-5A93-31B6-1EBF-097DD7D7ABB3/grbiav1hwdr/"><img src={c2} alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://trainings.internshala.com/view_certificate/380ECE2B-8F24-A360-AF6A-3E98EEC97F06/iwmqct8k4nz/"><img src={c3} alt="" /></a>
        </SwiperSlide>
        { <SwiperSlide>
          <a href="https://www.hackerrank.com/certificates/f93ed4682aa6"><img src={c4} alt="" /></a>
        </SwiperSlide> }
        { <SwiperSlide>
          <a href="https://www.hackerrank.com/certificates/111d3e3540dc"><img src={c5} alt="" /></a>
        </SwiperSlide> }
      </Swiper>
    </div>
  );
};

export default Certifications;
