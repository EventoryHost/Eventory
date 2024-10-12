"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import StarIcon from "@mui/icons-material/Star";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

const venues = [
  {
    name: "Krishna Vendors",
    rating: "4.5",
    price: "4000",
    category: "Wedding cakes , Western suburbs",
    img: "https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/landing-page/featured/card_01.png",
  },
  {
    name: "Krishna Vendors",
    rating: "4.5",
    price: "5000",
    category: "Wedding cakes , Western suburbs",
    img: "https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/landing-page/featured/card_01.png",
  },
  {
    name: "Krishna Vendors",
    rating: "4.5",
    price: "6000",
    category: "Wedding cakes , Western suburbs",
    img: "https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/landing-page/featured/card_01.png",
  },
  {
    name: "Krishna Vendors",
    rating: "4.5",
    price: "7000",
    category: "Wedding cakes , Western suburbs",
    img: "https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/landing-page/featured/card_01.png",
  },
  {
    name: "Krishna Vendors",
    rating: "4.5",
    price: "8000",
    category: "Wedding cakes , Western suburbs",
    img: "https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/landing-page/featured/card_01.png",
  },
  {
    name: "Krishna Vendors",
    rating: "4.5",
    price: "9000",
    category: "Wedding cakes , Western suburbs",
    img: "https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/landing-page/featured/card_01.png",
  },
  {
    name: "Krishna Vendors",
    rating: "4.5",
    price: "4000",
    category: "Wedding cakes , Western suburbs",
    img: "https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/landing-page/featured/card_01.png",
  },
];

export function Featured() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <div className="flex w-full flex-col items-center justify-between bg-[#ced0f5] px-3 md:p-9">
      <div className="mt-5 flex flex-col items-start justify-between px-0 md:mt-0 md:w-full md:flex-row md:items-center md:px-[5rem]">
        <div className="">
          <h1 className="font-poppins text-2xl font-bold md:text-5xl">
            Featured Vendors
          </h1>
          <p className="md:text-l mt-2 w-[85%] font-poppins text-xs text-gray-700 md:w-[100%] md:text-sm">
            Select and contact any vendors you like from the following
          </p>
        </div>
        <Link
          href={"/comingsoon"}
          className="mt-4 flex w-[50%] max-w-[10rem] items-center justify-center rounded-md bg-[#2E3192] p-2 text-xs text-gray-200 shadow-md hover:bg-indigo-600 md:mt-0 md:rounded-xl md:p-3 md:px-8 md:text-sm"
        >
          See all
        </Link>
      </div>
      <Carousel
        plugins={[plugin.current]}
        className="mb-4 mt-4 w-full max-w-[69%] md:mb-0 md:max-w-[83%]"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="-ml-1">
          {venues.map((venue, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="w-[100%] p-1 md:w-[100%] md:p-4">
                <div className="w-83 rounded-xl bg-white shadow-md">
                  <figure>
                    <img className="rounded-t-xl" src={venue.img} alt="Shoes" />
                  </figure>
                  <div className="mt-2 px-2 pb-1">
                    <div className="flex w-full justify-between">
                      <h2 className="text-md font-poppins font-semibold md:text-2xl">
                        {venue.name}
                      </h2>
                      <div className="font-md flex h-fit min-h-fit items-center rounded-xl bg-[#D5D6E9] p-1 text-[0.6rem] md:gap-2 md:p-1 md:px-2 md:text-[1rem]">
                        <StarIcon className="text-[0.7rem] md:text-[0.95rem]" />{" "}
                        {venue.rating}
                      </div>
                    </div>
                    <p className="mt-3 text-xs font-bold text-[#605ED8] md:text-lg">
                      ₹{venue.price} onwards
                    </p>
                    <div className="card-actions justify-end">
                      <div className="mr-[5rem] mt-1 w-full text-xs text-gray-500 md:text-sm">
                        {venue.category}
                      </div>
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
