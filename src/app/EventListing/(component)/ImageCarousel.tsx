import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ImageCarouselProps {
  images: string[];
  autoplayInterval?: number;
  zoomDuration?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoplayInterval = 3000,
  zoomDuration = 2000,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoplayInterval);

    return () => clearInterval(timer);
  }, [images.length, autoplayInterval]);

  useEffect(() => {
    if (zoomedIndex !== null) {
      const timer = setTimeout(() => {
        setZoomedIndex(null);
      }, zoomDuration);

      return () => clearTimeout(timer);
    }
  }, [zoomedIndex, zoomDuration]);

  const handleImageClick = (index: number): void => {
    setZoomedIndex(index);
  };

  const getVisibleImages = (): number[] => {
    const visibleIndices: number[] = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % images.length;
      visibleIndices.push(index);
    }
    return visibleIndices;
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
      <div className="flex justify-center items-center h-64">
        {getVisibleImages().map((index) => (
          <motion.div
            key={index}
            className="w-1/3 px-2 flex items-center justify-center"
            initial={{ scale: 1 }}
            animate={{ 
              scale: zoomedIndex === index ? 1.2 : 1,
              zIndex: zoomedIndex === index ? 10 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={images[index]}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto cursor-pointer object-cover"
              onClick={() => handleImageClick(index)}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;