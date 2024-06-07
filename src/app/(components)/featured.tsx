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
  return (
    <div className="w-full flex items-center justify-between p-9 bg-[#D5D6E9] flex-col">
      <div className="flex w-full justify-between md:px-[5rem] items-center">
        <div className="flex flex-col">
          <h1 className="md:text-5xl text-3xl font-poppins font-bold">Featured Vendors</h1>
          <p className="md:text-l text-sm font-poppins text-gray-500 mt-2">
            Select and contact any vendors you like from the following
          </p>
        </div>
        <button className="bg-[#2E3192] md:rounded-xl md:p-3 md:px-8 p-2 hover:bg-indigo-600 text-gray-200 font-helvetica">
          See all
        </button>
      </div>
      <Carousel className="w-full max-w-[88%] mt-4">
        <CarouselContent className="-ml-1">
          {venues.map((venue, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="md:p-4 p-1">
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
                      <h2 className="font-poppins font-bold md:text-2xl text-md">{venue.name}</h2>
                      <div className="bg-[#D5D6E9] font-md rounded-xl md:p-1 p-1 md:text-[1rem] text-[0.7rem]"><StarIcon className="text-[0.8rem]"/> {venue.rating}</div>
                    </div>
                    <p className="text-[#605ED8] font-bold text-xs md:text-lg mt-2">₹{venue.price} onwards</p>
                    <div className="card-actions justify-end">
                      <div className="text-gray-500 mt-2 md:text-sm text-xs">{venue.category}</div>
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
