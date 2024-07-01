"use server";
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
