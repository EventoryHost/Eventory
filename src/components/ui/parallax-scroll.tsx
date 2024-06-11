"use client";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
export const ParallaxScroll = ({ className }: { className: string }) => {
    const images = [
        '/parallax/Frame 427318907.png',
        '/parallax/Frame 427318908-1.png',
        '/parallax/Frame 427318908.png',
        '/parallax/Frame 427318910.png',
        '/parallax/Frame 427318909.png',
        '/parallax/Frame 427318907.png',
        '/parallax/Frame 427318910.png',
        '/parallax/Frame 427318910.png'
    ];
    // Duplicate images array and create the desired pattern
    const doubledImages = [...images, ...images, ...images];
    const animationFirst = useAnimation();
    const animationSecond = useAnimation();
    useEffect(() => {
        const animateFirst = async () => {
            while (true) {
                await animationFirst.start({ y: -700, transition: { duration: 20, ease: "linear" } });
                await animationFirst.start({ y: 0, transition: { duration: 0 } });
            }
        };
        const animateSecond = async () => {
            while (true) {
                await animationSecond.start({ y: -250, transition: { duration: 20, ease: "linear" } });
                await animationSecond.start({ y: 0, transition: { duration: 0 } });
            }
        };
        animateFirst();
        animateSecond();
    }, [animationFirst, animationSecond]);
    return (
        <div className={cn("h-[40rem] items-start w-full overflow-hidden", className)}>
            <div className="grid grid-cols-1 md:grid-cols-2 items-start max-w-5xl mx-auto gap-10 py-10 px-1">
                <div className="grid gap-10 w-full">
                    {doubledImages.map((el, idx) => (
                        <motion.div
                            key={"grid-1" + idx}
                            animate={animationFirst}
                            className="relative h-[200px] w-[250px] p-4"
                            style={{ marginBottom: 0 }} // Added to remove any bottom margin
                        >
                            <div className="h-full w-full">
                                <Image
                                    src={el}
                                    className="h-full w-full object-cover object-left-top rounded-lg"
                                    layout="fill"
                                    alt="thumbnail"
                                    loading="eager"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10 w-full h-120vh mb-10">
                    {doubledImages.slice(images.length).map((el, idx) => (
                        <motion.div
                            key={"grid-2" + idx}
                            animate={animationSecond}
                            className="relative h-[200px] w-[250px] p-4"
                            style={{ marginBottom: 0 }} // Added to remove any bottom margin
                        >
                            <div className="h-full w-full">
                                <Image
                                    src={el}
                                    className="h-full w-full object-cover object-left-top rounded-lg"
                                    layout="fill"
                                    alt="thumbnail"
                                    loading="eager"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};