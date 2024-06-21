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
        "grid max-w-5xl auto-rows-[10rem] grid-cols-3 gap-1 md:auto-rows-[13rem] md:grid-cols-4 md:gap-4",
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
        "group/bento relative row-span-1 flex flex-col overflow-hidden rounded-xl bg-white shadow-xl transition duration-200 hover:shadow-2xl dark:shadow-none md:min-h-[13rem]",
        className,
      )}
    >
      <img
        src={imageUrl}
        alt={title as string}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative z-10 flex h-full w-full flex-col justify-end p-4">
        <div className="font-poppins md:font-md mt-2 text-sm text-white md:text-2xl">
          {title}
        </div>
      </div>
    </div>
  );
};
