import FileDisplay from "@/app/(vendor onboarding)/caterer/(components)/File";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface BusinessDetails {
  businessName: string;
  category: string;
  gstin: string;
  teamsize: string;
  annualrevenue: string;
  businessAddress: string;
  cities: string[];
  pinCode: number;
  years: string;
}
interface User {
  name: string;
  mobile: string;
  businessDetails: BusinessDetails;
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
  socialLinks: {
    instagramURL: string;
    websiteURL: string;
  };
}

interface IntroProps {
  user: User | null;
  venueDetails: VenueDetails;
}
interface FileInfo {
  fileName: string;
  fileSize: number;
}

interface S3UrlState {
  url: string;
  result: FileInfo | null;
}

const DashboardDetails: React.FC<IntroProps> = ({ user, venueDetails }) => {
  const [selected, setSelected] = useState<number>(0);
  const [s3UrlsState, setS3UrlsState] = useState<S3UrlState[]>([]);

  const tabs = [
    "Basic Details  ",
    "Features Details",
    "Policies",
    "Additional Details",
  ];

  if (!user || !user.businessDetails) {
    return <p>Loading business details...</p>;
  }

  const booleanFields = Object.entries(venueDetails).filter(
    ([key, value]) => typeof value === "boolean",
  );

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

  const photos = Object.entries(venueDetails)
    .filter(([key]) => ["photos"].includes(key)) // Filter for "photos"
    .flatMap(
      ([, value]) =>
        Array.isArray(value) &&
        value.every((item: string) => item.startsWith("http")) // Ensure it's an array of URLs
          ? value
          : [], // If not a URL array, return an empty array
    );

  const videos = Object.entries(venueDetails)
    .filter(([key]) => ["videos"].includes(key))
    .flatMap(([, value]) =>
      Array.isArray(value) &&
      value.every((item: string) => item.startsWith("http"))
        ? value
        : [],
    );

  const fetchFileInfo = async (url: string): Promise<FileInfo> => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/files/get-file-info`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      },
    );

    if (!response.ok) {
      throw new Error(`Error fetching data for ${url}: ${response.statusText}`);
    }

    return await response.json();
  };

  const fetchAllPoliciesInfo = async (
    urls: string[],
    setS3Urls: React.Dispatch<React.SetStateAction<S3UrlState[]>>,
  ) => {
    try {
      const results = await Promise.all(urls.map(fetchFileInfo));

      const updatedUrlsState: S3UrlState[] = urls.map((url, index) => ({
        url,
        result: results[index] || null,
      }));

      setS3Urls(updatedUrlsState);
    } catch (error) {
      console.error("Error fetching policy info:", error);
    }
  };

  useEffect(() => {
    if (policies.length > 0) {
      fetchAllPoliciesInfo(
        policies.flatMap(([, value]) => value),
        setS3UrlsState,
      );
    }
  }, []);

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
                  <div className="flex w-[90%] flex-wrap gap-4">
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
            {Array.isArray(s3UrlsState) && s3UrlsState.length > 0 ? (
              s3UrlsState.map(({ url, result }, index) => {
                // Extract file name from the URL

                return (
                  <div
                    key={index}
                    className="flex flex-col gap-4 rounded-[20px] px-5"
                  >
                    <div className="flex flex-col gap-2">
                      <div className="text-sm font-normal">
                        {policies[index][0]}
                      </div>
                      {result ? (
                        <div className="flex flex-wrap gap-2 text-sm font-bold">
                          <div className="flex w-full items-center justify-between gap-10 space-x-2 rounded-2xl border p-3 px-6">
                            <div className="flex items-center gap-4">
                              <img
                                src={"/selection/fileicon.svg"}
                                className="h-8 w-8"
                                alt="file"
                              />
                              <div className="flex flex-col gap-1">
                                <span className="text-sm font-normal">
                                  {result.fileName || "Unknown"}
                                </span>
                                <span className="text-sm font-normal">
                                  {result.fileSize
                                    ? `${(result.fileSize / 1000000).toFixed(1)} MB`
                                    : "Unknown"}
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
                        </div>
                      ) : (
                        <span className="text-sm text-gray-500">
                          No files available
                        </span>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <span className="text-sm text-gray-500">No files available</span>
            )}
          </div>
        )}
        {selected === 3 && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-4 rounded-[20px]">
              <div className="text-base font-normal">Photos</div>

              {Array.isArray(photos) && photos.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {photos.map((url, index) => (
                    <div
                      key={index}
                      className="aspect-square w-32 overflow-hidden rounded-xl border-2"
                    >
                      <Image
                        width={128}
                        height={128}
                        src={url}
                        alt="photo"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : venueDetails.photos && venueDetails.photos.length > 0 ? (
                <span className="text-sm text-gray-500">
                  {venueDetails.photos}
                </span>
              ) : (
                <span className="text-sm text-gray-500">No file selected</span>
              )}
            </div>

            <div className="flex flex-col gap-4 rounded-[20px] text-gray-700">
              <div className="text-base font-normal">Videos</div>

              {Array.isArray(videos) && videos.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {videos.map((url, index) => (
                    <div
                      key={index}
                      className="aspect-square w-32 overflow-hidden rounded-xl border-2 hover:cursor-pointer"
                    >
                      <video
                        width="128"
                        height="128"
                        muted // Mute the video so it plays without sound
                        className="h-full w-full object-cover"
                        onMouseEnter={(e) =>
                          (e.currentTarget as HTMLVideoElement).play()
                        } // Type cast to HTMLVideoElement
                        onMouseLeave={(e) =>
                          (e.currentTarget as HTMLVideoElement).pause()
                        }
                      >
                        <source src={url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ))}
                </div>
              ) : venueDetails.videos && venueDetails.videos.length > 0 ? (
                <span className="text-sm text-gray-500">
                  {venueDetails.videos}
                </span>
              ) : (
                <span className="text-sm text-gray-500">No file selected</span>
              )}
            </div>

            <div className="flex flex-col gap-4 rounded-[20px] border-2 p-5">
              <div className="flex flex-col gap-2 text-gray-700">
                <div className="text-base font-normal">
                  Awards / Recognization
                </div>
                <div className="text-sm font-bold">{venueDetails.awards}</div>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-[20px] border-2 p-5">
              <div className="flex flex-col gap-2 text-gray-700">
                <div className="text-base font-normal">Client Testimonials</div>
                <div className="text-sm font-bold">
                  {venueDetails.clientTestimonials}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-[20px] border-2 p-5">
              <div className="flex flex-col gap-2 text-gray-700">
                <div className="text-base font-normal">Instagram URL</div>
                <div className="text-sm font-bold">
                  {venueDetails.socialLinks.instagramURL}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-[20px] border-2 p-5">
              <div className="flex flex-col gap-2 text-gray-700">
                <div className="text-base font-normal">Website URL</div>
                <div className="text-sm font-bold">
                  {venueDetails.socialLinks.websiteURL}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 rounded-[20px] border-2 p-5">
              <div className="flex flex-col gap-2 text-gray-700">
                <div className="text-base font-normal">
                  Advance Booking Period
                </div>
                <div className="text-sm font-bold">
                  {venueDetails.advanceBookingPeriod}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardDetails;
