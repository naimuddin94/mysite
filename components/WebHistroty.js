// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectCards } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import Image from "next/image";
import Images from "./Images";

export default function WebHistroty() {
  SwiperCore.use([Autoplay]);

  return (
    <div className="lg:mt-20 md:mx-12 mx-6 mt-10 h-fit">
      <h1 className="lg:mb-10 text-center rounded-lg mb-6 shadow-lg hover:shadow-md md:w-1/3 m-auto font-bold text-2xl p-3 text-orange-600 opacity-90 dark:text-red-500">
        Work Profile
      </h1>

      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 3000,
        }}
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
