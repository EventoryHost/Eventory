import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ImageCarouselProps {
  images: { src: string; text: string }[];
  autoplayInterval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoplayInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoplayInterval);

    return () => clearInterval(timer);
  }, [images.length, autoplayInterval]);

  const getVisibleImages = (): { index: number; isMiddle: boolean }[] => {
    const visibleImages = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i - 1 + images.length) % images.length;
      visibleImages.push({
        index,
        isMiddle: i === 1, // Middle image is the one with i === 1
      });
    }
    return visibleImages;
  };

  return (
    <div className="relative w-full  mx-auto overflow-hidden m-8">
      <div className="flex justify-center items-center my-8">
        {getVisibleImages().map(({ index, isMiddle }) => (
          <motion.div
            key={index}
            className={`flex-shrink-0 w-1/3  flex items-center justify-center relative`}
            initial={{ scale: 1 }}
            animate={{ 
              scale: isMiddle ? 1.2 : 1, 
              zIndex: isMiddle ? 11 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={images[index].src}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover rounded-lg "
            />
            {isMiddle && (
              <div className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-50 rounded-lg p-4">
                <span className="text-white text-lg text-center whitespace-normal break-words">{images[index].text}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
