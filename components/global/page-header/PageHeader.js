import React from "react";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";

const PageHeader = ({ title, backgroundImage = "/hero/hero-7.jpg" }) => {
  return (
    <div className="pt-20 bg-gray-100  relative text-white">
      <Image
        src={backgroundImage}
        fill
        className="object-cover object-top"
        alt=""
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-500/10 via-zinc-800/40 to-zinc-500/10"></div>
      <Container className="py-24 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-white">{title}</h1>
        <div className="inline-flex items-center space-x-3 uppercase text-sm  font-semibold mt-3">
          <Link href={"/"} className="">
            Home
          </Link>{" "}
          <span className="h-3 w-[2px] bg-white rotate-[15deg]"></span>{" "}
          <span className="text-primary-light">{title}</span>
        </div>
      </Container>
    </div>
  );
};

export default PageHeader;
