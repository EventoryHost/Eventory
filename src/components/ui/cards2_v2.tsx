"use client";

import { useState, useEffect } from "react";

export function Cards2() {
  const images = [
    "https://d1u34m45xfa3ar.cloudfront.net/website/about-page/story_03.png",
    "https://d1u34m45xfa3ar.cloudfront.net/website/about-page/story_02.png",
    "https://d1u34m45xfa3ar.cloudfront.net/website/about-page/story_03.png",
    "https://d1u34m45xfa3ar.cloudfront.net/website/about-page/story_02.png",
    "https://d1u34m45xfa3ar.cloudfront.net/website/about-page/story_03.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const getVisibleImages = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    const nextIndex = (currentIndex + 1) % images.length;
    return [prevIndex, currentIndex, nextIndex];
  };

  const visibleImages = getVisibleImages();

  return (
    <div className="relative mt-5 flex items-center justify-center overflow-hidden md:mt-0 md:h-[500px]">
      <div className="relative flex w-full items-center justify-center">
        {visibleImages.map((index, i) => (
          <div
            key={index}
            className={`group relative px-3 transition-transform duration-500 ease-in-out md:px-0 ${
              i === 1
                ? "z-20 md:scale-125"
                : i == 0
                  ? "hidden md:block"
                  : i == 2
                    ? "hidden md:block"
                    : "z-10 scale-100"
            }`}
          >
            <img
              src={images[index]}
              alt={`Image ${index + 1}`}
              className={`rounded-lg transition-all duration-500 ${
                i === 1 ? "brightness-100" : "brightness-50"
              } h-[250px] w-[400px] object-cover`}
            />
            {/* Hover effect for middle image */}
            {i === 1 && (
              <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-50 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
