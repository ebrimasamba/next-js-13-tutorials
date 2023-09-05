import React from "react";
import Container from "../Container";
import {
  BsEnvelope,
  BsEnvelopeFill,
  BsPhoneFill,
  BsTelephoneFill,
} from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";

const TopHeader = () => {
  return (
    <div className="bg-secondary text-white p-3 text-sm relative">
      <Image
        src={"/patterns/pattern-1.jpg"}
        alt=""
        className="object-cover"
        fill
      />
      <div className="absolute inset-0 bg-secondary/70"></div>

      <Container className={"flex justify-between items-center relative z-10"}>
        <div className="flex items-center gap-5 divide-x divide-white/30">
          <div className="flex items-center gap-2">
            <BsEnvelopeFill /> <p>info@ngowebsite.com</p>
          </div>

          <div className="flex items-center gap-2 pl-5">
            <BsTelephoneFill /> <p>(220) 2394 4383</p>
          </div>
        </div>

        <div className="flex items-center gap-2 divide-x divide-white/30">
          <span className="mr-3 inline-block capitalize">
            Welcome to ngo website
          </span>
          <span className="pl-2 inline-block">
            <FaFacebookF className="" />
          </span>
          <span className="pl-2 inline-block">
            <FaInstagram className="" />
          </span>
          <span className="pl-2 inline-block">
            <FaLinkedinIn className="" />
          </span>
          <span className="pl-2 inline-block">
            <FaTwitter className="" />
          </span>
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
