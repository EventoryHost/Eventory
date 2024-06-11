"use client"

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import StarIcon from '@mui/icons-material/Star';
import Autoplay from "embla-carousel-autoplay"

const venues = [
  {
    name: "Krishna Vendors",
    rating: "4.5",
    price: "4000",
    category: "Wedding cakes , Western suburbs"
  },
  {
    name: "Krishna Vendors",
    rating: "4.5",
    price: "4000",
    category: "Wedding cakes , Western suburbs"
  },
  {
    name: "Krishna Vendors",
    rating: "4.5",
    price: "4000",
    category: "Wedding cakes , Western suburbs"
  },
  {
    name: "Krishna Vendors",
    rating: "4.5",
    price: "4000",
    category: "Wedding cakes , Western suburbs"
  },
  {
    name: "Krishna Vendors",
    rating: "4.5",
    price: "4000",
    category: "Wedding cakes , Western suburbs"
  },
  {
    name: "Krishna Vendors",
    rating: "4.5",
    price: "4000",
    category: "Wedding cakes , Western suburbs"
  },
  {
    name: "Krishna Vendors",
    rating: "4.5",
    price: "4000",
    category: "Wedding cakes , Western suburbs"
  },
  {
    name: "Krishna Vendors",
    rating: "4.5",
    price: "4000",
    category: "Wedding cakes , Western suburbs"
  },
  {
    name: "Krishna Vendors",
    rating: "4.5",
    price: "4000",
    category: "Wedding cakes , Western suburbs"
  },
]

export function Featured() {

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )


  return (
    <div className="w-full flex items-center justify-between md:p-9 px-[7px] bg-[#ced0f5] flex-col">
      <div className="flex mt-5 md:mt-0 md:w-full px-0 justify-between md:px-[5rem] md:items-center items-start">
        <div className="">
          <h1 className="md:text-5xl text-2xl font-poppins font-bold">Featured Vendors</h1>
          <p className="md:text-l w-[150%] md:w-[100%] md:text-sm text-xs font-poppins text-gray-700 mt-2">
            Select and contact any vendors you like from the following
          </p>
        </div>
        <button className="bg-[#2E3192] max-w-[10rem] md:text-sm md:mt-0 mt-2 shadow-md md:rounded-xl md:p-3 md:px-8 p-2 w-[50%] rounded-md text-xs hover:bg-indigo-600 text-gray-200">
          See all
        </button>
      </div>
      <Carousel
       plugins={[plugin.current]}
       className="w-full max-w-[69%] mb-4 md:mb-0 md:max-w-[83%] mt-4"
       onMouseEnter={plugin.current.stop}
       onMouseLeave={plugin.current.reset}
       >
        <CarouselContent className="-ml-1">
          {venues.map((venue, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="md:p-4 p-1 md:w-[100%] w-[100%]">
                <div className="rounded-xl w-83 bg-white shadow-md">
                  <figure>
                    <img
                      className="rounded-t-xl"
                      src="https://plus.unsplash.com/premium_photo-1678230218927-220e624e5a0a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="mt-2 px-2 pb-1">
                    <div className="flex justify-between w-full">
                      <h2 className="font-poppins font-semibold md:text-2xl text-md">{venue.name}</h2>
                      <div className="bg-[#D5D6E9] font-md rounded-xl md:p-1 min-h-fit md:text-[1rem] text-[0.6rem] flex items-center md:px-2 p-1 md:gap-2"><StarIcon className="text-[0.7rem] md:text-[0.95rem]"/> {venue.rating}</div>
                    </div>
                    <p className="text-[#605ED8] font-bold text-xs md:text-lg mt-3">₹{venue.price} onwards</p>
                    <div className="card-actions justify-end">
                      <div className="text-gray-500 mt-1 md:text-sm w-full text-xs mr-[5rem]">{venue.category}</div>
                    </div>
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
  );
}
