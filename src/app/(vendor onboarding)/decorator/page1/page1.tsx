"use client";

import React, { useEffect } from "react";
import Appetizers from "../../(components)/Appetizers";
import Dropdown from "../../(components)/Dropdown";
import { useSelector, useDispatch } from "react-redux";
import jwt from "jsonwebtoken";
import { RootState, AppDispatch } from "../../../../redux/store";
import { fetchDecoratorData, saveDecoratorDetails, setcurrentPage2 } from '../../../../redux/decoratorSlice';


const _typesOfEvent = [
  "Anniversary Celebration",
  "Birthday Party",
  "Corporate Event",
  "Cultural Events",
  "Others",
  "Seasonal Parties",
  "Wedding Events",
];

const _weddingEvents = [
  "After-Party",
  "Bachelorette Party",
  "Bridal Luncheon",
  "Engagement Party",
  "Haldi",
  "Mandap decor",
  "Mehndi",
  "Others",
  "Post-Wedding Reception",
  "Ring Ceremony",
  "Sangeet",
  "Stage decor",
  "Wedding Shower",
  "Welcome Party",
];

const _corporateEvents = [
  "Art Exhibitions",
  "Award Ceremonies",
  "Club Meetings",
  "Launch Party",
  "Networking Events",
  "Others",
  "Product Launch Webinars",
  "Trade Shows and Expos",
];

const _seasonalEvents = [
  "Anniversary",
  "Annual Function",
  "Birthday Party",
  "Convocation",
  "Farewell",
  "Freshers",
  "Halloween",
  "New Year",
  "Others",
  "Valentine",
];

const _culturalEvents = [
  "Christmas",
  "Diwali",
  "Durga Puja",
  "Eid-ul-Fitr",
  "Ganesh Chaturthi",
  "Holi",
  "Kala ghoda",
  "Lohri",
  "Navratri",
  "Onam",
  "Others",
  "Pongal",
];

interface FormState {
  businessName: string;
  eventsize: string;
  duration: string;
  typeOfevents: string[];
  weddingEvents: string[];
  corporateEvents: string[];
  seasonalEvents: string[];
  culturalEvents: string[];

}

const teamsizelist = ["1-5", "6-15", "16-30", "31-50", "51+"];

const durationlist = ["Less Then 2 hours", "2-5 Hours", "More Then 5 hours"];

interface Page1Props {
  formState: {
    businessName: string;
    eventsize: string;
    duration: string;
  };

  updateFormState: (newState: Partial<FormState>) => void;
  typeOfevents: string[];
  setTypesOfEvents: React.Dispatch<React.SetStateAction<string[]>>;
  weddingEvents: string[];
  setWeddingEvents: React.Dispatch<React.SetStateAction<string[]>>;
  corporateEvents: string[];
  setCorporateEvents: React.Dispatch<React.SetStateAction<string[]>>;
  seasonalEvents: string[];
  setSeasonalEvents: React.Dispatch<React.SetStateAction<string[]>>;
  culturalEvents: string[];
  setCulturalEvents: React.Dispatch<React.SetStateAction<string[]>>;
  handleContinue: () => void;
}

