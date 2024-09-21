"use client";

import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Page3 from "./components/page3";
import Page4 from "./components/page4";
import Page5 from "./components/page5";
import React, { useState } from "react";
import Image from "next/image";
import { pavtypes, pavFormState, BasicDetails } from "@/types/types";
import { addPhotographer } from "@/services/vendors/photographer";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Agreement from "../Agreement/page";
import Plans from "../Plans/page";
import Registration_Completed from "../Registration-Completed/page";

const Page = () => {
  // function updateFormState(newState: Partial<pav>) {
  //   setFormState((prev) => ({ ...prev, ...newState }));
  // }

  //states for page1

  const [name, setFullName] = useState("");
  const [description, setDescription] = useState<string>("");
  const [eventsize, setEventsize] = useState<number>(0);
  const [events, setEvents] = useState<string[]>([]);


  //states for page2

  const [Photosstyles, setPhotosStyles] = useState<string[]>([]);
  const [Photosequipments, setPhotosequipments] = useState<string[]>([]);
  const [PhotosAddons, setPhotosAddons] = useState<string[]>([]);
  const [Photosfinaldeliverymethods, setPhotosFinaldeliverymethods] = useState<string[]>([]);


  //states for page3 
  const [Videosstyles, setVideosStyles] = useState<string[]>([]);
  const [Videosequipments, setVideossequipments] = useState<string[]>([]);
  const [VideoAddons, setVideoAddons] = useState<string[]>([]);
  const [Videofinaldeliverymethods, setVideoFinaldeliverymethods] = useState<string[]>([]);


  //states for page4
  const [Durationoffinaldelivery, setDurationoffinaldelivery] = useState<string>("");
  const [Packagetype, setPackagetype] = useState<string>("");
  const [availablefordestinationevents, setavailablefordestinationevents] = useState<boolean>(false);
  const [postproductionservices, setpostproductionservices] = useState<boolean>(false);
  
  const [proposalsToClients, setProposalsToClients] = useState<boolean>(false);
  const [freeInitialConsultation, setFreeInitialConsultation] =
    useState<boolean>(false);
  const [advanceSetup, setAdvanceSetup] = useState<boolean>(false);
  const [setupsInstallations, setSetupsInstallations] =
    useState<boolean>(false);
  const [bookingDeposit, setBookingDeposit] = useState<boolean>(false);


  //states for page5
  const [hourlyPackages, setHourlyPackages] = useState<Package[]>([
    { type: "", priceRange: [0, 0] },
  ]);
  const [dailyPackages, setDailyPackages] = useState<Package[]>([
    { type: "", priceRange: [0, 0] },
  ]);

  const [currentPage, setCurrentPage] = useState(1);

  // states for page5
  interface Package {
    type: string;
    priceRange: [number, number];
  }

  // State for packages

  // Function to handle package change
  const handlePackageChange = (
    setPackages: React.Dispatch<React.SetStateAction<Package[]>>,
    index: number,
    field: "type" | "priceRange",
    value: string | [number, number],
  ) => {
    setPackages((prevPackages) => {
      const newPackages = [...prevPackages];
      if (field === "type") {
        newPackages[index] = { ...newPackages[index], type: value as string };
      } else {
        newPackages[index] = {
          ...newPackages[index],
          priceRange: value as [number, number],
        };
      }
      return newPackages;
    });
  };

  // Function to add a new package
  const addPackage = (
    setPackages: React.Dispatch<React.SetStateAction<Package[]>>,
  ) => {
    setPackages((prevPackages) => [
      ...prevPackages,
      { type: "", priceRange: [0, 0] },
    ]);
  };

  const handleContinue = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    formData.append("venId", "SomeVenID");

    //page 1 
    formData.append("name", JSON.stringify(name));
    formData.append("description", JSON.stringify(description));
    formData.append("events", JSON.stringify(events));
    formData.append("eventsize", JSON.stringify(eventsize));

    // page 2
    formData.append("Photosstyles", JSON.stringify(Photosstyles));
    formData.append("Photosequipments", JSON.stringify(Photosequipments));
    formData.append("PhotosAddones", JSON.stringify(PhotosAddons));
    formData.append("Photosfinaldeliverymethods", JSON.stringify(Photosfinaldeliverymethods));

    // page 3
    formData.append("Photosstyles", JSON.stringify(Photosstyles));
    formData.append("equipments", JSON.stringify(Photosequipments));
    formData.append("VideoAddones", JSON.stringify(VideoAddons));
    formData.append("Videofinaldeliverymethods", JSON.stringify(Videofinaldeliverymethods));

    // page 4

    formData.append(
      "freeInitialConsultation",
      JSON.stringify(freeInitialConsultation),
    );
    formData.append("advanceSetup", JSON.stringify(advanceSetup));

    formData.append("setupsInstallations", JSON.stringify(setupsInstallations));
    formData.append("bookingDeposit", JSON.stringify(bookingDeposit));
    formData.append("hourlyPackages", JSON.stringify(hourlyPackages));
    formData.append("dailyPackages", JSON.stringify(dailyPackages));




    try {
      const res = await addPhotographer(formData);
      console.log("Form data Submitted");
    } catch (error) {
      console.error("Error adding photographer:", error);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <Page1
            fullName={name}
            setFullName={setFullName}
            description={description}
            setDescription={setDescription}
            eventsize={eventsize}
            setEventsize={setEventsize}
            setEvent={setEvents}
            events={events}
            handleContinue={handleContinue}
          />
        );
      case 2:
        return (
          <Page2
            Selectedstyles={Photosstyles}
            setStyles={setPhotosStyles}
            Selectedequipments={Photosequipments}
            setSelectedEquipments={setPhotosAddons}
            handleContinue={handleContinue}
            setCurrentPage={setCurrentPage}
            Addons={PhotosAddons}
            setAddons={setPhotosAddons}
            finaldeliverymethods={Photosfinaldeliverymethods}
            setFinaldeliverymethods={setPhotosFinaldeliverymethods}
          />
        );
      case 3:
        return (
          <Page3
            handleContinue={handleContinue}
            setCurrentPage={setCurrentPage}
            Selectedstyles={Videosstyles}
            setStyles={setVideosStyles}
            Selectedequipments={Videosequipments}
            setSelectedEquipments={setVideoAddons}

            Addons={VideoAddons}
            setAddons={setVideoAddons}
            finaldeliverymethods={Videofinaldeliverymethods}
            setFinaldeliverymethods={setVideoFinaldeliverymethods}
          />
        );
      case 4:
        return (
          <Page4
            Durationoffinaldelivery={Durationoffinaldelivery}
            availablefordestinationevents={availablefordestinationevents}
            Packagetype={Packagetype}
            postproductionservices={postproductionservices}
            setpostproductionservices={setpostproductionservices}
            setDurationoffinaldelivery={setDurationoffinaldelivery}
            setavailablefordestinationevents={setavailablefordestinationevents}
            setPackagetype={setPackagetype}
            proposalsToClients={proposalsToClients}
            setProposalsToClients={setProposalsToClients}
            freeInitialConsultation={freeInitialConsultation}
            setFreeInitialConsultation={setFreeInitialConsultation}
            advanceSetup={advanceSetup}
            setAdvanceSetup={setAdvanceSetup}
            setupsInstallations={setupsInstallations}
            setSetupsInstallations={setSetupsInstallations}
            bookingDeposit={bookingDeposit}
            setBookingDeposit={setBookingDeposit}
            handleContinue={handleContinue}
            setCurrentPage={setCurrentPage}
          />
        );
      case 5:
        return (
          <Page5
            hourlyPackages={hourlyPackages}
            setHourlyPackages={setHourlyPackages}
            dailyPackages={dailyPackages}
            setDailyPackages={setDailyPackages}
            handlePackageChange={handlePackageChange}
            addPackage={addPackage}
            handleContinue={handleContinue}
          />
        )
      case 6:
        return (
          <>
            <Agreement setCurrentPage={setCurrentPage} />
          </>
        )
      case 7:
        return (
          <>
            <Plans handleformSubmit={handleSubmit} setCurrentPage={setCurrentPage} />
          </>
        )
      case 8:
        return (
          <>
            <Registration_Completed />
          </>
        )
      default:
        return (
          <>
            <center><h2>Loading....</h2></center>
          </>
        )
    }
  };

  return (
    <div className={`m-0 flex w-full flex-col overflow-x-hidden lg:flex-row ${currentPage <= 5 ? 'lg:h-[calc(100vh-4.2rem)]' : ''}`}>
      {
        currentPage <= 5 &&
        (
          <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[30%] lg:max-w-[30%]">
            <div className="flex w-[100%] flex-col justify-center">
              <div className="flex flex-col gap-1 px-3 lg:mt-[2rem]">
                <span className="text-lg font-semibold">
                  Step {currentPage} of 6
                </span>
                <div className="flex gap-4">
                  <button
                    className={`flex h-2 w-10 items-center justify-center rounded-full ${currentPage >= 1 ? "bg-[#2E3192] text-white" : "bg-gray-300"}`}
                    onClick={() => setCurrentPage(1)}
                  ></button>

                  <button
                    className={`flex h-2 w-10 items-center justify-center rounded-full ${currentPage >= 2 ? "bg-[#2E3192] text-white" : "bg-gray-300"}`}
                    onClick={() => setCurrentPage(2)}
                  ></button>

                  <button
                    className={`flex h-2 w-10 items-center justify-center rounded-full ${currentPage >= 3 ? "bg-[#2E3192] text-white" : "bg-gray-300"}`}
                    onClick={() => setCurrentPage(3)}
                  ></button>

                  <button
                    className={`flex h-2 w-10 items-center justify-center rounded-full ${currentPage >= 4 ? "bg-[#2E3192] text-white" : "bg-gray-300"}`}
                    onClick={() => setCurrentPage(4)}
                  ></button>

                  <button
                    className={`flex h-2 w-10 items-center justify-center rounded-full ${currentPage >= 5 ? "bg-[#2E3192] text-white" : "bg-gray-300"}`}
                    onClick={() => setCurrentPage(5)}
                  ></button>

                  <button
                    className={`flex h-2 w-10 items-center justify-center rounded-full ${currentPage >= 6 ? "bg-[#2E3192] text-white" : "bg-gray-300"}`}
                    onClick={() => setCurrentPage(6)}
                  ></button>
                </div>
              </div>
            </div>
            <div className="flex h-[40%] flex-col items-start justify-center gap-9 px-3 md:px-3">
              <h1 className="text-[8vw] font-bold md:text-[3vw]">
                {currentPage === 1 && "Fill out  Basic details "}
                {currentPage === 2 && "Fill the Furniture and Decor Rentals details"}
                {currentPage === 3 && "Fill the Furniture and Decor Rentals details"}
                {currentPage === 4 && "Tell us about the Booking and Pricing"}
                {currentPage === 5 && "Fill out your pricing and policy"}
                {currentPage === 6 && "Preview details"}
              </h1>
              <p className="text-black xs:text-sm md:w-[90%]">
                {currentPage === 1 &&
                  "Fill basic details and select the types of events you cover"}
                {currentPage === 2 &&
                  "Please provide the event details of the catering serivce offered by your company."}
                {currentPage === 3 &&
                  "Please provide the event details of the catering service offered by your company."}
                {currentPage === 4 &&
                  "Fill out the pricising details and get onboard within 12hrs of verification."}
                {currentPage === 5 &&
                  "Please provide the details of the venue offered by your company."}
                {currentPage === 6 &&
                  "Please recheck the information provided by you."}
              </p>
            </div>
            <div className="relative h-[10rem] lg:w-full">
              <Image
                src={"/tajmahal.png"}
                alt=""
                width={400}
                height={200}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        )
      }
      <div className="flex min-w-[70%] flex-col items-center justify-center bg-[#F7F6F9] p-6 md:p-[1rem]">
        {renderPage()}
      </div>
    </div>
  );
};

export default Page;
