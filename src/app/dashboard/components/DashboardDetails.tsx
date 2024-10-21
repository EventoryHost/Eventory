import FileDisplay from "@/app/(vendor onboarding)/caterer/(components)/File";
import React, { useEffect, useState } from "react";

interface BusinessDetails {
  businessName: string;
  category: string;
  gstin: string;
  teamsize: string;
  annualrevenue: string;
  businessAddress: string;
  cities: string[]; // Array of cities
  pinCode: number;
  years: string;
}
interface User {
  name: string;
  mobile: string;
  businessDetails: BusinessDetails; // Nested business details
}
interface VenueDetails {
  userId: string;
  name: string;
  managerName: string;
  capacity: string;
  operatingHours: {
    address: string;
    venueDescription: string;
  };
  venueTypes: string[];
  audioVisualEquipment: string[];
  accessibilityFeatures: string[];
  restrictionsPolicies: string[];
  specialFeatures: string[];
  facilities: string[];
  termsConditions: string[];
  cancellationPolicy: string[];
  insurancePolicy: string[];
  photos: string[];
  videos: string[];
  __v: number;
  catererServices: boolean;
  decorServices: boolean;
  advanceBookingPeriod: string;
  awards: string;
  clientTestimonials: string;
}

interface IntroProps {
  user: User | null;
  venueDetails: VenueDetails;
}
const DashboardDetails: React.FC<IntroProps> = ({ user, venueDetails }) => {
  const [selected, setSelected] = useState<number>(0);
  const tabs = [
    "basic deatils  ",
    "features details",
    "policies",
    "additional details",
  ];
  const [policyMetadata, setPolicyMetadata] = useState<any[]>([]); // State to hold fetched metadata

  if (!user || !user.businessDetails) {
    return <p>Loading business details...</p>;
  }

  const booleanFields = Object.entries(venueDetails).filter(
    ([key, value]) => typeof value === "boolean",
  ); // Filter boolean fields

  const filteredStringArrays = Object.entries(venueDetails).filter(
    ([key, value]) =>
      Array.isArray(value) &&
      typeof value[0] === "string" &&
      ![
        "termsConditions",
        "cancellationPolicy",
        "insurancePolicy",
        "photos",
        "videos",
      ].includes(key),
  );
  const policies = Object.entries(venueDetails).filter(([key]) =>
    ["termsConditions", "insurancePolicy", "cancellationPolicy"].includes(key),
  );
  const photo_video = Object.entries(venueDetails).filter(([key]) =>
    ["photos", "videos"].includes(key),
  );

  // still working

  // useEffect(() => {
  //     const fetchMetadata = async () => {
  //         try {
  //             const metadata = await fetchPolicyMetadata(venueDetails);
  //             setPolicyMetadata(metadata);
  //         } catch (error) {
  //             console.error(error);
  //         }
  //     };

  //     fetchMetadata();
  // }, [venueDetails]);

  // still working
  const fetchPolicyMetadata = async (venueDetails: VenueDetails) => {
    try {
      const policies = Object.entries(venueDetails)
        .filter(([key]) =>
          ["termsConditions", "insurancePolicy", "cancellationPolicy"].includes(
            key,
          ),
        )
        .flatMap(([, value]) => value); // Assuming value is an array of URLs, flatten it

      const metadataPromises = policies.map((url: string) => {
        const key = url.split("amazonaws.com/")[1]; // Extract the key from the URL
        return fetch(`/api/getMetadata?key=${encodeURIComponent(key)}`); // Call your API
      });

      const responses = await Promise.all(metadataPromises);

      const metadataArray = await Promise.all(
        responses.map(async (response) => {
          if (!response.ok) {
            const errorData = await response.json();
            console.error("Error fetching metadata:", errorData);
            return null; // Return null for failed requests
          }
          return response.json();
        }),
      );

      const validMetadata = metadataArray.filter((data) => data !== null);
      return validMetadata; // Return the valid metadata results
    } catch (err) {
      console.error("Error fetching policy metadata:", err);
      throw new Error("Failed to fetch policy metadata");
    }
  };

  return (
    <div className="flex flex-col gap-8 rounded-xl bg-white p-3 md:p-6">
      <div className="flex items-center justify-between border-b-2">
        <ul className="flex items-center gap-10 text-sm font-medium md:text-base">
          {tabs.map((venue, index) => (
            <li
              key={index}
              className={`cursor-pointer pb-3 text-center ${
                selected === index
                  ? "border-b-4 border-[#2E3192] text-[#2E3192]"
                  : "text-gray-500"
              }`}
              onClick={() => setSelected(index)}
            >
              {venue}
            </li>
          ))}
        </ul>
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.4844 3.80552C15.5576 2.73077 17.2981 2.73011 18.372 3.80405L20.8639 6.2959C21.9287 7.36068 21.9397 9.08444 20.8887 10.1628L11.6556 19.6361C10.95 20.3599 9.98237 20.7681 8.97194 20.7681L6.21979 20.768C4.94055 20.7679 3.91893 19.7015 3.97273 18.4224L4.09089 15.6134C4.13039 14.6744 4.52067 13.7844 5.1845 13.1195L14.4844 3.80552ZM17.3122 4.86551C16.824 4.37736 16.0329 4.37766 15.5451 4.86618L13.8904 6.52336L18.1727 10.8003L19.8153 9.11505C20.2931 8.62488 20.288 7.84136 19.804 7.35737L17.3122 4.86551ZM6.24516 14.1802L12.8302 7.58522L17.1253 11.875L10.5822 18.5883C10.1589 19.0226 9.57827 19.2675 8.97201 19.2675L6.21986 19.2674C5.79344 19.2674 5.45291 18.9119 5.47084 18.4856L5.58899 15.6765C5.61269 15.1131 5.84686 14.5791 6.24516 14.1802ZM21.5121 20.6958C21.9262 20.6958 22.2619 20.3598 22.2619 19.9455C22.2619 19.5311 21.9262 19.1952 21.5121 19.1952H15.3828C14.9687 19.1952 14.6331 19.5311 14.6331 19.9455C14.6331 20.3598 14.9687 20.6958 15.3828 20.6958H21.5121Z"
            fill="#2B3F6C"
          />
        </svg>
      </div>
      <div>
        {selected === 0 && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-4 rounded-[20px] border-2 p-5">
              <div className="flex flex-col gap-2 text-gray-700">
                <div className="text-base font-normal">GSTIN:</div>
                <div className="text-sm font-bold">
                  {user.businessDetails.gstin}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-[20px] border-2 p-5">
              <div className="flex flex-col gap-2 text-gray-700">
                <div className="text-base font-normal">Team Size:</div>
                <div className="text-sm font-bold">
                  {user.businessDetails.teamsize} Persons
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-[20px] border-2 p-5">
              <div className="flex flex-col gap-2 text-gray-700">
                <div className="text-base font-normal">Buisness Address:</div>
                <div className="text-sm font-bold">
                  {user.businessDetails.businessAddress}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-[20px] border-2 p-5">
              <div className="flex flex-col gap-2 text-gray-700">
                <div className="text-base font-normal">Pincode:</div>
                <div className="text-sm font-bold">
                  {user.businessDetails.pinCode}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-[20px] border-2 p-5">
              <div className="flex flex-col gap-2 text-gray-700">
                <div className="text-base font-normal">Operational Cities:</div>
                <div className="text-sm font-bold">
                  {Array.isArray(user.businessDetails.cities)
                    ? user.businessDetails.cities.join(", ")
                    : user.businessDetails.cities}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-[20px] border-2 p-5">
              <div className="flex flex-col gap-2 text-gray-700">
                <div className="text-base font-normal">Years in Operation:</div>
                <div className="text-sm font-bold">
                  {user.businessDetails.years} Years
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-[20px] border-2 p-5">
              <div className="flex flex-col gap-2 text-gray-700">
                <div className="text-base font-normal">Annual Revenue:</div>
                <div className="text-sm font-bold">
                  {user.businessDetails.annualrevenue} Lakhs
                </div>
              </div>
            </div>
          </div>
        )}
        {selected === 1 && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {booleanFields.map(([key, value]) => (
              <div
                key={key}
                className="flex flex-col gap-4 rounded-[20px] border-2 p-5"
              >
                <div className="flex flex-col gap-2 text-gray-700">
                  <div className="text-base font-normal">
                    Do you provide {key.charAt(0).toUpperCase() + key.slice(1)}?
                  </div>
                  <div className="text-sm font-bold">
                    {value ? "Yes" : "No"}
                  </div>
                </div>
              </div>
            ))}
            {filteredStringArrays.map(([key, value]) => (
              <div
                key={key}
                className="flex flex-col gap-4 rounded-[20px] border-2 p-5"
              >
                <div className="flex flex-col gap-2 text-gray-700">
                  <div className="text-base font-normal">
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                  </div>
                  <div className="flex w-[80%] flex-wrap gap-2">
                    {Array.isArray(value) &&
                      value.map((item, index) => (
                        <span
                          className="rounded-lg bg-[#E8F1FD] p-2 text-xs font-medium text-[#448DF2]"
                          key={index}
                        >
                          {item}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {selected === 2 && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {policies.map(([key, value]) => (
              <div
                key={key}
                className="flex flex-col gap-4 rounded-[20px] px-5"
              >
                <div className="flex flex-col gap-2 text-gray-700">
                  <div className="text-base font-normal">
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                  </div>
                  {Array.isArray(value) && value.length > 0 ? (
                    <div className="flex flex-wrap gap-2 text-sm font-bold">
                      {value.map((item, index) => {
                        // Extract file name from the URL
                        const fileName = item.split("/").pop().split("-").pop();
                        return (
                          <div
                            key={index}
                            className="flex w-full items-center justify-between gap-10 space-x-2 rounded-2xl border p-3 px-6"
                          >
                            <div className="flex items-center gap-4">
                              <img
                                src={"/selection/fileicon.svg"}
                                className="h-8 w-8"
                                alt="file"
                              />
                              <div className="flex flex-col">
                                <span className="font-semibold">
                                  {fileName || "Unknown"}
                                </span>
                              </div>
                            </div>
                            <svg
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="2"
                                y="2.5"
                                width="20"
                                height="20"
                                rx="5"
                                stroke="#2B3F6C"
                                strokeWidth="1.5"
                              />
                              <path
                                d="M9.5 12L11.5 14L15.5 10"
                                stroke="#2B3F6C"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          // <span
                          //     key={index}
                          //     className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs"
                          // >
                          //     {fileName || 'Unknown'}
                          // </span>
                        );
                      })}
                    </div>
                  ) : (
                    <span className="text-sm text-gray-500">
                      No files available
                    </span>
                  )}
                </div>
              </div>
            ))}
            {/* {policies.map(([key, value]) => (
                            <div key={key} className="flex flex-col gap-4  px-5 rounded-[20px]">
                                <div className='flex flex-col gap-2 text-gray-700'>
                                    <div className='text-base font-normal'>{key.charAt(0).toUpperCase() + key.slice(1)}:</div>
                                    <div className='font-bold text-sm '>
                                        <FileDisplay file={value} />

                                    </div>
                                </div>
                            </div>
                        ))} */}
          </div>
        )}
        {selected === 3 && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {photo_video.map(([key, value]) => (
              <div
                key={key}
                className="flex flex-col gap-4 rounded-[20px] border-2 p-5"
              >
                <div className="flex flex-col gap-2 text-gray-700">
                  <div className="text-base font-normal">
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                  </div>
                  <div className="flex w-[80%] flex-wrap gap-2">
                    {Array.isArray(value) &&
                      value.map((item, index) => (
                        <span
                          className="rounded-lg bg-[#E8F1FD] p-2 text-xs font-medium text-[#448DF2]"
                          key={index}
                        >
                          {item}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardDetails;
