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
    <div className="max-w-[1300px] rounded-md border-b-[1px] mx-auto bg-[#F6F6F6] p-5">
      <h1 className="text-center lg:text-[29px] text-[20px] mb-[2rem] font-b font-bold">
        ما از چه تکنولوژی هایی استفاده میکنیم؟
      </h1>
      <Swiper
        autoplay={true}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        modules={[Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 1,
          },
          639: {
            slidesPerView: 1,
          },
          865: {
            slidesPerView: 1,
          },
          1000: {
            slidesPerView: 1,
          },
          1500: {
            slidesPerView: 1,
          },
          1700: {
            slidesPerView: 1,
          },
        }}
      >
        {dataSlider.map((item) => (
          <SwiperSlide>
            <div className="flex justify-center">
              <a href={`${item.detailse}`} target="_blank">
                <img
                  className="w-[900px] h-[330px] overflow-hidden border-none rounded-lg bg-transparent "
                  key={item.id}
                  src={item.slider1}
                  alt=""
                />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
