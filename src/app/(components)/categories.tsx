import React from "react";
import { cn } from "@/utils/cn";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";
import Link from "next/link";

export function Categories() {
  return (
    <section className="px-3 pb-7 pt-7 md:px-3">
      <div className="flex w-full flex-col items-start justify-between md:flex-row md:items-center md:px-[7%]">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold md:text-5xl">Explore Events</h1>
          <p className="md:text-l mt-2 text-xs text-gray-700 md:text-sm">
            Search through all types of events through categories
          </p>
        </div>
        <Link
          href="/comingsoon"
          className="animate mt-3 w-[50%] max-w-[9rem] transform rounded-md bg-[#2E3192] p-1 py-2 text-xs text-gray-200 shadow-md hover:bg-indigo-400 hover:text-[#2E3192] md:rounded-xl md:px-8 md:py-3 md:text-sm"
        >
          View More
        </Link>
      </div>
      <BentoGrid className="mx-auto mt-[2rem] max-w-6xl md:mt-[3rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            imageUrl={item.imageUrl}
            className={
              i === 4
                ? "cursor-pointer md:col-span-2"
                : i === 2 || i == 5
                  ? "col-span-2 cursor-pointer md:col-span-1 md:row-span-2"
                  : i == 1
                    ? "col-span-2 cursor-pointer md:col-span-1"
                    : i === 6
                      ? "col-span-2 cursor-pointer"
                      : "cursor-pointer"
            }
          />
        ))}
      </BentoGrid>
    </section>
  );
}

const items = [
  {
    title: "Home",
    imageUrl:
      "https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/landing-page/categories/cat_01.png",
  },
  {
    title: "Festive",
    imageUrl:
      "https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/landing-page/categories/cat_02.png",
  },
  {
    title: "Special Guest",
    imageUrl:
      "https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/landing-page/categories/cat_03.png",
  },
  {
    title: "Corporate",
    imageUrl:
      "https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/landing-page/categories/cat_04.png",
  },
  {
    title: "Night",
    imageUrl:
      "https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/landing-page/categories/cat_05.png",
  },
  {
    title: "Wedding",
    imageUrl:
      "https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/landing-page/categories/cat_06.png",
  },
  {
    title: "Anniversary",
    imageUrl:
      "https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/landing-page/categories/cat_07.png",
  },
  {
    title: "Birthday",
    imageUrl:
      "https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/landing-page/categories/cat_08.png",
  },
];
