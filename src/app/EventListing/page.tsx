"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ImageCarousel from "./(components)/ImageCarousel";
import Footer from "../(components)/footer";

const CarouselPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/EventListing/eventlist_1.png",
    "/landing_page/categories/cat_01.png",
    "/landing_page/categories/cat_02.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );
  const images = [
    {
      src: "https://d1u34m45xfa3ar.cloudfront.net/website/landing-page/categories/cat_01.png",
      text: "Category 1",
    },
    {
      src: "https://d1u34m45xfa3ar.cloudfront.net/website/landing-page/categories/cat_02.png",
      text: "Category 2",
    },
    {
      src: "https://d1u34m45xfa3ar.cloudfront.net/website/landing-page/categories/cat_03.png",
      text: "Category 3",
    },
    {
      src: "https://d1u34m45xfa3ar.cloudfront.net/website/landing-page/categories/cat_01.png",
      text: "Category 4",
    },
    {
      src: "https://d1u34m45xfa3ar.cloudfront.net/website/landing-page/categories/cat_03.png",
      text: "Category 5",
    },
  ];

  const venues = [
    {
      name: "Krishna Vendors",
      rating: "4.5",
      price: "4000",
      category: "Wedding cakes , Western suburbs",
      img: "https://d1u34m45xfa3ar.cloudfront.net/website/landing-page/featured/card_01.png",
    },
    {
      name: "Krishna Vendors",
      rating: "4.5",
      price: "5000",
      category: "Wedding cakes , Western suburbs",
      img: "https://d1u34m45xfa3ar.cloudfront.net/website/landing-page/featured/card_01.png",
    },
    {
      name: "Krishna Vendors",
      rating: "4.5",
      price: "6000",
      category: "Wedding cakes , Western suburbs",
      img: "https://d1u34m45xfa3ar.cloudfront.net/website/landing-page/featured/card_01.png",
    },
    {
      name: "Krishna Vendors",
      rating: "4.5",
      price: "7000",
      category: "Wedding cakes , Western suburbs",
      img: "https://d1u34m45xfa3ar.cloudfront.net/website/landing-page/featured/card_01.png",
    },
    {
      name: "Krishna Vendors",
      rating: "4.5",
      price: "8000",
      category: "Wedding cakes , Western suburbs",
      img: "https://d1u34m45xfa3ar.cloudfront.net/website/landing-page/featured/card_01.png",
    },
    {
      name: "Krishna Vendors",
      rating: "4.5",
      price: "9000",
      category: "Wedding cakes , Western suburbs",
      img: "https://d1u34m45xfa3ar.cloudfront.net/website/landing-page/featured/card_01.png",
    },
    {
      name: "Krishna Vendors",
      rating: "4.5",
      price: "4000",
      category: "Wedding cakes , Western suburbs",
      img: "https://d1u34m45xfa3ar.cloudfront.net/website/landing-page/featured/card_01.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative h-[426px] w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute left-0 top-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
      {/* Navigation Dots */}
      <div className="m-4 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === currentSlide
                ? "bg-[#2E3192]"
                : "border-2 border-[#2E3192] bg-white"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="mx-auto mt-10 flex w-[85%] flex-col items-center justify-between gap-16">
        <div className="flex w-full flex-col items-start">
          <div className="justify-start font-poppins text-2xl font-bold md:text-4xl">
            Regional Events
          </div>
          <div className="flex w-full justify-center">
            <Carousel
              plugins={[plugin.current]}
              className="mb-4 mt-4 w-full max-w-[75%] md:mb-0 md:max-w-[90%]"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent className="-ml-1">
                {venues.map((venue, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 md:basis-1/3 lg:basis-[22.22%]"
                  >
                    <div className="w-full p-1 md:p-2">
                      <div className="relative aspect-square overflow-hidden rounded-xl">
                        <Image
                          src={venue.img}
                          alt={venue.name}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-xl"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-4 text-white">
                          <h3 className="mb-2 text-center text-lg font-semibold">
                            {venue.name}
                          </h3>
                          <p className="text-center text-sm">
                            {venue.category}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        <div className="flex w-full flex-col items-start">
          <div className="justify-start font-poppins text-2xl font-bold md:text-4xl">
            Popular Events
          </div>
          <div className="flex w-full justify-center">
            <Carousel
              plugins={[plugin.current]}
              className="mb-4 mt-4 w-full max-w-[75%] md:mb-0 md:max-w-[90%]"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent className="-ml-1">
                {venues.map((venue, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 md:basis-1/2 lg:basis-[28%]"
                  >
                    <div className="w-full p-1 md:p-2">
                      <div className="relative aspect-square overflow-hidden rounded-xl">
                        <Image
                          src={venue.img}
                          alt={venue.name}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-xl"
                        />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold">
                        {venue.name}
                      </h3>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        <div className="mb-4 flex w-full flex-col items-start">
          <div className="justify-start font-poppins text-2xl font-bold md:text-4xl">
            Our Special Events
          </div>
          <div className="flex w-full justify-center">
            <ImageCarousel images={images} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CarouselPage;
