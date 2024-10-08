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
    <div className="flex justify-center items-center md:h-[500px] md:mt-0 mt-5 overflow-hidden relative">
      <div className="flex justify-center items-center relative w-full">
        {visibleImages.map((index, i) => (
          <div
            key={index}
            className={`transition-transform ease-in-out md:px-0 px-3 duration-500 relative group ${
              i === 1 ? "md:scale-125 z-20" : i == 0 ? "md:block hidden" : i == 2 ? "md:block hidden" : "scale-100 z-10"
            }`}
          >
            <img
              src={images[index]}
              alt={`Image ${index + 1}`}
              className={`transition-all duration-500 rounded-lg ${
                i === 1 ? "brightness-100" : "brightness-50"
              } w-[400px] h-[250px] object-cover`}
            />
            {/* Hover effect for middle image */}
            {i === 1 && (
              <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 rounded-lg">
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
