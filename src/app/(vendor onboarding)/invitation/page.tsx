"use client";

import React, { useState } from "react";
import Page1 from "./page1/page";

interface Package {
  type: string;
  priceRange: [number, number];
}

interface FormState {
  
  // Page-specific states
  // Page 1
  references: boolean;
  // Page 2
  // Page 3
  // Page 4
}

const VenueForm: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // global variables
    const [formState, setFormState] = useState<FormState>({     
        references: false, 

    });

  const updateFormState = (newState: Partial<FormState>) => {
    setFormState((prev) => ({ ...prev, ...newState }));
  };


  const handleSubmit = async () => {
    const formData = new FormData();
    // Append form data
   

    //page 2
  

    //page 3
    
    // Page 4
   

    
    // Append form data for debugging
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <Page1 
            formState={formState}
            updateFormState={updateFormState}
         />;
      case 2:
        return 
      case 3:
        return     
      case 4:
        return 
        case 5:
        return 
      default:
        return (
            <Page1 
            formState={formState}
            updateFormState={updateFormState}
            />      
        );
    }
  };

  return (
    <div>
      {renderPage()}
       <div className="ml-10 mt-9 flex flex-row items-center justify-center gap-7">
        {currentPage > 1 && (
          <button
            className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
        )}
        {currentPage < 5 && (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
          >
            Next
          </button>
        )}
        {currentPage === 5 && (
          <button
            onClick={handleSubmit}
            className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default VenueForm;
