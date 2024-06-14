"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({ className }: { className: string }) => {
    const images = [
        '/parallax/Frame 427318907.png',
        '/parallax/Frame 427318908-1.png',
        '/parallax/Frame 427318908.png',
    ];

    const images2 = [
        '/parallax/Frame 427318910.png',
        '/parallax/Frame 427318909.png',
        '/parallax/Frame 427318907.png',
    ];
    
    const doubledImages = [...images, ...images, ...images];
    const doubledImages2 = [...images2, ...images2, ...images2];
    
    const animationFirst = useAnimation();
    const animationSecond = useAnimation();

    useEffect(() => {
        animationFirst.start({ y: -1025, transition: { duration: 20, ease: "linear", repeat: Infinity, repeatType: "loop" } });
        animationSecond.start({ y: -1025, transition: { duration: 20, ease: "linear", repeat: Infinity, repeatType: "loop" } });
    }, [animationFirst, animationSecond]);

    return (
        <div className={cn("h-full p-0 items-start w-full overflow-hidden", className)}>
            <div className="grid grid-cols-1 md:grid-cols-2 items-start m-0 p-0 max-w-5xl mx-auto gap-3 px-1">
                <div className="grid gap-10 w-full overflow-hidden" style={{ height: '1025px' }}>
                    {doubledImages.map((el, idx) => (
                        <motion.div
                            key={"grid-1" + idx}
                            animate={animationFirst}
                            className="relative h-[300px] lg:w-[100%] w-[200px]"
                            style={{ marginBottom: 0 }}
                        >
                            <div className="h-full w-full">
                                <Image
                                    src={el}
                                    className="h-full w-full object-cover rounded-xl"
                                    layout="fill"
                                    alt="thumbnail"
                                    loading="eager"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10 w-full overflow-hidden" style={{ height: '1025px' }}>
                    {doubledImages2.map((el, idx) => (
                        <motion.div
                            key={"grid-2" + idx}
                            animate={animationSecond}
                            className="relative h-[300px] lg:w-[100%] w-[200px]"
                            style={{ marginBottom: 0 }}
                        >
                            <div className="h-full w-full">
                                <Image
                                    src={el}
                                    className="h-full w-full object-cover rounded-xl"
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
