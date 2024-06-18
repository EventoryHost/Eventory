import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento2";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function Partner() {
  return (
    <div className="flex bg-[#C1C9F7] flex-col-reverse md:flex-row md:gap-8 justify-center md:px-[3rem] md:py-3 space-y-4 md:space-y-0">
      <BentoGrid className="hidden mt-7 md:grid px-2 md:w-1/2">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            className={
              i === 0
                ? "md:row-span-2 md:col-span-2"
                : i === 1 || i === 2
                  ? "md:col-span-2"
                  : ""
            }
            imageUrl={item.imageUrl}
          />
        ))}
      </BentoGrid>
      <div className="flex-1 space-y-7 p-4 pt-6 flex flex-col justify-between items-start">
        <div className="h-fit">
          <h2 className="lg:text-[2.5rem] md:text-4xl text-3xl font-semibold lg:mb-4">
            Your Ultimate Event
          </h2>
          <h2 className="lg:text-[2.5rem] md:text-4xl text-3xl font-semibold">
            Planning Partner
          </h2>
        </div>
        <p className="text-gray-900 lg:text-xl lg:w-[95%]">
          Our platform connects you with top vendors for a seamless event
          planning experience, ensuring a stress free planning process for
          weddings, corporate events, birthday parties, and any special
          occasion.
        </p>
        <button className=" bg-[#2E3192] p-4 flex gap-2 justify-center items-center text-lg rounded-md text-white">
          <span>Know More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-3 inline-block ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    imageUrl: "./image 42.png", // Add appropriate image URLs
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    imageUrl:
      "https://d1u34m45xfa3ar.cloudfront.net/website/landing-page/know-more-image0",
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    imageUrl: "./image 44.png",
  },
];
