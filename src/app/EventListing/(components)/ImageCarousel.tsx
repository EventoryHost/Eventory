import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface ImageCarouselProps {
  images: { src: string; text: string }[];
  autoplayInterval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoplayInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Detect mobile screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 748); // Mobile breakpoint
    };

    // Initial check
    handleResize();

    // Add event listener on resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Auto-slide effect
  useEffect(() => {
    startAutoplay();

    return () => stopAutoplay(); // Clean up interval on unmount
  }, [images.length, autoplayInterval]);

  // Function to start the autoplay timer
  const startAutoplay = () => {
    stopAutoplay(); // Clear any existing interval
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoplayInterval);
  };

  // Function to stop the autoplay timer
  const stopAutoplay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  // Handle dot click to navigate
  const handleDotClick = (index: number) => {
    stopAutoplay(); // Stop current autoplay
    setCurrentIndex(index); // Update image
    startAutoplay(); // Restart autoplay after dot click
  };

  // Get visible images, 3 for larger screens, 1 for mobile
  const getVisibleImages = (): { index: number; isMiddle: boolean }[] => {
    const visibleImages = [];
    const numberOfVisibleImages = isMobile ? 1 : 3; // Show 1 image on mobile, 3 on desktop

    for (let i = 0; i < numberOfVisibleImages; i++) {
      const index = (currentIndex + i - 1 + images.length) % images.length;
      visibleImages.push({
        index,
        isMiddle: isMobile ? true : i === 1, // Middle image for desktop, single image on mobile
      });
    }
    return visibleImages;
  };

  return (
    <div className="relative md:m-8 mx-auto w-full overflow-hidden flex flex-col">
      <div className="md:my-8 flex items-center justify-center">
        {getVisibleImages().map(({ index, isMiddle }) => (
          <motion.div
            key={index}
            className={`relative flex ${
              isMobile ? "w-full" : "w-1/3"
            } flex-shrink-0 items-center justify-center`}
            initial={{ scale: 1 }}
            animate={{
              scale: isMiddle ? (isMobile ? 0.9 : 1.2) : 1, // Slightly reduce size in mobile view
              zIndex: isMiddle ? 11 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={images[index].src}
              alt={`Slide ${index + 1}`}
              className="h-auto w-full rounded-lg object-contain" // Ensure it fits in the container
            />
            {isMiddle && (
              <div className="absolute inset-0 flex md:items-end items-center justify-center rounded-lg bg-black bg-opacity-50 p-4">
                <span className="whitespace-normal break-words  text-xs text-white text-justify ">
                  {images[index].text}
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center md:mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`md:h-3 md:w-3 h-2 w-2 rounded-full ${
              index === currentIndex
                ? "bg-[#2E3192]"
                : "border-2 border-[#2E3192] bg-white"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
