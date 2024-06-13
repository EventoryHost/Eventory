"use server";
import React, { useState } from "react";
import fuzzysort from "fuzzysort";

export interface Categories {
  category: string;
}

const mystuff: Categories[] = [
    { category: "Marriage halls" },
    { category: "Banquet halls" },
    { category: "Hotels with event spaces" },
    { category: "Outdoor venues (gardens, farms, etc.)" },
    { category: "Community centers" },
    { category: "Traditional Indian cuisine caterers" },
    { category: "Multi-cuisine caterers" },
    { category: "Specialty caterers (vegetarian, vegan, etc.)" },
    { category: "Dessert caterers (cakes, sweets, etc.)" },
    { category: "Floral decorators" },
    { category: "Theme decorators" },
    { category: "Stage decorators" },
    { category: "Lighting and sound decorators" },
    { category: "Wedding photographers" },
    { category: "Cinematographers" },
    { category: "Drone photographers" },
    { category: "Pre-wedding photoshoot specialists" },
    { category: "Live bands" },
    { category: "DJs" },
    { category: "Dancers (Bollywood, classical, etc.)" },
    { category: "Magicians" },
    { category: "Caricature artists" },
    { category: "Full-service event planners" },
    { category: "Day-of coordination services" },
    { category: "Destination event planners" },
    { category: "Corporate event planners" },
    { category: "Custom invitation designers" },
    { category: "Digital invitation creators" },
    { category: "Wedding stationery designers (menus, programs, etc.)" },
    { category: "Bridal makeup artists" },
    { category: "Hair stylists" },
    { category: "Mehndi artists" },
    { category: "Fashion stylists" },
    { category: "Luxury car rentals (for weddings)" },
    { category: "Transportation for guests (buses, vans, etc.)" },
    { category: "Horse-drawn carriages (for traditional weddings)" },
    { category: "Rental Services:" },
    { category: "Furniture and decor rentals" },
    { category: "Tent and canopy rentals" },
    { category: "Audio-visual equipment rentals" },
    { category: "Wedding favor vendors" },
    { category: "Personalized gift creators" },
    { category: "Corporate gift suppliers" },
    { category: "Spa and massage services" },
    { category: "Yoga instructors" },
    { category: "Fitness trainers" },
    { category: "Event website designers" },
    { category: "Event app developers" },
    { category: "Virtual event platform providers" },
    { category: "Marriage registration assistance" },
    { category: "Legal advisors for event contracts" },
    { category: "Permit and license facilitators" },
    { category: "Valet parking services" },
    { category: "Security services" },
    { category: "Waste management services" },
];

export async function handleSearch(value: string) {
  if (value.trim() !== "") {
    const fuzzyResults = fuzzysort.go(value, mystuff, { key: "category" });
    return fuzzyResults.slice(0, 10).map((result) => result.obj);
  } else {
    return [];
  }
}

export async function handleSearchClick() {
  return mystuff;
}

export async function handleSearchAbort() {
  return [];
}






































// const Search: React.FC = () => {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState(mystuff);

//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setQuery(value);
//     if (value.trim() !== "") {
//       const fuzzyResults = fuzzysort.go(value, mystuff, { key: "category" });
//       setResults(fuzzyResults.map((result) => result.obj));
//     } else {
//       setResults(mystuff);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search"
//         value={query}
//         onChange={handleSearch}
//       />
//       <ul>
//         {results.map((result) => (
//           <li key={result.category}>{result.category}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Search;

// /*
 
//  This code is a simple search component that uses  fuzzysort  to search through an array of objects. The search term is "a", and it returns an array of objects with their respective scores. The component renders a list of the objects with the highest scores. 
//  Conclusion 
//  Fuzzysort is a powerful library that can be used to implement fuzzy search in your applications. It is fast and easy to use, and it can be used in a variety of scenarios. 
//  In this article, we covered how to use  fuzzysort  to perform fuzzy search in JavaScript. We also covered some advanced features of the library, such as searching through an array of objects and customizing the search options. 
//  If you are looking to implement fuzzy search in your application,  fuzzysort  is a great library to consider. 
// ]]>

//  In this article, we will cover how to use the  react-select  library to create a multi-select dropdown in a React application. We will cover how to install the library, create a multi-select dropdown, and customize the dropdown options. 
//  What is react-select? 
//  react-select  is a flexible and customizable dropdown library for React applications. It provides a rich set of features, such as multi-select, single-select, and async-select dropdowns. 
//  react-select  is a popular choice for creating dropdowns in React applications because it is easy to use and highly customizable. 
//  How to install react-select 
//  To install  react-select , you can use npm or yarn. 
//  npm install react-select
 
//  yarn add react-select
 
//  How to create a multi-select dropdown in React 
//  To create a multi-select dropdown in React using  react-select , you need to import the  Select  component from the library and pass the  isMulti  prop to enable multi-select. 
//  Here is an example of how to create a multi-select dropdown in React using  react-select :
// */
