import React from "react";
import { cn } from "@/utils/cn";
import Image, { StaticImageData } from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

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
        "grid md:auto-rows-[13rem] auto-rows-[10rem] grid-cols-3 md:grid-cols-4 md:gap-4 gap-1 max-w-5xl",
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
        "relative row-span-1 rounded-xl md:min-h-[13rem] group/bento hover:shadow-2xl transition duration-200 shadow-xl dark:shadow-none bg-white flex flex-col overflow-hidden",
        className
      )}
    >
      <img
        src={imageUrl}
        alt={title as string}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 w-full flex flex-col justify-end h-full p-4">
        <div className="font-poppins md:font-md md:text-2xl text-sm text-white mt-2">
          {title}
        </div>
      </div>
    </div>
  );
};
