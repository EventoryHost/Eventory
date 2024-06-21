import React from "react";
import { cn } from "@/utils/cn";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";

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
        <button className="mt-3 w-[50%] max-w-[9rem] rounded-md bg-[#2E3192] p-1 py-2 text-xs text-gray-200 shadow-md hover:bg-indigo-600 md:rounded-xl md:px-8 md:py-3 md:text-sm">
          View More
        </button>
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
                    ? "col-span-2 md:col-span-1"
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
      "https://images.unsplash.com/photo-1589463349208-95817c91f971?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Festive",
    imageUrl:
      "https://images.unsplash.com/photo-1571913035274-3eeb685eb255?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGluZGlhbiUyMGZlc3RpdmFsfGVufDB8fDB8fHww",
  },
  {
    title: "Special Guest",
    imageUrl:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Corporate",
    imageUrl:
      "https://images.unsplash.com/photo-1514828980084-9462f7d03afc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Night",
    imageUrl:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Wedding",
    imageUrl:
      "https://images.unsplash.com/photo-1587271339318-2e78fdf79586?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Anniversary",
    imageUrl:
      "https://images.unsplash.com/photo-1542042161784-26ab9e041e89?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Birthday",
    imageUrl:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
