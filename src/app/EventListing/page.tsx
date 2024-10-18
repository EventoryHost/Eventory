"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ImageCarousel from "./(components)/ImageCarousel";
import Footer from "../(components)/footer";
import Link from "next/link";
import ExploreSection from "../(customer onboarding)/(components)/ExploreSection";

const CarouselPage = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false); // Initial value can be false

  // Effect to update the isMobile state on window resize
  useEffect(() => {
    // Check if running in the browser
    if (typeof window !== "undefined") {
      // Set initial value based on window width
      setIsMobile(window.innerWidth < 768);

      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      // Add event listener on component mount
      window.addEventListener("resize", handleResize);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/pages/event_listing/carousel/pic1.png",
    "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/pages/event_listing/carousel/cat_01.png",
    "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/pages/event_listing/carousel/cat_02.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );
  const images = [
    {
      src: "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/pages/event_listing/special_events/pic1.jpeg",
      text: "I recently celebrated my birthday and used Eventory to book a hall, decorators, and a cake, and I couldn't be happier. The venue was perfect, the decorations were stunning, and the cake was delicious. ",
    },
    {
      src: "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/pages/event_listing/special_events/pic2.jpeg",
      text: "Category 2",
    },
    {
      src: "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/pages/event_listing/special_events/pic3.jpeg",
      text: "Category 3",
    },
  ];

  const popular_events = [
    {
      name: "Weddings",

      img: "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/pages/event_listing/popular_events/weddings.png",
    },
    {
      name: "Corporate",

      img: "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/pages/event_listing/popular_events/corporate.png",
    },
    {
      name: "Festive",

      img: "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/pages/event_listing/popular_events/festive.png",
    },
    {
      name: "Birthdays",

      img: "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/pages/event_listing/popular_events/birthdays.png",
    },
    {
      name: "Anniversary",

      img: "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/pages/event_listing/popular_events/anniversary.png",
    },
  ];

  const venueNames = [
    "Central India",
    "East India",
    "North East",

    "North India",
    "South India",
    "West India",
  ];
  const baseImageUrl =
    "https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/EventListing-page/";

  const venues = venueNames.map((name, index) => ({
    name: name,
    img: `${baseImageUrl}RE/${name.toLowerCase().replace(/ /g, "-")}-pic-${index + 1}.png`, // Adjust the naming convention as needed
  }));

  return (
    <div className="min-h-screen bg-gray-100">
      <ExploreSection slides={slides} eventType={true} isMobile={isMobile} />

      <div className="mx-auto mt-2 flex w-[85%] flex-col items-center justify-between gap-6 md:mt-10 md:gap-16">
        <div className="flex w-full flex-col items-start">
          <div className="justify-start font-poppins text-2xl font-bold md:text-4xl">
            Regional Events
          </div>
          <div className="flex w-full justify-center">
            <Carousel
              plugins={[plugin.current]}
              className="mb-4 mt-4 w-full max-w-[100%] overflow-x-auto scrollbar-hide md:mb-0 md:max-w-[90%] md:overflow-visible"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent className="flex overflow-x-auto scrollbar-hide md:gap-2 md:overflow-visible">
                {venues.map((venue, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-[40%] md:basis-[22.22%]"
                  >
                    <div className="w-full">
                      <div className="relative aspect-square cursor-pointer overflow-hidden rounded-xl">
                        <a
                          href={`/EventType?event=${encodeURIComponent(venue.name)}`}
                        >
                          <Image
                            src={venue.img}
                            alt={venue.name}
                            fill
                            style={{ objectFit: "cover" }}
                            className="rounded-xl"
                          />

                          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
                            <h3 className="mb-2 p-1 text-center text-xs font-semibold md:text-lg">
                              {venue.name}
                            </h3>
                            {/* <p className="text-center text-sm">
                            {venue.category}
                          </p> */}
                          </div>
                        </a>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {!isMobile && <CarouselPrevious />}
              {!isMobile && <CarouselNext />}
            </Carousel>
          </div>
        </div>

        <div className="flex w-full flex-col items-start">
          <div className="justify-start font-poppins text-2xl font-bold md:text-4xl">
            Popular Events
          </div>
          <div className="flex w-full justify-center">
            <Carousel
              plugins={[plugin.current]}
              className="mb-4 mt-4 w-full max-w-[100%] md:mb-0 md:max-w-[90%]"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent className="flex md:gap-2">
                {popular_events.map((venue, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-[45%] md:basis-[26%]"
                  >
                    <div className="w-full">
                      <div className="relative aspect-[3/4] cursor-pointer overflow-hidden rounded-xl md:aspect-square">
                        <a
                          href={`/EventType?event=${encodeURIComponent(venue.name)}`}
                        >
                          <Image
                            src={venue.img}
                            alt={venue.name}
                            fill
                            style={{ objectFit: "cover" }}
                            className="rounded-xl"
                          />
                        </a>

                        {isMobile && (
                          <div className="absolute inset-0 flex flex-col items-start justify-end bg-black bg-opacity-20 text-white">
                            <h3 className="p-4 text-center text-sm font-semibold md:text-lg">
                              {venue.name}
                            </h3>
                          </div>
                        )}
                      </div>
                      {!isMobile && (
                        <h3 className="mb-2 text-lg font-semibold">
                          {venue.name}
                        </h3>
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Hide buttons in mobile view */}
              {!isMobile && <CarouselPrevious />}
              {!isMobile && <CarouselNext />}
            </Carousel>
          </div>
        </div>

        <div className="mb-4 flex w-full flex-col items-start">
          <div className="justify-start font-poppins text-2xl font-bold md:text-4xl">
            Our Special Events
          </div>
          <div className="flex w-full justify-center">
            <ImageCarousel images={images} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CarouselPage;
