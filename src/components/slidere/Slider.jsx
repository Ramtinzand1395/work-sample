import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { dataSlider } from "../../data/LocalData";
import { Autoplay } from "swiper/modules";

function Slider() {
  return (
    <div className="max-w-[1300px] rounded-md mx-auto bg-[#F6F6F6] p-5">
      <h1 className="text-center lg:text-[29px] text-[20px] mb-[2rem] font-b font-bold">
        افتخار همکاری با بهترین برند ها
      </h1>
      <Swiper
        autoplay={true}
        loop={true}
        spaceBetween={50}
        slidesPerView={5}
        modules={[Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 2,
          },
          639: {
            slidesPerView: 3,
          },
          865: {
            slidesPerView: 4,
          },
          1000: {
            slidesPerView: 5,
          },
          1500: {
            slidesPerView: 6,
          },
          1700: {
            slidesPerView: 7,
          },
        }}
      >
        {dataSlider.map((item) => (
          <SwiperSlide>
            <img
              className="w-[144px] h-[120px]"
              key={item.id}
              src={item.slider1}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
