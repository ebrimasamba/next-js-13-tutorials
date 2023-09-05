"use client"
import React, { useEffect } from "react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import Image from "next/image"
import { BsX } from "react-icons/bs"

const Modal = ({ closeModal, selectedProject }) => {
  const clickMenuDropback = (e) => {
    if (e.target.classList.contains("menu-overlay-dropback")) {
      closeModal()
    }
  }

  useEffect(() => {
    const pressEscButton = (e) => {
      if (e.code === "Escape") {
        closeModal()
      }
    }
    window.addEventListener("keyup", (e) => pressEscButton(e))
    return () => {
      window.removeEventListener("keyup", pressEscButton)
    }
  }, [closeModal])

  return (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur z-[999] flex items-center justify-center menu-overlay-dropback"
      onClick={(e) => clickMenuDropback(e)}
    >
      <div className="bg-black max-w-5xl w-full relative">
        <div className="bg-white/50 h-15 w-15 absolute z-[999] right-4 top-2 rounded-full">
          <BsX
            className="text-black text-3xl font-bold cursor-pointer"
            onClick={() => closeModal()}
          />
        </div>
        {selectedProject.gallery.length > 0 ? (
          <Splide
            options={{
              pagination: true,
            }}
          >
            {selectedProject?.gallery.map((galleryItem) => (
              <SplideSlide key={galleryItem?.id}>
                <div className="bg-black h-screen sm:h-[500px] relative">
                  <Image
                    src={galleryItem.image}
                    alt={galleryItem.name}
                    className="object-contain"
                    fill
                  />
                </div>
                <div className="absolute top-0 text-white text-center inset-x-0 bg-gradient-to-b from-black/60 to-transparent pt-5 pb-5">
                  <div className="">
                    <h4 className="text-xl">
                      {galleryItem.name} ({selectedProject.name})
                    </h4>
                    <span>{selectedProject.location} Kololi</span>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        ) : (
          <div className="h-screen sm:h-[500px] bg-gray-100/5 flex justify-center items-center">
            <h6 className="text-2xl opacity-80">No images found</h6>
          </div>
        )}
      </div>
    </div>
  )
}

export default Modal
