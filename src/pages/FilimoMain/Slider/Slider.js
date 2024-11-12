// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

import "./slider.css";

// import required modules
import { Autoplay, EffectFade } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        centeredSlides={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={require("../../../images/sliderImg-5.webp")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("../../../images/sliderImg-1.webp")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("../../../images/sliderImg-2.webp")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("../../../images/sliderImg-3.webp")} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("../../../images/sliderImg-4.webp")} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
