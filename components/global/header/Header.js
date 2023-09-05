"use client";
import React, { useState, useEffect } from "react";
import Container from "../Container";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsList, BsX } from "react-icons/bs";
import Image from "next/image";
import TopHeader from "./TopHeader";
const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.classList.add("overflow-hidden");
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  const pressEscButton = (e) => {
    if (e.code === "Escape") {
      closeMenu();
    }
  };

  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      });
    };
    scrollListener();
    window.addEventListener("keyup", (e) => pressEscButton(e));

    return () => {
      window.removeEventListener("scroll", scrollListener);
      window.removeEventListener("keyup", (e) => pressEscButton());
    };
  }, []);

  return (
    <header className=" relative z-[999] text-whit">
      <div
        className={`top-0 w-full z-50 absolut bg-white  ${
          isFixed
            ? "shadow-lg shadow-gray-500/10 bg-white/ "
            : "bg-transparent text-whit"
        }`}
      >
        <Container
          className={
            "h-[85px] flex justify-between items-center border-b border-white/20"
          }
        >
          <Link href={"/"} className="text-4xl font-extrabold tracking-tighter">
            {/* <Image
              src={"/logo-text.png"}
              alt="logo"
              className="object-contain"
              width={170}
              height={110}
            /> */}
            BE<span className="text-secondary">TT</span>ER
          </Link>

          <nav>
            <ul className="lg:flex hidden items-center font-medium text-sm uppercase tracking-widest  gap-8">
              <li>
                <Link
                  href={"/"}
                  className={pathname === "/" ? "  text-primar" : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/about-us"}
                  className={
                    pathname === "/about-us"
                      ? "bg-clip-text text-transparent inline  bg-gradient-to-tr from-primary via-primary to-primary-light"
                      : ""
                  }
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href={"/services"}
                  className={
                    pathname === "/services"
                      ? "bg-clip-text text-transparent inline  bg-gradient-to-tr from-primary via-primary to-primary-light"
                      : ""
                  }
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href={"/projects"}
                  className={
                    pathname === "/projects"
                      ? "bg-clip-text text-transparent inline  bg-gradient-to-tr from-primary via-primary to-primary-light"
                      : ""
                  }
                >
                  Projects
                </Link>
              </li>
              <li>
                <a href={"#contact-us"} className="inline-block">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="lg:text-white lg:hidden">
              {isMenuOpen ? (
                <button onClick={closeMenu}>
                  <BsX className="w-10 h-10" />
                </button>
              ) : (
                <button onClick={openMenu}>
                  <BsList className="w-10 h-10" />
                </button>
              )}
            </div>
          </nav>
        </Container>
        <div
          className={`block lg:hidden z-50 relative bg-white shadow-lg w-full  overflow-hidden ${
            isMenuOpen
              ? "h-screen  transition-all duration-300 ease-in-out opacity-100"
              : "h-0 transition-all duration-300 ease-in-out opacity-0"
          } `}
          style={{ zIndex: 9999 }}
        >
          <ul className=" space-y-8 text-zinc-800 text-lg font-medium p-5">
            <li>
              <Link
                href={"/"}
                className={pathname === "/" ? "text-primary" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/about-us"}
                className={pathname === "/about-us" ? "text-primary" : ""}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={"/services"}
                className={pathname === "/services" ? "text-primary" : ""}
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                href={"/projects"}
                className={pathname === "/projects" ? "text-primary" : ""}
              >
                Projects
              </Link>
            </li>

            <li>
              <a href={"#contact-us"} className="inline-block">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
