'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ImageCarousel from './(components)/ImageCarousel';

const CarouselPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/EventListing/eventlist_1.png',
    '/landing_page/categories/cat_01.png',
    '/landing_page/categories/cat_02.png'
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
const images=[
  "https://d1u34m45xfa3ar.cloudfront.net/website/landing-page/featured/card_01.png",
  "https://d1u34m45xfa3ar.cloudfront.net/website/landing-page/featured/card_02.png",
  "https://d1u34m45xfa3ar.cloudfront.net/website/landing-page/featured/card_03.png",
  "https://d1u34m45xfa3ar.cloudfront.net/website/landing-page/featured/card_01.png",
  "https://d1u34m45xfa3ar.cloudfront.net/website/landing-page/featured/card_03.png",
]
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
    <div className="min-h-screen bg-gray-100 ">
      <div className="relative w-full h-[426px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
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
      <div className=" flex justify-center space-x-2 m-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-[#2E3192]' : 'bg-white border-[#2E3192] border-2'
              }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>


      <div className='flex mx-auto mt-10 flex-col items-center justify-between gap-16 w-[85%] '>
        <div className='flex w-full flex-col items-start '>
          <div className="font-poppins text-2xl font-bold md:text-4xl justify-start">
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
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
                          <h3 className="text-lg font-semibold text-center mb-2">{venue.name}</h3>
                          <p className="text-sm text-center">{venue.category}</p>

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

        <div className='flex w-full flex-col items-start '>
          <div className="font-poppins text-2xl font-bold md:text-4xl justify-start">
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
                      <h3 className="text-lg font-semibold mb-2">{venue.name}</h3>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        <ImageCarousel images={images}/>
      </div>
    </div>
  );
};

export default CarouselPage;