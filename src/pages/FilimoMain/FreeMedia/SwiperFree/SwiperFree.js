// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./swiperFree.css";

// import required modules
import { Navigation } from "swiper/modules";

export default function SwiperFree() {
  return (
    <>
      <Swiper
        navigation={true}
        slidesPerView={6}
        spaceBetween={20}
        breakpoints={{
          300: {
            spaceBetween: 10,
            slidesPerView: 3,
          },
          660: {
            spaceBetween: 14,
            slidesPerView: 4,
          },
          800: {
            spaceBetween: 18,
            slidesPerView: 5,
          },
          1000: {
            spaceBetween: 20,
            slidesPerView: 6,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="cursor-pointer">
            <img
              className="karim"
              src={require("../../../../images/mov_srl_free.webp")}
              alt="mov_srl_free"
            />
            <span className="text-white text-[12px]">پایتخت</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cursor-pointer">
            <img
              className="karim"
              src={require("../../../../images/mov_srl_free2.webp")}
              alt="mov_srl_free"
            />
            <span className="text-white text-[12px]">بالشها</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cursor-pointer">
            <img
              className="karim"
              src={require("../../../../images/mov_srl_free.webp")}
              alt="mov_srl_free"
            />
            <span className="text-white text-[12px]">پایتخت</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cursor-pointer">
            <img
              className="karim"
              src={require("../../../../images/mov_srl_free2.webp")}
              alt="mov_srl_free"
            />
            <span className="text-white text-[12px]">بالشها</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cursor-pointer">
            <img
              className="karim"
              src={require("../../../../images/mov_srl_free.webp")}
              alt="mov_srl_free"
            />
            <span className="text-white text-[12px]">پایتخت</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cursor-pointer">
            <img
              className="karim"
              src={require("../../../../images/mov_srl_free2.webp")}
              alt="mov_srl_free"
            />
            <span className="text-white text-[12px]">بالشها</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cursor-pointer">
            <img
              className="karim"
              src={require("../../../../images/mov_srl_free.webp")}
              alt="mov_srl_free"
            />
            <span className="text-white text-[12px]">پایتخت</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cursor-pointer">
            <img
              className="karim"
              src={require("../../../../images/mov_srl_free2.webp")}
              alt="mov_srl_free"
            />
            <span className="text-white text-[12px]">بالشها</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cursor-pointer">
            <img
              className="karim"
              src={require("../../../../images/mov_srl_free.webp")}
              alt="mov_srl_free"
            />
            <span className="text-white text-[12px]">پایتخت</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cursor-pointer">
            <img
              className="karim"
              src={require("../../../../images/mov_srl_free2.webp")}
              alt="mov_srl_free"
            />
            <span className="text-white text-[12px]">بالشها</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cursor-pointer">
            <img
              className="karim"
              src={require("../../../../images/mov_srl_free.webp")}
              alt="mov_srl_free"
            />
            <span className="text-white text-[12px]">پایتخت</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cursor-pointer">
            <img
              className="karim"
              src={require("../../../../images/mov_srl_free2.webp")}
              alt="mov_srl_free"
            />
            <span className="text-white text-[12px]">بالشها</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cursor-pointer">
            <img
              className="karim"
              src={require("../../../../images/mov_srl_free.webp")}
              alt="mov_srl_free"
            />
            <span className="text-white text-[12px]">پایتخت</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cursor-pointer">
            <img
              className="karim"
              src={require("../../../../images/mov_srl_free2.webp")}
              alt="mov_srl_free"
            />
            <span className="text-white text-[12px]">بالشها</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cursor-pointer">
            <img
              className="karim"
              src={require("../../../../images/mov_srl_free.webp")}
              alt="mov_srl_free"
            />
            <span className="text-white text-[12px]">پایتخت</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cursor-pointer">
            <img
              className="karim"
              src={require("../../../../images/mov_srl_free2.webp")}
              alt="mov_srl_free"
            />
            <span className="text-white text-[12px]">بالشها</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
