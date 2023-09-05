import React from "react";
import Container from "../global/Container";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const HeroCarouselSlide = ({ children }) => {
  return (
    <div
      className="h-[600px] bg-gray-800 text-white relative bg-cover bg-center"
      //   style={{ backgroundImage: `url("/static/hero/hero-4.jpg")` }}
    >
      {/* <div className="absolute inset-0 bg bg-gradient-to-tr from-black/50 to-black/60 z-[2]" /> */}
      {children}

      {/* <div className="absolute bottom-0 inset-x-0 py-5 flex justify-center">
      <BsChevronDown className="text-5xl opacity-40 animate-bounce" />
    </div> */}
    </div>
  );
};

export default HeroCarouselSlide;
