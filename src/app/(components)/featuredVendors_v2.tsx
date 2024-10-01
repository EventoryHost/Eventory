import { ArrowUpRight, StarIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const venues = [
  {
    name: "Krishna Vendors",
    rating: "4.5",
    price: "4000",
    category: ["Wedding cakes" , "Western suburbs"],
    img: "https://d1u34m45xfa3ar.cloudfront.net/website/landing-page/featured/card_01.png",
  },
  {
    name: "Krishna Vendors",
    rating: "4.5",
    price: "5000",
    category: ["Wedding cakes" , "Western suburbs"],
    img: "https://d1u34m45xfa3ar.cloudfront.net/website/landing-page/featured/card_01.png",
  },
  {
    name: "Krishna Vendors",
    rating: "4.5",
    price: "6000",
    category: ["Wedding cakes" , "Western suburbs"],
    img: "https://d1u34m45xfa3ar.cloudfront.net/website/landing-page/featured/card_01.png",
  },
  {
    name: "Krishna Vendors",
    rating: "4.5",
    price: "7000",
    category: ["Wedding cakes" , "Western suburbs"],
    img: "https://d1u34m45xfa3ar.cloudfront.net/website/landing-page/featured/card_01.png",
  },
  {
    name: "Krishna Vendors",
    rating: "4.5",
    price: "8000",
    category: ["Wedding cakes" , "Western suburbs"],
    img: "https://d1u34m45xfa3ar.cloudfront.net/website/landing-page/featured/card_01.png",
  },
  {
    name: "Krishna Vendors",
    rating: "4.5",
    price: "9000",
    category: ["Wedding cakes" , "Western suburbs"],
    img: "https://d1u34m45xfa3ar.cloudfront.net/website/landing-page/featured/card_01.png",
  },
];

const Featuredvendors = (props: Props) => {
  return (
    <div className="flex w-[100%] flex-col md:px-5 px-1 py-9 gap-9 items-center justify-center">
      <h1 className="text-3xl font-bold md:text-5xl">Featured Vendors</h1>
      <div className="flex flex-wrap -mx-1 xl:w-[80%]">
        {venues.map((venue, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 px-1 py-2 flex justify-center"
          >
            <div className="w-[100%] p-1 md:w-[100%] md:p-4 max-w-xl">
              <div className="w-full rounded-xl bg-white">
                <figure>
                  <img className="rounded-xl" src={venue.img} alt="Vendor" />
                </figure>
                <div className="mt-2 px-2 pb-1">
                  <div className="flex w-full justify-between">
                    <h2 className="text-md font-poppins font-semibold md:text-2xl">
                      {venue.name}
                    </h2>
                    <div className="font-md flex h-fit min-h-fit items-center rounded-lg bg-[#3734ea] text-white text-[0.8rem] md:gap-2 py-1 px-3 md:text-[1rem]">
                      {venue.rating}
                    </div>
                  </div>
                  <p className="mt-3 text-xs font-semibold md:text-lg">
                    ₹{venue.price} onwards
                  </p>
                  <div className="card-actions justify-end">
                    <div className="mt-5 w-full text-xs md:text-sm">
                      {venue.category.map((category, index) => (
                        <span key={index} className="mr-2 lg:text-[1vw] bg-[#E5E4FE] rounded-lg py-2 px-3">
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link
          href="/comingsoon"
          className="animate flex transform items-center justify-center gap-2 rounded-2xl border-2 border-[#2E3192] p-4 px-7 md:text-lg text-[#2E3192] hover:bg-indigo-400 hover:text-[#2E3192]"
        >
          <span>View All</span>
        </Link>
    </div>
  );
};

export default Featuredvendors;
