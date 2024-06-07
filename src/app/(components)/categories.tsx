import React from "react";
import { cn } from "@/utils/cn";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";

export function Categories() {
  return (
    <section className="pt-7 pb-7 ">
      <div className="flex w-full justify-between md:px-[7.5rem] items-center">
        <div className="flex flex-col">
          <h1 className="text-5xl font-poppins font-bold">Explore Events</h1>
          <p className="text-l font-poppins text-gray-500 mt-2">Search through all types of events through categories</p>
        </div>
        <button className="bg-[#2E3192] rounded-xl p-3 px-8 hover:bg-indigo-600 text-gray-200 font-helvetica">View More</button>
      </div>
      <BentoGrid className="max-w-7xl mx-auto mt-[4rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            imageUrl={item.imageUrl}
            className={i === 3 || i === 6 ? "md:col-span-2 cursor-pointer" : "cursor-pointer"}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

const items = [
  {
    title: "Festive",
    imageUrl:
      "https://images.unsplash.com/photo-1589463349208-95817c91f971?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Home",
    imageUrl:
      "https://images.unsplash.com/photo-1571913035274-3eeb685eb255?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGluZGlhbiUyMGZlc3RpdmFsfGVufDB8fDB8fHww",
  },
  {
    title: "Birthday",
    imageUrl:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Corporate",
    imageUrl:
      "https://images.unsplash.com/photo-1514828980084-9462f7d03afc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Anniversary",
    imageUrl:
      "https://images.unsplash.com/photo-1542042161784-26ab9e041e89?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Wedding",
    imageUrl:
      "https://images.unsplash.com/photo-1587271339318-2e78fdf79586?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Night",
    imageUrl:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
