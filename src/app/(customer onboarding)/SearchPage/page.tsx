'use client'

import React, { useState } from 'react';
import { useSearchParams } from "next/navigation";
import CategoryBar from "../(components)/categoryBar";
import FilterSection from '../(components)/FilterSection';
import Footer from '@/app/(components)/footer';
import ExploreSection from '../(components)/ExploreSection';
import VendorCard from '../(components)/VendorCard';
import tempSearchboxcardimg from '@/../public/tempSearchboxcardimg.png';
const SearchPage = () => {
  const searchParams = useSearchParams();
  const event = searchParams.get("event") || 'all';

  const [selected, setSelected] = useState<string>("");
  const [view, setView] = useState<string>("List");
  const cardsdata = [
    {
      imageSrc: '/tempSearchboxcardimg.png',
      venueName: "Radison Blue",
      location: "Vijaynagar, Indore",
      description: "We offer best service in the city, book us to host your event.We offer best service in the city, book us to host your event. We offer best service in the city, book us to host your event. We offer best service in the city, book us to host your event.",
      tags: ["Bunquet hall", "ball room"],
      price: "₹ 2000",
      rating: "4.2",
      totalRatings: 25,
    },
    {
      imageSrc: '/tempSearchboxcardimg.png',
      venueName: "Radison Blue",
      location: "Vijaynagar, Indore",
      description: "We offer best service in the city, book us to host your event.We offer best service in the city, book us to host your event. We offer best service in the city, book us to host your event. We offer best service in the city, book us to host your event.",
      tags: ["Bunquet hall", "ball room"],
      price: "₹ 2000",
      rating: "4.2",
      totalRatings: 25,
    },
    {
      imageSrc: '/tempSearchboxcardimg.png',
      venueName: "Radison Blue",
      location: "Vijaynagar, Indore",
      description: "We offer best service in the city, book us to host your event.We offer best service in the city, book us to host your event. We offer best service in the city, book us to host your event. We offer best service in the city, book us to host your event.",
      tags: ["Bunquet hall", "ball room"],
      price: "₹ 2000",
      rating: "4.2",
      totalRatings: 25,
    },
    {
      imageSrc: '/tempSearchboxcardimg.png',
      venueName: "Radison Blue",
      location: "Vijaynagar, Indore",
      description: "We offer best service in the city, book us to host your event.We offer best service in the city, book us to host your event. We offer best service in the city, book us to host your event. We offer best service in the city, book us to host your event.",
      tags: ["Bunquet hall", "ball room"],
      price: "₹ 2000",
      rating: "4.2",
      totalRatings: 25,
    },
    {
      imageSrc: '/tempSearchboxcardimg.png',
      venueName: "Radison Blue",
      location: "Vijaynagar, Indore",
      description: "We offer best service in the city, book us to host your event.We offer best service in the city, book us to host your event. We offer best service in the city, book us to host your event. We offer best service in the city, book us to host your event.",
      tags: ["Bunquet hall", "ball room"],
      price: "₹ 2000",
      rating: "4.2",
      totalRatings: 25,
    },
    {
      imageSrc: '/tempSearchboxcardimg.png',
      venueName: "Radison Blue",
      location: "Vijaynagar, Indore",
      description: "We offer best service in the city, book us to host your event.We offer best service in the city, book us to host your event. We offer best service in the city, book us to host your event. We offer best service in the city, book us to host your event.",
      tags: ["Bunquet hall", "ball room"],
      price: "₹ 2000",
      rating: "4.2",
      totalRatings: 25,
    },
    {
      imageSrc: '/tempSearchboxcardimg.png',
      venueName: "Radison Blue",
      location: "Vijaynagar, Indore",
      description: "We offer best service in the city, book us to host your event.We offer best service in the city, book us to host your event. We offer best service in the city, book us to host your event. We offer best service in the city, book us to host your event.",
      tags: ["Bunquet hall", "ball room"],
      price: "₹ 2000",
      rating: "4.2",
      totalRatings: 25,
    },
    {
      imageSrc: '/tempSearchboxcardimg.png',
      venueName: "Radison Blue",
      location: "Vijaynagar, Indore",
      description: "We offer best service in the city, book us to host your event.We offer best service in the city, book us to host your event. We offer best service in the city, book us to host your event. We offer best service in the city, book us to host your event.",
      tags: ["Bunquet hall", "ball room"],
      price: "₹ 2000",
      rating: "4.2",
      totalRatings: 25,
    },
  ]

  const filters1 = ['Option 1', 'Option 2', 'Option 3'];
  const filters2 = ['Option 4', 'Option 5', 'Option 6'];
  const filters3 = ['Option 4', 'Option 5', 'Option 6'];
  const filters4 = ['Option 4', 'Option 5', 'Option 6'];


  const [selectedFiltersSection1, setSelectedFiltersSection1] = useState<string[]>([]);
  const [selectedFiltersSection2, setSelectedFiltersSection2] = useState<string[]>([]);
  const [selectedFiltersSection3, setSelectedFiltersSection3] = useState<string[]>([]);
  const [selectedFiltersSection4, setSelectedFiltersSection4] = useState<string[]>([]);


  const handleFilterChange = (sectionKey: string, filter: string, checked: boolean) => {
    if (sectionKey === 'section1') {
      setSelectedFiltersSection1((prevFilters) =>
        checked ? [...prevFilters, filter] : prevFilters.filter((item) => item !== filter)
      );
    } else if (sectionKey === 'section2') {
      setSelectedFiltersSection2((prevFilters) =>
        checked ? [...prevFilters, filter] : prevFilters.filter((item) => item !== filter)
      );
    } else if (sectionKey === 'section3') {
      setSelectedFiltersSection3((prevFilters) =>
        checked ? [...prevFilters, filter] : prevFilters.filter((item) => item !== filter)
      );
    } else if (sectionKey === 'section4') {
      setSelectedFiltersSection4((prevFilters) =>
        checked ? [...prevFilters, filter] : prevFilters.filter((item) => item !== filter)
      );
    }
  };
  return (
    <div className="">
      <div className="mt-2">
        <ExploreSection />
      </div>
      <CategoryBar
        event={event}
        selected={selected}
        setSelected={setSelected}
        view={view}
        setView={setView}
      />
      <div className='flex justify-between gap-8 flex-start p-8 bg-gray-100'>
        <div className='flex-1 py-8  bg-grey-100'>
          <div className='gap-8 grid grid-cols-1 grid-rows-1 h-max'>
            {
              cardsdata.map((card) => (
                <VendorCard
                  imageSrc={card.imageSrc}
                  description={card.description}
                  venueName={card.venueName}
                  location={card.location}
                  tags={card.tags}
                  price={card.price}
                  rating={card.rating}
                  totalRatings={card.totalRatings}
                />
              ))
            }
          </div>
          <div>{selectedFiltersSection1}{selectedFiltersSection2}{selectedFiltersSection3}</div>
        </div>
        <div className=' flex-2 p-6 mx-6 flex flex-col gap-6 w-1/4 rounded-lg border border-gray-300 pb-4 bg-white'>
          <div className='flex '>
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 4C2.5 2.89543 3.39543 2 4.5 2H20.5C21.6046 2 22.5 2.89543 22.5 4V4.81751C22.5 5.57739 22.2116 6.30895 21.6932 6.86447L16.0379 12.9237C15.6922 13.294 15.5 13.7817 15.5 14.2883V18.382C15.5 18.7607 15.286 19.107 14.9472 19.2764L10.9472 21.2764C10.2823 21.6088 9.5 21.1253 9.5 20.382V14.2883C9.5 13.7817 9.30776 13.294 8.96211 12.9237L3.30683 6.86446C2.78836 6.30895 2.5 5.57739 2.5 4.81751V4Z" stroke="#2B3F6C" stroke-width="1.5" />
            </svg>

            <div className="font-semibold text-2xl mx-2">Filters</div>
          </div>

          <FilterSection
            title="CAPACITY"
            filters={filters1}
            sectionKey="section1"
            selectedFilters={selectedFiltersSection1}  // Pass selected filters for this section
            onFilterChange={handleFilterChange}  // Pass the handler for filter changes
            selectionType={'multiple'}
          />
          <FilterSection
            title="RENTAL RATES"
            filters={filters2}
            sectionKey="section2"
            selectedFilters={selectedFiltersSection2}  // Pass selected filters for this section
            onFilterChange={handleFilterChange}  // Pass the handler for filter changes
            selectionType={'single'}
          />

          <FilterSection
            title="PER PLATES PRICE"
            filters={filters3}
            sectionKey="section3"
            selectedFilters={selectedFiltersSection3}  // Pass selected filters for this section
            onFilterChange={handleFilterChange}  // Pass the handler for filter changes
            selectionType={'single'}
          />

          <FilterSection
            title="NUMBER OF EVENTS"
            filters={filters4}
            sectionKey="section4"
            selectedFilters={selectedFiltersSection4}  // Pass selected filters for this section
            onFilterChange={handleFilterChange}  // Pass the handler for filter changes
            selectionType={'single'}
          />

        </div>
      </div>

      <Footer />
      
    </div>
  );
};

export default SearchPage;