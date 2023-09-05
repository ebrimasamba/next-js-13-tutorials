"use client";

import React, { useRef, useEffect } from "react";
import Container from "../global/Container";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
// import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import "@splidejs/react-splide/css";
import HeroCarouselSlide from "./HeroCarouselSlide";
import Image from "next/image";
import Link from "next/link";

const HeroCarousel = () => {
  const prevButton = useRef();
  const nextButton = useRef();
  const overlay = useRef();
  const heroCarouselRef = useRef();

  const heroSectionData = [
    {
      title: `<h1>Together We can Build a <strong>Better Tomorrow.</strong></h1>`,
      image: "/hero/hero-8.jpg",
      tagline: `Our mission is to create a world where every individual has the opportunity to thrive and lead a dignified life.
`,
    },
    {
      title: `<h1>Together We can Build a <strong>Better Tomorrow.</strong></h1>`,
      image: "/hero/hero-9.jpg",
      tagline: `Our mission is to create a world where every individual has the opportunity to thrive and lead a dignified life.
`,
    },
    // {
    //   title: "Construction With Extra Care.",
    //   image: "/hero/hero-4.jpg",
    //   tagline: `Welcome to my podcast about exploration and self-discovery.`,
    // },
  ];

  const animateHero = (index) => {
    overlay.current.classList.remove("animate-overlay");
    void overlay.current.offsetWidth;
    overlay.current.classList.add("animate-overlay");

    document
      .getElementById(`sub-heading-text-${index.toString()}`)
      .classList.remove("animate-sideways");
    void document.getElementById(`sub-heading-text-${index.toString()}`)
      .offsetWidth;
    document
      .getElementById(`sub-heading-text-${index.toString()}`)
      .classList.add("animate-sideways");

    document
      .getElementById(`bg-zoom-${index.toString()}`)
      .classList.remove("animate-zoom");
    void document.getElementById(`bg-zoom-${index.toString()}`).offsetWidth;
    document
      .getElementById(`bg-zoom-${index.toString()}`)
      .classList.add("animate-zoom");
    document
      .getElementById(`heading-text-${index.toString()}`)
      .classList.remove("animate-heading-text");
    void document.getElementById(`heading-text-${index.toString()}`)
      .offsetWidth;
    document
      .getElementById(`heading-text-${index.toString()}`)
      .classList.add("animate-heading-text");
    document
      .getElementById(`tagline-${index.toString()}`)
      .classList.remove("animate-heading-tagline");
    void document.getElementById(`tagline-${index.toString()}`).offsetWidth;
    document
      .getElementById(`tagline-${index.toString()}`)
      .classList.add("animate-heading-tagline");
  };

  // useEffect(() => {
  //   prevButton.current.addEventListener("click", () => {
  //     heroCarouselRef.current.go(`<`);
  //     console.log("<");
  //   });
  //   nextButton.current.addEventListener("click", () => {
  //     heroCarouselRef.current.go(`>`);
  //     console.log(">");
  //   });
  // }, []);

  return (
    <div className="relative hero-section">
      <div
        className="absolute inset-0 bg-white pointer-events-none z-[30] opacity-0"
        ref={overlay}
      />

      <Splide
        onPaginationMounted={(splide, data, item) => {
          // data.list.classList.add("splide__pagination--custom");
          // data.items.forEach(function (item) {
          //   item.button.textContent = String(item.page + 1);
          // });
        }}
        // onMounted={(splide) => {
        //   setInterval(() => {
        //     splide.go(">");
        //   }, 7000);
        // }}
        // onMove={(splide, prev, next) => {
        //   try {
        //     animateHero(splide.index);
        //   } catch (error) {}
        // }}
        ref={heroCarouselRef}
        aria-label="Hero-Sections"
        hasTrack={false}
        options={{
          arrows: false,
          // autoplay: true,
          // interval: 7000,
          type: "fade",
          rewind: true,
          speed: 900,
        }}
      >
        <SplideTrack>
          {heroSectionData.map((hero, index) => (
            <SplideSlide key={index}>
              <HeroCarouselSlide>
                <div className="absolute inset-0  block">
                  <Image
                    src={hero.image}
                    alt=""
                    fill
                    className="object-cover object-center block"
                    id={`bg-zoom-${index.toString()}`}
                  />

                  <div className="absolute inset-0 bg-gray-800/50 pointer-events-none" />
                </div>

                <div className=" h-full flex items-center  relative z-10 pt-2">
                  <Container className={"w-full text-cente"}>
                    <div className="max-w-3xl mx-aut">
                      <div className="overflow-y-hidden ">
                        <div
                          className="text-4xl xs:text-5xl md:text-6xl lg:text-[4.6rem] font-bold capitalize tracking-tighter heading-font lg:leading-[1.2]"
                          id={`heading-text-${index.toString()}`}
                          dangerouslySetInnerHTML={{ __html: hero.title }}
                        />
                        {/* {hero.title} */}
                      </div>

                      <div className="overflow-y-hidden">
                        <p
                          className="text-sm sm:text-lg text-gray-300 mt-5 max-w-xl tracking-wide"
                          id={`tagline-${index.toString()}`}
                        >
                          {hero.tagline}
                        </p>
                      </div>

                      <div className="mt-10 flex sm:items-center justify-cente flex-col sm:flex-row gap-4">
                        <a
                          href="#about-us"
                          className="bg-secondary text-white font-extrabold  py-4 px-6 sm:py-5 sm:px-8 text-sm uppercase tracking-wider rounded inline-flex items-center justify-center gap-2 heading-font"
                        >
                          <span className="relati">Get Started</span>{" "}
                        </a>

                        <Link
                          href={"/products"}
                          className="bg-white/5 text-whit font-extrabold border-2 border-white py-4 px-6 sm:py-5 sm:px-8 text-sm uppercase tracking-wider rounded inline-flex items-center justify-center gap-2 heading-font"
                        >
                          <span>Contact Us</span>
                        </Link>
                      </div>
                      {/* <div className="mt-10">
                        <button className="py-5 px-10 rounded-full bg-primary text-white font-bold text-sm uppercase tracking-widest">
                          Get Started
                        </button>
                      </div> */}
                    </div>
                  </Container>
                </div>
              </HeroCarouselSlide>
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </div>
  );
};

export default HeroCarousel;
