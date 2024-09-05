"use client";

import Image from "next/image";
import React, { useState } from "react";

const Gallery = () => {
  const [images, setImages] = useState([
    "./image1.png",
    "./image1.png",
    "./image1.png",
  ]);

  const [startIndex, setStartIndex] = useState(0); // Tracks the visible image range

  const addImage = () => {
    setImages([...images, "./image1.png"]); // Adds an image with the same URL
  };

  const nextImage = () => {
    if (startIndex + 3 < images.length) {
      setStartIndex(startIndex + 1); // Show next set of images
    }
  };

  const prevImage = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1); // Show previous set of images
    }
  };

  return (
    <div className="bg-[#363C43] p-5 px-12 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg text-gray-300 bg-black px-6 py-2 rounded-xl">
          Gallery
        </h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={addImage}
            className="bg-gray-700 px-5 py-3 rounded-full text-xs text-white shadow-xl shadow-black transform hover:scale-105 transition-transform duration-200 hover:shadow-2xl hover:shadow-black"
          >
            + ADD IMAGE
          </button>
          <button
            onClick={prevImage}
            className="bg-[#242629] px-2 py-2 rounded-full  box-border shadow-xl shadow-gray-600 text-gray-400"
          >
            <Image width="25" height="25" src={"/left.svg"} alt="left--v1" />
          </button>

          <button
            onClick={nextImage}
            className="bg-[#242629] px-2 py-2 rounded-full box-border shadow-xl shadow-gray-600  text-gray-400"
          >
            <Image width="25" height="25" src={"/right.svg"} alt="right--v1" />
          </button>
        </div>
      </div>
      <div className="flex space-x-5 overflow-x-auto">
        {images.slice(startIndex, startIndex + 6).map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery image ${index + 1}`}
            className="w-48 h-40 object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
