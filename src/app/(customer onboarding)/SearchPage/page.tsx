"use client";

import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import CategoryBar from "../(components)/categoryBar";
import FilterSection from "../(components)/FilterSection";
import Footer from "@/app/(components)/footer";
import ExploreSection from "../(components)/ExploreSection";
import VendorCard from "../(components)/VendorCard";
import { Filter } from "lucide-react";

const SearchPageHelper = () => {
  const searchParams = useSearchParams();
  const event = searchParams.get("event") || "all";
  const regional_event = searchParams.get("regional_event") || "all";
  const popular_event = searchParams.get("popular_event") || "all";

  const [selected, setSelected] = useState<string>("");
  const [view, setView] = useState<string>("List");
  const URLs = [
    "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1485846299386-f367c81034d8?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661772661721-b16346fe5b0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661937398460-82d0ce1922fd?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1682687219800-bba120d709c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1612617436260-69ddf5796523?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1606498151733-344ed85af302?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://unsplash.com/photos/ZDQ1Fo8vjGU",
    "https://unsplash.com/photos/JL3j_--PExQ",
  ];
  const cardsdata = [
    {
      imageSrc: [URLs[0]],
      venueName: "Radisson Blu",
      location: "Vijaynagar, Indore",
      description:
        "Luxury venue offering top-notch services with elegant interiors. Perfect for weddings, corporate events, and parties.",
      tags: ["Banquet hall", "Ballroom", "Luxury"],
      price: "₹ 3000",
      rating: "4.8",
      totalRatings: 150,
    },
    {
      imageSrc: [URLs[1]],
      venueName: "The Grand Celebration",
      location: "MG Road, Indore",
      description:
        "A spacious venue with a modern ambiance, ideal for large gatherings, social events, and conferences.",
      tags: ["Banquet hall", "Conference hall", "Spacious"],
      price: "₹ 2500",
      rating: "4.5",
      totalRatings: 98,
    },
    {
      imageSrc: [URLs[2]],
      venueName: "Emerald Heights",
      location: "Palasia, Indore",
      description:
        "An outdoor venue with a garden setting, perfect for elegant weddings and receptions in a natural environment.",
      tags: ["Garden", "Wedding venue", "Outdoor"],
      price: "₹ 2000",
      rating: "4.6",
      totalRatings: 80,
    },
    {
      imageSrc: [URLs[3]],
      venueName: "The Golden Palace",
      location: "Bhawarkua, Indore",
      description:
        "Royal-themed banquet hall offering grandeur and style for large gatherings, receptions, and corporate events.",
      tags: ["Banquet hall", "Royal theme", "Luxury"],
      price: "₹ 3500",
      rating: "4.7",
      totalRatings: 125,
    },
    {
      imageSrc: [URLs[4]],
      venueName: "Sunshine Resort",
      location: "Rau, Indore",
      description:
        "A resort-style venue with lush green lawns, swimming pool, and event spaces for weddings and parties.",
      tags: ["Resort", "Lawn", "Poolside"],
      price: "₹ 2200",
      rating: "4.3",
      totalRatings: 60,
    },
    {
      imageSrc: [URLs[5]],
      venueName: "Silver Bells",
      location: "AB Road, Indore",
      description:
        "Modern venue with contemporary designs, suitable for small to medium events such as birthdays and corporate meetings.",
      tags: ["Modern", "Corporate", "Meeting space"],
      price: "₹ 1800",
      rating: "4.0",
      totalRatings: 45,
    },
    {
      imageSrc: [URLs[6]],
      venueName: "Royal Orchids",
      location: "Sapna Sangeeta, Indore",
      description:
        "Elegant indoor venue with great ambiance and excellent catering services, ideal for family gatherings and weddings.",
      tags: ["Indoor", "Wedding", "Family"],
      price: "₹ 2800",
      rating: "4.4",
      totalRatings: 70,
    },
    {
      imageSrc: [URLs[7]],
      venueName: "Pearl Banquet",
      location: "Khajrana, Indore",
      description:
        "Chic banquet hall offering a luxurious feel with stunning interiors, designed for weddings, parties, and cultural events.",
      tags: ["Banquet hall", "Luxury", "Cultural events"],
      price: "₹ 3200",
      rating: "4.9",
      totalRatings: 200,
    },
  ];

  const filters1 = [
    "0-99",
    "100-199",
    "200-299",
    "300-399",
    "400-499",
    "500-599",
    "600-699",
    "700-799",
    "800-899",
    "900-999",
  ];
  const filters2 = [
    "₹1000 - ₹2000",
    "₹2000 - ₹3000",
    "₹3000 - ₹4000",
    "₹4000 - ₹5000",
    "₹5000 - ₹6000",
    "₹6000 - ₹7000",
  ];
  const filters3 = [
    "<500",
    "500-1000",
    "1000-1500",
    "1500-2000",
    "2000-2500",
    "2500-3000",
    "3000-3500",
    "3500-4000",
    "4000-4500",
    "4500-5000",
    "5000-5500",
    "5500-6000",
  ];
  const slides = [
    "https://eventory-bucket.s3.ap-south-1.amazonaws.com/website/EventListing-page/caraousel/pic1.png",
    "/landing_page/categories/cat_01.png",
    "/landing_page/categories/cat_02.png",
  ];
  const filters4 = ["4.0 and above", "4.5 and above", "5.0 and above"];

  const [selectedFiltersSection1, setSelectedFiltersSection1] = useState<
    string[]
  >([]);
  const [selectedFiltersSection2, setSelectedFiltersSection2] = useState<
    string[]
  >([]);
  const [selectedFiltersSection3, setSelectedFiltersSection3] = useState<
    string[]
  >([]);
  const [selectedFiltersSection4, setSelectedFiltersSection4] = useState<
    string[]
  >([]);

  const handleFilterChange = (
    sectionKey: string,
    filter: string,
    checked: boolean,
  ) => {
    if (sectionKey === "section1") {
      setSelectedFiltersSection1((prevFilters) =>
        checked
          ? [...prevFilters, filter]
          : prevFilters.filter((item) => item !== filter),
      );
    } else if (sectionKey === "section2") {
      setSelectedFiltersSection2((prevFilters) =>
        checked
          ? [...prevFilters, filter]
          : prevFilters.filter((item) => item !== filter),
      );
    } else if (sectionKey === "section3") {
      setSelectedFiltersSection3((prevFilters) =>
        checked
          ? [...prevFilters, filter]
          : prevFilters.filter((item) => item !== filter),
      );
    } else if (sectionKey === "section4") {
      setSelectedFiltersSection4((prevFilters) =>
        checked
          ? [...prevFilters, filter]
          : prevFilters.filter((item) => item !== filter),
      );
    }
  };
  return (
    <div className="min-h-screen">
        <ExploreSection slides={slides} />

      <CategoryBar
        event={event}
        selected={selected}
        setSelected={setSelected}
        view={view}
        setView={setView}
      />
      <div className="flex-start flex justify-between gap-8 bg-gray-100 p-8">
        <div className="bg-grey-100 flex-1 py-8">
          <div
            className={`gap-8 ${view === "Grid" ? "grid grid-cols-3" : "grid grid-cols-1"} h-max grid-rows-1`}
          >
            {cardsdata.map((card, index) => (
              <VendorCard
                viewType={view}
                key={index}
                imageSrc={card.imageSrc}
                description={card.description}
                venueName={card.venueName}
                location={card.location}
                tags={card.tags}
                price={card.price}
                rating={card.rating}
                totalRatings={card.totalRatings}
              />
            ))}
          </div>

          <div>
            {selectedFiltersSection1}
            {selectedFiltersSection2}
            {selectedFiltersSection3}
          </div>
        </div>
        <div className="flex-2 mx-6 md:flex w-1/4 flex-col gap-6 rounded-lg border border-gray-300 bg-white p-6 pb-4 hidden">
          <div className="flex">
            <Filter size={24} />
            <div className="mx-2 text-2xl font-semibold">Filters</div>
          </div>

          <FilterSection
            title="CAPACITY"
            filters={filters1}
            sectionKey="section1"
            selectedFilters={selectedFiltersSection1} // Pass selected filters for this section
            onFilterChange={handleFilterChange} // Pass the handler for filter changes
            selectionType={"multiple"}
          />
          <FilterSection
            title="RENTAL RATES"
            filters={filters2}
            sectionKey="section2"
            selectedFilters={selectedFiltersSection2} // Pass selected filters for this section
            onFilterChange={handleFilterChange} // Pass the handler for filter changes
            selectionType={"single"}
          />

          <FilterSection
            title="PER PLATES PRICE"
            filters={filters3}
            sectionKey="section3"
            selectedFilters={selectedFiltersSection3} // Pass selected filters for this section
            onFilterChange={handleFilterChange} // Pass the handler for filter changes
            selectionType={"single"}
          />

          <FilterSection
            title="NUMBER OF EVENTS"
            filters={filters4}
            sectionKey="section4"
            selectedFilters={selectedFiltersSection4} // Pass selected filters for this section
            onFilterChange={handleFilterChange} // Pass the handler for filter changes
            selectionType={"single"}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

const SearchPage = () => {
  return (
    <Suspense>
      <SearchPageHelper />
    </Suspense>
  );
};

export default SearchPage;
