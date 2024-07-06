import React from "react";
import { cn } from "@/utils/cn";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-5xl auto-rows-[10rem] grid-cols-3 gap-1 md:auto-rows-[13rem] md:grid-cols-4 md:gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  imageUrl,
}: {
  className?: string;
  title?: string | React.ReactNode;
  imageUrl?: string;
}) => {
  return (
    <div
      className={cn(
        "group/bento relative row-span-1 flex flex-col overflow-hidden rounded-xl bg-white shadow-xl transition duration-200 hover:shadow-2xl dark:bg-black dark:shadow-none md:min-h-[13rem]",
        className,
      )}
    >
      <img
        src={imageUrl}
        alt={title as string}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative z-10 flex h-full flex-col justify-end bg-black bg-opacity-50 p-4">
        <div className="md:font-md mt-2 font-poppins text-sm text-white md:text-2xl">
          {title}
        </div>
      </div>
    </div>
  );
};