const Page1: React.FC<Page1Props> = ({
  formState,
  typeOfevents,
  setTypesOfEvents,
  weddingEvents,
  setWeddingEvents,
  corporateEvents,
  setCorporateEvents,
  seasonalEvents,
  setSeasonalEvents,
  culturalEvents,
  setCulturalEvents,
  updateFormState,
  handleContinue,
}) => {

  const dispatch = useDispatch<AppDispatch>();
  const { formData, loading, error } = useSelector((state: RootState) => state.decorator);

  function getVendorId2(): string | null {
    if (typeof window === "undefined") {
      // This code is running on the server, so skip localStorage access
      return null;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token not found");
      return null;
    }

    try {
      const decodedToken = jwt.decode(token) as {
        userId?: string;
        email?: string;
      };
      if (!decodedToken || !decodedToken.userId) {
        console.error("Invalid token or token does not contain userId.");
        return null;
      }
      return decodedToken.userId;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  }

  const userId = getVendorId2() || "";

  useEffect(() => {
    // Fetch decorator data when component mounts
    if (userId) {
      dispatch(fetchDecoratorData(userId));
    }
  }, [dispatch]);

  useEffect(() => {
    if (formData) {
      let updated = false
      // Update form state if specific fields in formState are empty
      if (!formState.businessName) {
        updateFormState({ businessName: formData.businessName || "" });
      }
      if (!formState.eventsize) {
        updateFormState({ eventsize: formData.teamsizelist });
      }
      if (!formState.duration) {
        updateFormState({ duration: formData.durationlist });
      }
      // Update event lists if they are empty
      if (!typeOfevents.length) {
        setTypesOfEvents(formData.typeOfevents || []);
      }
      if (!weddingEvents.length) {
        setWeddingEvents(formData.weddingEvents || []);
      }
      if (!corporateEvents.length) {
        setCorporateEvents(formData.corporateEvents || []);
      }
      if (!seasonalEvents.length) {
        setSeasonalEvents(formData.seasonalEvents || []);
      }
      if (!culturalEvents.length) {
        setCulturalEvents(formData.culturalEvents || []);
      }
      
      if (!updated) return;
    }
  }, [formData ]);


  const handleInputChange2 = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;

    // Call the original handleInputChange functionality
    handleInputChange(e);

    // Update the form data in Redux
    dispatch(saveDecoratorDetails({ userId, data: { [name]: value } }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    updateFormState({ [name]: value });
  };

  const onContinue = () => {
    const userId = getVendorId2() || "";
    const decoratorDetails = {
      userId,
      businessName: formState.businessName,
      teamsizelist: formState.eventsize,
      durationlist: formState.duration,
      typeOfevents,
      weddingEvents,
      corporateEvents,
      seasonalEvents,
      culturalEvents,
    }

    dispatch(saveDecoratorDetails({ userId, data: decoratorDetails }) as any);
    handleContinue();
  };

  const handledropdowneventsize = (value: string) => {
    updateFormState({ eventsize: value });
    handleInputChange2({ target: { name: 'eventsize', value } } as React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>);
  };
  const handledropdownduration = (value: string) => {
    updateFormState({ duration: value });
    handleInputChange2({ target: { name: 'duration', value } } as React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>);
  };

  return (
    <div className="flex h-full flex-col items-start justify-start gap-5 overflow-y-scroll scrollbar-hide">
      <div className="flex min-w-full flex-col items-start justify-around gap-10">
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[100%] md:p-6">
          <div className="flex w-[100%] flex-col items-start justify-start gap-9 rounded-xl bg-white p-5">
            <div className="flex items-center justify-start gap-5">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3233 10L6.35314 13.9702C5.88229 14.441 5.88229 15.2044 6.35314 15.6753L10.3233 19.6455M6.70627 14.8227L23.5858 14.8227"
                  stroke="#2B3F6C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>

              <h1 className="text-3xl font-semibold"> Basic Details</h1>
            </div>
            <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">
              <div className="flex min-w-[50%] flex-col gap-4">
                <label className="text-base font-medium" htmlFor="businessName">
                  Full Name(POC)<span className="text-red-500">*</span>
                </label>
                <input
                  className="h-16 w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                  id="businessName"
                  name="businessName"
                  value={formState.businessName}
                  placeholder="Enter your business name"
                  onChange={(e) => {
                    handleInputChange(e),
                      handleInputChange2(e)
                  }}
                  required
                />
              </div>

              <div className="flex min-w-[50%] flex-col gap-4">
                <label className="text-base font-medium" htmlFor="businessName">
                  Event size<span className="text-red-500">*</span>
                </label>
                <Dropdown
                  options={teamsizelist}
                  onSelect={(value: string) => handledropdowneventsize(value)}
                  placeholder="Select Your Team Size"
                  selectedOption={formState.eventsize}
                />
              </div>
            </div>

            <div className="flex min-w-full flex-col items-start justify-between gap-5 md:flex-row">
              <div className="flex min-w-[50%] flex-col gap-4">
                <label className="text-base font-medium" htmlFor="businessName">
                  Decoration setup duration
                </label>
                <Dropdown
                  options={durationlist}
                  onSelect={(value: string) => handledropdownduration(value)}
                  placeholder="Select Your Time Period"
                  selectedOption={formState.duration}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[100%] md:p-6">
          <h1 className="text-3xl font-semibold">
            Types of Event<span className="text-red-600">*</span>
          </h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                field={"_typesOfEvent"}
                appetizers={_typesOfEvent}
                selectedAppetizers={typeOfevents}
                setSelectedAppetizers={setTypesOfEvents}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[100%] md:p-6">
          <h1 className="text-3xl font-semibold">Wedding Events</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                field={"_weddingEvents"}
                appetizers={_weddingEvents}
                selectedAppetizers={weddingEvents}
                setSelectedAppetizers={setWeddingEvents}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[100%] md:p-6">
          <h1 className="text-3xl font-semibold">Corporate Events</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                field={"_corporateEvents"}
                appetizers={_corporateEvents}
                selectedAppetizers={corporateEvents}
                setSelectedAppetizers={setCorporateEvents}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[100%] md:p-6">
          <h1 className="text-3xl font-semibold">Seasonal Events</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                field={"_seasonalEvents"}
                appetizers={_seasonalEvents}
                selectedAppetizers={seasonalEvents}
                setSelectedAppetizers={setSeasonalEvents}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[100%] md:p-6">
          <h1 className="text-3xl font-semibold">Cultural Events</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                field={"_culturalEvents"}
                appetizers={_culturalEvents}
                selectedAppetizers={culturalEvents}
                setSelectedAppetizers={setCulturalEvents}
              />
            </div>
            <div className="items-strech mt-9 flex flex-row gap-7 self-end">
              <button
                className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                onClick={onContinue}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
