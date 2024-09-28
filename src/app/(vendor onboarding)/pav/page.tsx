"use client";

import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Page3 from "./components/page3";
import Page4 from "./components/page4";
import Page5 from "./components/page5";
import Preview from "./components/page6";
import React, { useState } from "react";
import Image from "next/image";
import { addPhotographer } from "@/services/vendors/photographer";
import "react-toastify/dist/ReactToastify.css";
import Agreement from "../Agreement/Agreement";
import Plans from "../Plans/Plans";
import Registration_Completed from "../Registration-Completed/page";

const Page = () => {
  //states for page1

  const [name, setFullName] = useState("");
  const [description, setDescription] = useState<string>("");
  const [eventsize, setEventsize] = useState<number>(0);
  const [events, setEvents] = useState<string[]>([]);

  //states for page2
  const [togglesection, settogglesection] = useState(true);

  const [Photosstyles, setPhotosStyles] = useState<string[]>([]);
  const [Photosequipments, setPhotosequipments] = useState<string[]>([]);
  const [PhotosAddons, setPhotosAddons] = useState<string[]>([]);
  const [Photosfinaldeliverymethods, setPhotosFinaldeliverymethods] = useState<
    string[]
  >([]);
  const [Videosstyles, setVideosStyles] = useState<string[]>([]);
  const [Videosequipments, setVideossequipments] = useState<string[]>([]);
  const [VideoAddons, setVideoAddons] = useState<string[]>([]);
  const [Videofinaldeliverymethods, setVideoFinaldeliverymethods] = useState<
    string[]
  >([]);

  //states for page4
  const [Durationoffinaldelivery, setDurationoffinaldelivery] =
    useState<string>("");
  const [Packagetype, setPackagetype] = useState<string>("");
  const [availablefordestinationevents, setavailablefordestinationevents] =
    useState<boolean>(false);
  const [postproductionservices, setpostproductionservices] =
    useState<boolean>(false);

  const [proposalsToClients, setProposalsToClients] = useState<boolean>(false);
  const [freeInitialConsultation, setFreeInitialConsultation] =
    useState<boolean>(false);
  const [advanceSetup, setAdvanceSetup] = useState<boolean>(false);
  const [setupsInstallations, setSetupsInstallations] =
    useState<boolean>(false);
  const [bookingDeposit, setBookingDeposit] = useState<boolean>(false);

  //states for page5
  const [termsandconditions, settermsandconditions] = useState<
    string | File | File[]
  >([]);
  const [policy, setpolicy] = useState<string | File | File[]>([]);
  const [websiteurl, setwebsiteurl] = useState("");
  const [intstagramurl, setintstagramurl] = useState("");
  const [Recongnition_awards, setRecongnition_awards] = useState("");
  const [advbookingperiod, setadvbookingperiod] = useState("");
  const [clientTestimonials, setclientTestimonials] = useState("");
  const [
    writtenthemeproposalafterconsultaion,
    setwrittenthemeproposalafterconsultaion,
  ] = useState<boolean>(false);
  const [
    freerevisionforinitialthemeproposal,
    setrevisionforinitialthemeproposal,
  ] = useState<boolean>(false);

  //6
  const [photos, setPhotos] = useState<string | File | File[]>([]);
  const [videos, setVideos] = useState<string | File | File[]>([]);
  //

  const [currentPage, setCurrentPage] = useState(1);

  // states for page5
  interface Package {
    type: string;
    priceRange: [number, number];
  }

  const handleContinue = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    formData.append("venId", "SomeVenID");

    // page 1
    formData.append("name", name);
    formData.append("description", description);
    formData.append("events", JSON.stringify(events));
    formData.append("eventsize", JSON.stringify(eventsize));

    // page 2
    formData.append("Photosstyles", JSON.stringify(Photosstyles));
    formData.append("Photosequipments", JSON.stringify(Photosequipments));
    formData.append("PhotosAddones", JSON.stringify(PhotosAddons));
    formData.append(
      "Photosfinaldeliverymethods",
      JSON.stringify(Photosfinaldeliverymethods),
    );

    // page 3
    formData.append("Videosstyles", JSON.stringify(Videosstyles));
    formData.append("Videosequipments", JSON.stringify(Videosequipments));
    formData.append("VideoAddones", JSON.stringify(VideoAddons));
    formData.append(
      "Videofinaldeliverymethods",
      JSON.stringify(Videofinaldeliverymethods),
    );

    // page 4
    formData.append("Durationoffinaldelivery", Durationoffinaldelivery);
    formData.append("Packagetype", Packagetype);
    formData.append(
      "availablefordestinationevents",
      JSON.stringify(availablefordestinationevents),
    );
    formData.append(
      "postproductionservices",
      JSON.stringify(postproductionservices),
    );

    formData.append(
      "freeInitialConsultation",
      JSON.stringify(freeInitialConsultation),
    );
    formData.append("advanceSetup", JSON.stringify(advanceSetup));
    formData.append("setupsInstallations", JSON.stringify(setupsInstallations));
    formData.append("bookingDeposit", JSON.stringify(bookingDeposit));

    // page 5
    formData.append(
      "termsandconditions",
      termsandconditions instanceof File
        ? termsandconditions
        : JSON.stringify(termsandconditions),
    );
    formData.append(
      "policy",
      policy instanceof File ? policy : JSON.stringify(policy),
    );
    formData.append("websiteurl", websiteurl);
    formData.append("intstagramurl", intstagramurl);
    formData.append("Recongnition_awards", Recongnition_awards);
    formData.append("advbookingperiod", advbookingperiod);
    formData.append("clientTestimonials", clientTestimonials);
    formData.append(
      "writtenthemeproposalafterconsultaion",
      JSON.stringify(writtenthemeproposalafterconsultaion),
    );
    formData.append(
      "freerevisionforinitialthemeproposal",
      JSON.stringify(freerevisionforinitialthemeproposal),
    );

    // page 6
    if (photos instanceof File) {
      formData.append("photos", photos);
    } else if (Array.isArray(photos)) {
      photos.forEach((photo, index) =>
        formData.append(`photos[${index}]`, photo),
      );
    } else {
      formData.append("photos", JSON.stringify(photos));
    }

    if (videos instanceof File) {
      formData.append("videos", videos);
    } else if (Array.isArray(videos)) {
      videos.forEach((video, index) =>
        formData.append(`videos[${index}]`, video),
      );
    } else {
      formData.append("videos", JSON.stringify(videos));
    }

    try {
      const res = await addPhotographer(formData);
      console.log("Form data Submitted Succesfully");
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
            togglesection={togglesection}
            settogglesection={settogglesection}
            photoSelectedstyles={Photosstyles}
            setphotoSelectedstyles={setPhotosStyles}
            photoequipments={Photosequipments}
            setphotoEquipments={setPhotosequipments}
            photoAddons={PhotosAddons}
            setphotoAddons={setPhotosAddons}
            photofinaldeliverymethods={Photosfinaldeliverymethods}
            setphotoFinaldeliverymethods={setPhotosFinaldeliverymethods}
            videoSelectedstyles={Videosstyles}
            setvideoStyles={setVideosStyles}
            Selectedvideoequipments={Videosequipments}
            setvideoSelectedEquipments={setVideossequipments}
            videoAddons={VideoAddons}
            setvideoAddons={setVideoAddons}
            videofinaldeliverymethods={Videofinaldeliverymethods}
            setvideoFinaldeliverymethods={setVideoFinaldeliverymethods}
            handleContinue={handleContinue}
            setCurrentPage={setCurrentPage}
          />
        );
      case 3:
        return (
          <Page3
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
      case 4:
        return (
          <Page4
            setCurrentPage={setCurrentPage}
            photos={photos}
            videos={videos}
            setPhotos={setPhotos}
            setVideos={setVideos}
            websiteurl={websiteurl}
            setwebsiteurl={setwebsiteurl}
            intstagramurl={intstagramurl}
            setintstagramurl={setintstagramurl}
            Recongnition_awards={Recongnition_awards}
            setRecongnition_awards={setRecongnition_awards}
            advbookingperiod={advbookingperiod}
            setadvbookingperiod={setadvbookingperiod}
            clientTestimonials={clientTestimonials}
            setclientTestimonials={setclientTestimonials}
            writtenthemeproposalafterconsultaion={
              writtenthemeproposalafterconsultaion
            }
            setwrittenthemeproposalafterconsultaion={
              setwrittenthemeproposalafterconsultaion
            }
            freerevisionforinitialthemeproposal={
              freerevisionforinitialthemeproposal
            }
            setrevisionforinitialthemeproposal={
              setrevisionforinitialthemeproposal
            }
            handleContinue={handleContinue}
          />
        );
      case 5:
        return (
          <Page5
            setCurrentPage={setCurrentPage}
            termsandconditions={termsandconditions}
            settermsandconditions={settermsandconditions}
            setpolicy={setpolicy}
            policy={policy}
            handleContinue={handleContinue}
          />
        );
      case 6:
        return (
          <Preview
            setCurrentPage={setCurrentPage}
            handleContinue={handleContinue}
            fullName={name}
            setFullName={setFullName}
            description={description}
            setDescription={setDescription}
            eventsize={eventsize}
            setEventsize={setEventsize}
            setEvent={setEvents}
            events={events}
            photoSelectedstyles={Photosstyles}
            setphotoSelectedstyles={setPhotosStyles}
            photoequipments={Photosequipments}
            setphotoEquipments={setPhotosequipments}
            photoAddons={PhotosAddons}
            setphotoAddons={setPhotosAddons}
            photofinaldeliverymethods={Photosfinaldeliverymethods}
            setphotoFinaldeliverymethods={setPhotosFinaldeliverymethods}
            videoSelectedstyles={Videosstyles}
            setvideoStyles={setVideosStyles}
            Selectedvideoequipments={Videosequipments}
            setvideoSelectedEquipments={setVideossequipments}
            videoAddons={VideoAddons}
            setvideoAddons={setVideoAddons}
            videofinaldeliverymethods={Videofinaldeliverymethods}
            setvideoFinaldeliverymethods={setVideoFinaldeliverymethods}
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
            photos={photos}
            videos={videos}
            setPhotos={setPhotos}
            setVideos={setVideos}
            websiteurl={websiteurl}
            setwebsiteurl={setwebsiteurl}
            intstagramurl={intstagramurl}
            setintstagramurl={setintstagramurl}
            Recongnition_awards={Recongnition_awards}
            setRecongnition_awards={setRecongnition_awards}
            advbookingperiod={advbookingperiod}
            setadvbookingperiod={setadvbookingperiod}
            clientTestimonials={clientTestimonials}
            setclientTestimonials={setclientTestimonials}
            writtenthemeproposalafterconsultaion={
              writtenthemeproposalafterconsultaion
            }
            setwrittenthemeproposalafterconsultaion={
              setwrittenthemeproposalafterconsultaion
            }
            freerevisionforinitialthemeproposal={
              freerevisionforinitialthemeproposal
            }
            setrevisionforinitialthemeproposal={
              setrevisionforinitialthemeproposal
            }
            termsandconditions={termsandconditions}
            settermsandconditions={settermsandconditions}
            setpolicy={setpolicy}
            policy={policy}
          />
        );
      case 7:
        return (
          <>
            <Agreement setCurrentPage={setCurrentPage} />
          </>
        );
      case 8:
        return (
          <>
            <Plans
              handleformSubmit={handleSubmit}
              setCurrentPage={setCurrentPage}
            />
          </>
        );
      case 9:
        return (
          <>
            <Registration_Completed />
          </>
        );
      default:
        return (
          <>
            <center>
              <h2>Loading....</h2>
            </center>
          </>
        );
    }
  };

  return (
    <div
      className={`m-0 flex w-full flex-col overflow-x-hidden lg:flex-row ${currentPage <= 6 ? "lg:h-[calc(100vh-4.2rem)]" : ""} lg:flex-row`}
    >
      {currentPage <= 6 && (
        <div className="flex flex-col items-start justify-between bg-[#FFFFFF] px-8 xs:gap-7 xs:pt-4 md:min-w-[35%] lg:max-w-[35%]">
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
          <div className="flex h-[40%] flex-col items-start justify-center gap-5 px-3 pt-3 md:px-3">
            <h1 className="text-[8vw] font-bold md:text-[3vw]">
              {currentPage === 1 && "Fill out Basic details"}
              {currentPage === 2 &&
                (togglesection
                  ? "Tell us about the photography service"
                  : "Tell us about the videography service")}
              {currentPage === 3 && "Tell us about the Booking and Pricing"}
              {currentPage === 4 && "Fill the additional details"}
              {currentPage === 5 && "Fill out Some mandatory details"}
              {currentPage === 6 && "Preview details"}
            </h1>
            <p className="font-Helvetica font-normal text-[#797878] xs:text-xl">
              {currentPage === 1 &&
                "Fill out Basic details and Select the types of events you cover "}
              {currentPage === 2 &&
                (togglesection
                  ? "Please provide the details of the Photography service offered by your company."
                  : "Please provide the details of the Videography service offered by your company.")}
              {currentPage === 3 &&
                "Fill out the precising details and get onboard within 12hrs of verification."}
              {currentPage === 4 &&
                "Fill out the additional details of the services offered by your company."}
              {currentPage === 5 &&
                "Provide the details By Url or uploading pdf."}
              {currentPage === 6 &&
                "Please recheck the information provided by you. "}
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
      )}
      <div className="flex min-w-[65%] flex-col items-center justify-center bg-[#F7F6F9] p-6 md:p-[1rem]">
        {renderPage()}
      </div>
    </div>
  );
};

export default Page;
