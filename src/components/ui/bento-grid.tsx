import React from "react";
import { cn } from "@/utils/cn";

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
        "grid md:auto-rows-[15rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
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
        "relative row-span-1 rounded-xl h-[15rem] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col overflow-hidden",
        className
      )}
    >
      <img
        src={imageUrl}
        alt={title as string}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 flex flex-col justify-end h-full p-4 bg-black bg-opacity-50">
        <div className="font-poppins font-semibold text-2xl text-white mt-2">
          {title}
        </div>
      </div>
    </div>
  );
};
