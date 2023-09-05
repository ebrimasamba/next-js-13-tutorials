"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const backToTopButton = useRef();
  const [isShow, setIsShow] = useState(false);
  const show = () => {
    window.scrollY > 1500 ? setIsShow(true) : setIsShow(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", show);
    return () => {
      window.removeEventListener("scroll", show);
    };
  }, []);
  return (
    <button
      title="Go back to top"
      onClick={() => {
        window.scrollTo({ top: 0 });
      }}
      className={`fixed bottom-10 right-4 bg-gradient-to-tl bg-primary text-white p-2  z-50 transition-all rounded-full transform  duration-500 ${
        isShow
          ? "translate-y-0 opacity-1 pointer-events-all"
          : "translate-y-10 opacity-0 pointer-events-none"
      }`}
      ref={backToTopButton}
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTop;
