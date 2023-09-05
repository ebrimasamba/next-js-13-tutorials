import React from "react";
import Container from "../Container";
import {
  FaLinkedin,
  FaInstagramSquare,
  FaFacebookF,
  FaTwitterSquare,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiEnvelope, HiMapPin, HiPhone } from "react-icons/hi2";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-zinc-900">
      <div className=" ">
        <Container className="py-16 relative z-0 text-white">
          <div className="flex justify-between flex-wrap lg:flex-nowrap">
            <div className="w-full lg:w-96 lg:pr-20 mb-7 lg:mb-0">
              <Link href={"/"}>
                <h3 className="text-4xl mb-4 font-extrabold italic uppercase">
                  <span className="bg-clip-text text-transparent inline  bg-gradient-to-tr from-primary via-primary to-primary-light">
                    BEC
                  </span>
                  <span className="">L</span>
                </h3>
              </Link>
              <p className="text-gray-300">
                Bala Engineering & Construction is a dynamic and creative media,
                consulting, communications, and advertising company in The
                Gambia.
              </p>
            </div>

            <div className="w-full mb-6 sm:mb-0 sm:w-1/2 md:w-1/4">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/projects">Projects</Link>
                </li>
              </ul>
            </div>
            <div className="w-full mb-6 sm:mb-0 sm:w-1/2 md:w-1/4">
              <h4 className="text-lg font-semibold mb-4">Social Links</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a href="#" className="flex items-center gap-2">
                    <FaFacebookF /> <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2">
                    <FaInstagram /> <span>Instagram</span>
                  </a>{" "}
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2">
                    <FaTwitter /> <span>Twitter</span>
                  </a>{" "}
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2">
                    <FaLinkedinIn /> <span>Linkedin</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full mb-6 sm:mb-0 sm:w-1/2 md:w-1/4 ">
              <div className="space-y-7">
                <div className="flex space-x-3">
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-primary via-primary to-primary-light text-white">
                    <HiPhone className="w-5 h-5" />
                  </div>
                  <div className="">
                    <p className="text-lg font-semibold mb-1">Phone</p>{" "}
                    <span>2203245564</span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-primary via-primary to-primary-light text-white">
                    <HiEnvelope className="w-5 h-5" />
                  </div>
                  <div className="">
                    <p className="text-lg font-semibold mb-1">Email</p>{" "}
                    <span>info@jassehcodecamp.gm</span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-primary via-primary to-primary-light text-white">
                    <HiMapPin className="w-5 h-5" />
                  </div>

                  <div className="">
                    <p className="text-lg font-semibold mb-1">Address</p>
                    <span>Kotu Highway, opposite Techworld</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-span-2">
          <ContactForm />
        </div> */}
          </div>
        </Container>
      </div>
      <div className="border-t border-white/5">
        <div className="">
          <div className="container mx-auto py-4 px-5  flex items-center justify-between text-gray-300 flex-col md:flex-row">
            <p className="mb-2 md:mb-0 font-medium">
              &copy; {new Date().getUTCFullYear()} BECL
            </p>
            <div>
              Powered by{" "}
              <a
                href="http://tritechsoftware.tech"
                target="_blank"
                rel="noreferrer"
                className="bg-clip-text text-transparent  bg-gradient-to-tr from-primary via-primary to-primary-light hover:underline font-semibold"
              >
                Tritech Software
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
