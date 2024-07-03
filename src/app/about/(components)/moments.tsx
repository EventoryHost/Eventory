"use client";
import React from "react";
import "../../globals.css";
import { useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";

const items = [
  {
    message:
      "It was an unforgettable experience with Eventory. They handled everything flawlessly from start to finish.",
    name: "Madhuri Sethi",
    image:
      "https://d1u34m45xfa3ar.cloudfront.net/website/about-page/moments_01.png",
  },
  {
    message:
      "It was an unforgettable experience with Eventory. They handled everything flawlessly from start to finish.",
    name: "Aman Gupta",
    image:
      "https://d1u34m45xfa3ar.cloudfront.net/website/about-page/moments_01.png",
  },
  {
    message:
      "It was an unforgettable experience with Eventory. They handled everything flawlessly from start to finish.",
    name: "Aman Gupta",
    image:
      "https://d1u34m45xfa3ar.cloudfront.net/website/about-page/moments_01.png",
  },
  {
    message:
      "It was an unforgettable experience with Eventory. They handled everything flawlessly from start to finish.",
    name: "Aman Gupta",
    image:
      "https://d1u34m45xfa3ar.cloudfront.net/website/about-page/moments_01.png",
  },
  {
    message:
      "It was an unforgettable experience with Eventory. They handled everything flawlessly from start to finish.",
    name: "Aman Gupta",
    image:
      "https://d1u34m45xfa3ar.cloudfront.net/website/about-page/moments_01.png",
  },
  // Add more items as needed
];

const Moments = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically move right every 3 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [items.length]);

  //has issue of some logic, All objects are not visible
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1,
    );
  };
  return (
    <>
      <div className="mt-16 items-center justify-between sm:mx-10 sm:gap-0 sm:py-5 md:gap-20 md:py-5 lg:mx-16 lg:gap-40 lg:py-5">
        <div className="justify-center">
          <h2 className="text-[rgba(0,0,0,1)]/;oo,ki/\\ mx-5 justify-center text-center text-2xl font-semibold md:mb-14 md:justify-start md:text-left md:text-4xl">
            Sharing Moments
          </h2>
        </div>

        <div className="relative mx-auto justify-center overflow-hidden xs:mt-8">
          <div
            className="flex justify-center transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex-col items-center justify-center text-center md:flex-row lg:flex-row"
              >
                <div className="flex w-full flex-col items-center justify-center md:flex-row lg:flex-row xl:translate-x-28">
                  <div className="rounded-moments item-center order-2 items-end justify-center bg-[rgba(46,49,146,0.1)] px-5 pt-5 text-left xs:w-[200px] sm:w-[300px] md:order-1 md:ml-20 md:h-[300px] md:w-1/2 md:rounded-l-2xl lg:w-[400px]">
                    <div className="mb-5">
                      <svg
                        width="40"
                        height="33"
                        viewBox="0 0 40 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 md:w-16"
                      >
                        <path
                          d="M37.1156 0.5L40 4.25133C37.6054 6.18384 35.6644 8.26791 34.1769 10.5036C32.7256 12.7013 31.6553 15.2211 30.966 18.0631C33.1066 19.4651 34.5397 20.6208 35.2653 21.5302C36.0272 22.4396 36.4082 23.3869 36.4082 24.3721C36.4082 25.13 36.1723 25.8689 35.7007 26.5888C35.229 27.2709 34.1406 28.3508 32.4354 29.8286L29.1701 32.5C26.2676 30.1886 24.3265 28.3129 23.3469 26.873C22.4036 25.4331 21.932 23.8606 21.932 22.1554C21.932 19.3893 23.2925 16.0169 26.0136 12.0382C28.771 8.0595 32.4717 4.21344 37.1156 0.5ZM15.1293 0.5L18.068 4.25133C15.6735 6.18384 13.7506 8.28686 12.2993 10.5604C10.8481 12.796 9.79592 15.2969 9.14286 18.0631C11.1746 19.4272 12.5714 20.5639 13.3333 21.4734C14.0952 22.3828 14.4762 23.349 14.4762 24.3721C14.4762 25.13 14.2222 25.8689 13.7143 26.5888C13.2426 27.2709 12.1542 28.3508 10.449 29.8286L7.34694 32.5C4.37188 30.1507 2.39456 28.2561 1.41497 26.8162C0.471655 25.3763 0 23.8227 0 22.1554C0 19.3893 1.36054 16.0169 4.08163 12.0382C6.839 8.0595 10.5215 4.21344 15.1293 0.5Z"
                          fill="#1F2937"
                        />
                      </svg>
                    </div>
                    <blockquote className="md:text-md text-xs text-gray-600">
                      {item.message}
                    </blockquote>
                    <p className="mb-10 justify-center text-[28px] text-xs font-semibold text-[rgba(31,41,55,1)] md:my-5 md:mt-20 md:text-lg">
                      {item.name}
                    </p>
                  </div>

                  {/* max-sm:pl-[60px] xs:-translate-x-7 sm:-translate-x-5 md:order-2 md:w-1/2 md:translate-x-0 md:justify-start */}
                  <div className="flex items-center max-sm:pl-[60px] xs:-translate-x-7 sm:-translate-x-5 md:order-2 md:w-1/2 md:translate-x-0 md:justify-start">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-[200px] justify-center rounded-2xl object-cover xs:w-[400px] md:h-[400px] md:w-[300px]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 transform rounded-full p-2"
          >
            <svg
              width="42"
              height="43"
              viewBox="0 0 42 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 15.5L14.4142 20.0858C13.6332 20.8668 13.6332 22.1332 14.4142 22.9142L19 27.5M15 21.5L29 21.5M21 1.5C9.95431 1.5 1 10.4543 1 21.5C1 32.5457 9.95431 41.5 21 41.5C32.0457 41.5 41 32.5457 41 21.5C41 10.4543 32.0457 1.5 21 1.5Z"
                stroke="#2B3F6C"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full p-2"
          >
            <svg
              width="42"
              height="43"
              viewBox="0 0 42 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 27.5L27.5858 22.9142C28.3668 22.1332 28.3668 20.8668 27.5858 20.0858L23 15.5M27 21.5L13 21.5M21 41.5C32.0457 41.5 41 32.5457 41 21.5C41 10.4543 32.0457 1.5 21 1.5C9.9543 1.5 0.999998 10.4543 0.999998 21.5C0.999998 32.5457 9.9543 41.5 21 41.5Z"
                stroke="#2B3F6C"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>

        {/* <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
              className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>   */}
      </div>
    </>
  );
};

export default Moments;
