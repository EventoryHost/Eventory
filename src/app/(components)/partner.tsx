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
    <div className="flex flex-col-reverse justify-center space-y-4 bg-[#C1C9F7] md:flex-row gap-3 lg:gap-8 md:space-y-0 lg:px-[3rem] md:py-3">
      <BentoGrid className="mt-7 hidden px-1 md:grid md:w-1/2">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            className={
              i === 0
                ? "md:col-span-2 md:row-span-2"
                : i === 1 || i === 2
                  ? "md:col-span-2"
                  : ""
            }
            imageUrl={item.imageUrl}
          />
        ))}
      </BentoGrid>
      <div className="flex flex-1 flex-col items-start justify-between space-y-7 p-4 pt-6">
        <div className="h-fit">
          <h2 className="text-3xl font-semibold md:text-4xl lg:mb-4 lg:text-[2.5rem]">
            Your Ultimate Event
          </h2>
          <h2 className="text-3xl font-semibold md:text-4xl lg:text-[2.5rem]">
            Planning Partner
          </h2>
        </div>
        <p className="text-gray-900 lg:w-[95%] lg:text-xl">
          Our platform connects you with top vendors for a seamless event
          planning experience, ensuring a stress free planning process for
          weddings, corporate events, birthday parties, and any special
          occasion.
        </p>
        <button className="flex items-center justify-center gap-2 hover:bg-indigo-400 animate transform hover:text-[#2E3192] rounded-md bg-[#2E3192] p-4 text-lg text-white">
          <span>Know More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="ml-1 inline-block h-4 w-3"
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
    imageUrl:
      "https://d1u34m45xfa3ar.cloudfront.net/website/landing-page/partners/partners_01.png", // Add appropriate image URLs
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    imageUrl:
      "https://d1u34m45xfa3ar.cloudfront.net/website/landing-page/partners/partners_02.png",
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    imageUrl:
      "https://d1u34m45xfa3ar.cloudfront.net/website/landing-page/partners/partners_03.png",
  },
];
