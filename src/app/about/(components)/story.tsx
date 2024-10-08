"use client";
import React from "react";
import "../../globals.css";
import Image from "next/image";
import "../../globals.css";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Fullscreen } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {};
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Story = () => {
  return (
    <>
      <div className="h-fit">
        <div className="w-full bg-[#ffffff]">
          <div className="flex flex-col items-center justify-between px-5 max-sm:mx-[10px] sm:flex-row sm:gap-20 sm:py-10 md:mx-20 md:flex-row md:gap-20 md:py-10 lg:gap-20 lg:py-10 xl:gap-40">
            <div className="flex-1 justify-center">
              <h2 className="linear-gradient-colour xl:md-14 mt-5 font-serif text-2xl font-semibold max-sm:my-5 sm:mb-3 md:text-2xl lg:mb-7 lg:text-4xl">
                The Story of Eventory
              </h2>
              <p className="md:text-md text-xs text-[rgb(0,0,0)] lg:text-base xl:text-lg">
                Our primary mission is to empower offline vendors across the
                country by providing them an online platform to reach new
                customers and expand their businesses beyond local contacts. We
                aim to enhance their business skills and opportunities in
                diverse markets nationwide.
              </p>
            </div>
            <div className="flex flex-1 justify-center rounded-lg">
              <img
                src="https://d1u34m45xfa3ar.cloudfront.net/website/about-page/story_01.png"
                className="rounded-lg shadow-xl shadow-[#787bbc] max-sm:my-10 max-sm:w-[280px]"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-between px-5 max-sm:mx-[10px] sm:flex-row-reverse sm:gap-20 sm:py-10 md:mx-20 md:flex-row-reverse md:gap-20 md:py-10 lg:gap-20 lg:py-10 xl:gap-40">
            <div className="flex-1 justify-center">
              <h2 className="linear-gradient-colour xl:md-14 font-serif text-2xl font-semibold sm:mb-3 md:text-2xl lg:mb-7 lg:text-4xl">
                We Provide Experience
              </h2>
              <p className="md:text-md text-xs text-[rgba(0,0,0,1)] lg:text-base xl:text-lg">
                We excel in event planning with innovative ideas and meticulous
                attention to detail, ensuring clients feel inspired and
                reassured. Our visionary designs and commitment to excellence
                foster confidence and anticipation, transforming event visions
                into unforgettable experiences.
              </p>
            </div>
            <div className="flex flex-1 justify-center rounded-lg">
              <img
                src="https://d1u34m45xfa3ar.cloudfront.net/website/about-page/story_02.png"
                className="rounded-lg shadow-xl shadow-[#787bbc] max-sm:my-10 max-sm:w-[300px]"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-between px-5 max-sm:mx-[10px] sm:flex-row sm:gap-20 sm:py-10 md:mx-20 md:flex-row md:gap-20 md:py-10 lg:gap-20 lg:py-10 xl:gap-40">
            <div className="flex-1 justify-end">
              <h2 className="linear-gradient-colour xl:md-14 font-serif text-2xl font-semibold max-sm:my-5 sm:mb-3 md:text-2xl lg:mb-7 lg:text-4xl">
                The Social Cause
              </h2>
              <p className="md:text-md pt-0 text-xs text-[rgba(0,0,0,1)] lg:text-base xl:text-lg">
                We focus on fostering employment by integrating offline vendors
                into our platform, helping them transition online to combat
                unemployment and enhance income streams. This expansion builds
                networks and achieves financial growth, contributing to economic
                vitality.
              </p>
            </div>
            <div className="flex flex-1 justify-center rounded-lg">
              <img
                src="https://d1u34m45xfa3ar.cloudfront.net/website/about-page/story_03.png"
                className="rounded-lg shadow-xl shadow-[#787bbc] max-sm:my-10 max-sm:w-[300px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
