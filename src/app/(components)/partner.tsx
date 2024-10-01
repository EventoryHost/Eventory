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
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function Partner() {
  return (
    <div className="flex flex-col-reverse py-7 justify-center items-center gap-3 space-y-4 bg-white md:flex-row-reverse md:space-y-0 md:py-7 lg:gap-8 lg:px-[3rem]">
      <div className="md:w-[35%] w-[100%]">
        <Image
          alt=""
          src={
            "https://res.cloudinary.com/dlofupmx3/image/upload/v1727810428/Group_1000000799_zw80hq.png"
          }
          layout="responsive"
          objectFit="cover"
          width={500}
          height={500}
          quality={100}
        />
      </div>

      <div className="flex flex-1 flex-col md:items-start items-center md:justify-start justify-center gap-5 space-y-3 p-4 pt-6">
        <div className="h-fit">
          <h2 className="text-3xl md:text-left text-center font-semibold md:text-4xl lg:mb-4 lg:text-[2.5rem]">
            Your Ultimate Event Planning <br/> Partner
          </h2>
        </div>
        <p className="text-gray-900 md:text-left text-center lg:w-[95%] lg:text-2xl">
          Our platform connects you with top vendors for a seamless event
          planning experience, ensuring a stress free planning process for
          weddings, corporate events, birthday parties, and any special
          occasion.
        </p>
        <Link
          href="/comingsoon"
          className="animate flex transform items-center justify-center gap-2 rounded-2xl bg-[#2E3192] p-4 text-lg text-white hover:bg-indigo-400 hover:text-[#2E3192]"
        >
          <span>Know More</span>
          <ArrowUpRight size={24} />
        </Link>
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
