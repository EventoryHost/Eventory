import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

interface FilterSectionProps {
  title: string;
  filters: string[];
  sectionKey: string;
  selectedFilters: string[]; // Pass selected filters from the parent
  onFilterChange: (
    sectionKey: string,
    filter: string,
    checked: boolean,
  ) => void; // Notify parent of changes
  selectionType: "single" | "multiple"; // Specify whether single or multiple selection is allowed
}

const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  filters,
  sectionKey,
  selectedFilters,
  onFilterChange,
  selectionType,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [useCustomCheckboxes, setUseCustomCheckboxes] = useState(true); // Default to using custom checkboxes

  const toggleSection = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    if (selectionType === "single") {
      // For single-selection, clear previous selections and only keep the current one
      const newSelectedFilters = checked ? [name] : [];
      filters.forEach((filter) => {
        if (filter !== name && selectedFilters.includes(filter)) {
          onFilterChange(sectionKey, filter, false);
        }
      });
      if (checked) {
        onFilterChange(sectionKey, name, true);
      }
    } else {
      // For multi-selection, just notify of the change
      onFilterChange(sectionKey, name, checked);
    }
  };

  return (
    <div className="border-b border-gray-400 pb-2">
      <div
        className="flex cursor-pointer justify-between"
        onClick={toggleSection}
      >
        <span className="text-lg font-semibold text-gray-600">{title}</span>
        {!isOpen ? <FaChevronRight /> : <FaChevronDown />}
      </div>
      {isOpen && (
        <div className="my-2 p-2">
          {filters.map((filter, index) => (
            <div
              key={`${sectionKey}-${index}`}
              className="my-2 flex items-center"
            >
              <div
                onClick={() => {
                  const checked = !selectedFilters.includes(filter);
                  handleCheckboxChange({
                    target: { name: filter, checked } as HTMLInputElement,
                  } as React.ChangeEvent<HTMLInputElement>);
                }}
                className="mr-2 flex cursor-pointer items-center justify-center"
              >
                {selectionType === "multiple" ? (
                  <>
                    {selectedFilters.includes(filter) ? (
                      <img
                        src={
                          "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/components/selection/Checkbor.png"
                        }
                        alt={filter}
                        className="h-5 w-5"
                      />
                    ) : (
                      <img
                        src={
                          "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/components/selection/Checkbor.png"
                        }
                        alt={filter}
                        className="h-5 w-5"
                      />
                    )}
                  </>
                ) : (
                  <>
                    {selectedFilters.includes(filter) ? (
                      <img
                        src={
                          "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/components/selection/Choice_1.png"
                        }
                        alt={filter}
                        className="h-5 w-5"
                      />
                    ) : (
                      <img
                        src={
                          "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/components/selection/Choice.png"
                        }
                        alt={filter}
                        className="h-5 w-5"
                      />
                    )}
                  </>
                )}
              </div>
              <label htmlFor={`${sectionKey}-checkbox-${index}`}>
                {filter}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterSection;
