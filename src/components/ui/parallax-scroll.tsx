"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({ className }: { className: string }) => {
  const images = [
    "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/landing_page/moving_card_images/Parallax_image_01.png",
    "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/landing_page/moving_card_images/Parallax_image_02.png",
    "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/landing_page/moving_card_images/Parallax_image_03.png",
  ];

  const images2 = [
    "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/landing_page/moving_card_images/Parallax_image_04.png",
    "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/landing_page/moving_card_images/Parallax_image_05.png",
    "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/landing_page/moving_card_images/Parallax_image_01.png",
  ];

  const doubledImages = [...images, ...images, ...images];
  const doubledImages2 = [...images2, ...images2, ...images2];

  const animationFirst = useAnimation();
  const animationSecond = useAnimation();

  useEffect(() => {
    animationFirst.start({
      y: -1025,
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
    animationSecond.start({
      y: -800,
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [animationFirst, animationSecond]);

  return (
    <div className={cn("w-full items-start overflow-hidden p-0", className)}>
      <div className="m-0 mx-auto grid max-w-5xl grid-cols-1 items-start gap-9 p-0 px-1 md:grid-cols-2">
        <div
          className="grid w-full gap-10 overflow-hidden"
          style={{ minHeight: "10vh", maxHeight: "170vh" }}
        >
          {doubledImages.map((el, idx) => (
            <motion.div
              key={"grid-1" + idx}
              animate={animationFirst}
              className="relative h-[300px] w-[200px] lg:w-[100%]"
              style={{ marginBottom: 0 }}
            >
              <div className="h-full w-full">
                <Image
                  src={el}
                  className="h-full w-full rounded-xl object-cover"
                  fill
                  alt="thumbnail"
                  loading="eager"
                />
              </div>
            </motion.div>
          ))}
        </div>
        <div
          className="grid w-full gap-10 overflow-hidden"
          style={{ minHeight: "90vh", maxHeight: "170vh" }}
        >
          {doubledImages2.map((el, idx) => (
            <motion.div
              key={"grid-2" + idx}
              animate={animationSecond}
              className="relative h-[300px] w-[200px] lg:w-[100%]"
              style={{ marginBottom: 0 }}
            >
              <div className="h-full w-full">
                <Image
                  src={el}
                  className="h-full w-full rounded-xl object-cover"
                  fill
                  alt="thumbnail"
                  loading="eager"
                  priority
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
