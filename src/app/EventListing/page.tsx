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
    if (typeof window !== 'undefined') {
      // Set initial value based on window width
      setIsMobile(window.innerWidth < 768);

      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      // Add event listener on component mount
      window.addEventListener('resize', handleResize);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    "https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/EventListing-page/caraousel/pic1.png",
    "/landing_page/categories/cat_01.png",
    "/landing_page/categories/cat_02.png",
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
      src: "https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/EventListing-page/SE/pic1.jpeg",
      text: "I recently celebrated my birthday and used Eventory to book a hall, decorators, and a cake, and I couldn't be happier. The venue was perfect, the decorations were stunning, and the cake was delicious. ",
    },
    {
      src: "https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/EventListing-page/SE/pic2.jpeg",
      text: "Category 2",
    },
    {
      src: "https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/EventListing-page/SE/pic3.jpeg",
      text: "Category 3",
    },
    
  ];
  
  const popular_events = [
    {
      name: "Weddings",

      img: "https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/EventListing-page/PE/weddings.png",
    },
    {
      name: "Corporate",

      img: "https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/EventListing-page/PE/corporate.png",
    },
    {
      name: "Festive",

      img: "https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/EventListing-page/PE/festive.png",
    },
    {
      name: "Birthdays",

      img: "https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/EventListing-page/PE/birthdays.png",
    },
    {
      name: "Anniversary",

      img: "https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/EventListing-page/PE/anniversary.png",
    },
   
  ]


  const venueNames = [
    "Central India",
    "East India",
    "North East",

    "North India",    "South India",
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
      <ExploreSection slides={slides} eventType={true}/>

      

      <div className="mx-auto md:mt-10 mt-2 flex w-[85%] flex-col items-center justify-between gap-6 md:gap-16">
        <div className="flex w-full flex-col items-start">
          <div className="justify-start font-poppins text-2xl font-bold md:text-4xl">
            Regional Events
          </div>
          <div className="flex w-full justify-center">
            <Carousel
              plugins={[plugin.current]}
              className="mb-4 mt-4 w-full  md:mb-0 md:max-w-[90%] max-w-[100%] overflow-x-auto md:overflow-visible scrollbar-hide"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent className="flex overflow-x-auto md:overflow-visible scrollbar-hide md:gap-2">
                {venues.map((venue, index) => (
                  <CarouselItem
                    key={index}
                    className=" basis-[40%] md:basis-[22.22%] "
                  >
                    <div className="w-full ">
                      <div className="relative aspect-square overflow-hidden rounded-xl cursor-pointer">
                      <a href={`/EventType?event=${encodeURIComponent(venue.name)}`}>

                        <Image
                          src={venue.img}
                          alt={venue.name}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-xl"
                        />
                        
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50  text-white">
                          <h3 className="mb-2 text-center text-xs md:text-lg font-semibold p-1 ">
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
              className="mb-4 mt-4 w-full md:mb-0 md:max-w-[90%] max-w-[100%] "
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent className="flex md:gap-2 ">
                {popular_events.map((venue, index) => (
                  <CarouselItem key={index} className="md:basis-[26%] basis-[45%]">
                    <div className="w-full">
                      <div className="relative md:aspect-square aspect-[3/4] overflow-hidden rounded-xl cursor-pointer">
                      <a href={`/EventType?event=${encodeURIComponent(venue.name)}`}>

                        <Image
                          src={venue.img}
                          alt={venue.name}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-xl"
                        />
                        </a>

                        {isMobile && <div className="absolute inset-0 flex flex-col items-start justify-end bg-black bg-opacity-20 text-white">
                          <h3 className="text-center text-sm md:text-lg font-semibold p-4">
                            {venue.name}
                          </h3>
                        </div>}

                      </div>
                      {!isMobile && <h3 className="mb-2 text-lg font-semibold">
                        {venue.name}
                      </h3>}
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
