// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCards } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import Image from "next/image";
import Images from "./Images";

export default function WebHistroty() {
  return (
    <div className="lg:mt-20 md:mx-12 mx-16 mt-10 h-fit">
      <h1 className="lg:mb-10 text-center rounded-lg mb-6 shadow-lg hover:shadow-md md:w-1/3 m-auto font-bold text-2xl p-3 text-orange-600 opacity-90 dark:text-red-500">
        Work Profile
      </h1>

      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {Images.map((slideContent, index) => (
          <SwiperSlide key={index}>
            <Image src={slideContent} alt="website" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
