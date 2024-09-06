'use client'

import React, { useState } from 'react';
import { useSearchParams } from "next/navigation";
import CategoryBar from "../../components/categoryBar";
import Footer from "../(components)/footer";
import FilterSection from '@/components/FilterSection';

const ComingSoon = () => {
  const searchParams = useSearchParams();
  const event = searchParams.get("event") || 'all';

  const [selected, setSelected] = useState<string>("");
  const [view, setView] = useState<string>("List");


  const filters1 = ['Option 1', 'Option 2', 'Option 3'];
  const filters2 = ['Option 4', 'Option 5', 'Option 6'];
  const filters3 = ['Option 4', 'Option 5', 'Option 6'];
  const filters4 = ['Option 4', 'Option 5', 'Option 6'];


  const [selectedFiltersSection1, setSelectedFiltersSection1] = useState<string[]>([]);
  const [selectedFiltersSection2, setSelectedFiltersSection2] = useState<string[]>([]);
  const [selectedFiltersSection3, setSelectedFiltersSection3] = useState<string[]>([]);
  const [selectedFiltersSection4, setSelectedFiltersSection4] = useState<string[]>([]);


  // Handle when a filter is selected or deselected
  const handleFilterChange = (sectionKey: string, filter: string, checked: boolean) => {
    if (sectionKey === 'section1') {
      setSelectedFiltersSection1((prevFilters) =>
        checked ? [...prevFilters, filter] : prevFilters.filter((item) => item !== filter)
      );
    } else if (sectionKey === 'section2') {
      setSelectedFiltersSection2((prevFilters) =>
        checked ? [...prevFilters, filter] : prevFilters.filter((item) => item !== filter)
      );
    }else if (sectionKey === 'section3') {
      setSelectedFiltersSection3((prevFilters) =>
        checked ? [...prevFilters, filter] : prevFilters.filter((item) => item !== filter)
      );
    }else if (sectionKey === 'section4') {
      setSelectedFiltersSection4((prevFilters) =>
        checked ? [...prevFilters, filter] : prevFilters.filter((item) => item !== filter)
      );
    }
  };
  return (
    <div className="">
      <CategoryBar
        event={event}
        selected={selected}
        setSelected={setSelected}
        view={view}
        setView={setView}
      />
      <div className='flex justify-between gap-8 flex-start m-8'>
        <div className='flex-1 py-8 bg-slate-800'> main</div>
        <div className=' flex-2 p-6 mx-6 flex flex-col gap-6 w-1/4 rounded-lg border border-gray-300 pb-4'>
          <div className='flex '>
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 4C2.5 2.89543 3.39543 2 4.5 2H20.5C21.6046 2 22.5 2.89543 22.5 4V4.81751C22.5 5.57739 22.2116 6.30895 21.6932 6.86447L16.0379 12.9237C15.6922 13.294 15.5 13.7817 15.5 14.2883V18.382C15.5 18.7607 15.286 19.107 14.9472 19.2764L10.9472 21.2764C10.2823 21.6088 9.5 21.1253 9.5 20.382V14.2883C9.5 13.7817 9.30776 13.294 8.96211 12.9237L3.30683 6.86446C2.78836 6.30895 2.5 5.57739 2.5 4.81751V4Z" stroke="#2B3F6C" stroke-width="1.5" />
            </svg>

            <div className="font-semibold text-xl mx-2">Filters</div>
          </div>
          {/* Use FilterSection component for Section 1 and Section 2 */}
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

          {/* Add more FilterSection components as needed */}
        </div>
      </div>

      <div>{selectedFiltersSection1}{selectedFiltersSection2}{selectedFiltersSection3}</div>
      <Footer />
    </div>
  );
};

export default ComingSoon;