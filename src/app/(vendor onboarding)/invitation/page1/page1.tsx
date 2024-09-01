"use client";

import React, { useState } from "react";
import Appetizers from "../(components)/Appetizers";
import { Upload } from "lucide-react";
import { Combobox } from "@/components/ui/combobox";

const _typesOfInvitationsYouDesign = [
  "Formal Invitation",
  "Casual Invitation",
  "Electronic Invitation",
  "Handmade invitation",
  "Printed invitation",
  "Specialty invitation",
  "Unique invitation",
  "Cultural invitation",
  "Others",
];

const _formalInvitations = [
  "Wedding invitations",
  "Corporate invitations",
  "Gala invitation",
  "Others",
];

const _casualInvitations = [
  "Birthday invitations",
  "Housewarming invitations",
  "BBQ / Outdoor invitation",
  "Others",
];

const _electronicInvitations = [
  "E-mail invitations",
  "Social media invitations",
  "Others",
];

const _handmadeInvitations = [
  "DIY invitations",
  "Artisan invitations",
  "Others",
];

const _printedInvitations = [
  "Printed invitations",
  "Photo invitations",
  "Others",
];

const _specialtyInvitations = [
  "Theme party invitations",
  "Save the date cards",
  "RSVP cards",
  "Others",
];

const _uniqueInvitations = ["Video invitations", "Interactive cards", "Others"];

const _religiousAndCulturalInvitations = [
  "Diwali invitations",
  "Ganesh chaturthi cards",
  "Christmas invitation",
  "Halloween invitation",
];

const _decorTypes = [
  { value: "indoor", label: "Inhouse Decor" },
  { value: "external_allowed", label: "External Decor Allowed" },
  { value: "external_not  ", label: "External Decor Not Allowed" },
];

const _audioEquipment = [
  "Amplifiers",
  "Audio Mixers",
  "Camcorders",
  "Dlp Projectors",
  "Led Screens",
  "Lcd Projectors",
  "Microphones",
  "Monitors",
  "Others",
  "Ptz Cameras", // PTZ (Pan-Tilt-Zoom) Cameras
  "Projection Screens",
  "Speakers",
];

const _accessibilityFeatures = [
  "Audio Descriptions",
  "Braille Screens",
  "Clear Pathways",
  "Emergency Procedures",
  "Hearing Loops",
  "Interpreters",
  "Others",
  "Parkings",
  "Restrooms",
  "Screen Readers",
  "Sensory Rooms",
  "Visual Sign Support",
  "Wheelchair Access",
];

const _facilities = [
  "Av Equipments",
  "Banquet Hall",
  "Bridal Room",
  "Charging Stations",
  "Fill Hvac Control", // Assuming 'fill_hug_te_control' is a typo
  "First Aid Equipments",
  "Garden Area",
  "High Speed Internet",
  "Others",
  "Storage Area",
];

const _experience = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "other", label: "Other" },
];
interface FormState {
  references: boolean;
  portfolio: string;
  experience: string;
}

interface Page1Props {
  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
  typesOfInvitationsYouDesign: string[];
  setTypesOfInvitationsYouDesign: React.Dispatch<
    React.SetStateAction<string[]>
  >;
  formalinvitation: string[];
  setFormalInvitation: React.Dispatch<React.SetStateAction<string[]>>;
  casualinvitation: string[];
  setCasualInvitation: React.Dispatch<React.SetStateAction<string[]>>;
  Electronicinvitation: string[];
  setElectronicInvitation: React.Dispatch<React.SetStateAction<string[]>>;
  handmadeinvitation: string[];
  setHandmadeInvitation: React.Dispatch<React.SetStateAction<string[]>>;
  printedInvitation: string[];
  setPrintedInvitation: React.Dispatch<React.SetStateAction<string[]>>;
  specialyInvitation: string[];
  setSpecialyInvitation: React.Dispatch<React.SetStateAction<string[]>>;
  uniqueInvitation: string[];
  setUniqueInvitation: React.Dispatch<React.SetStateAction<string[]>>;
  relegiousInvitation: string[];
  setRelegiousInvitation: React.Dispatch<React.SetStateAction<string[]>>;
  otherInvitation: string[];
  setOtherInvitation: React.Dispatch<React.SetStateAction<string[]>>;
}

const Page = ({
  formState,
  updateFormState,
  typesOfInvitationsYouDesign,
  setTypesOfInvitationsYouDesign,
  formalinvitation,
  setFormalInvitation,
  casualinvitation,
  setCasualInvitation,
  Electronicinvitation,
  setElectronicInvitation,
  handmadeinvitation,
  setHandmadeInvitation,
  printedInvitation,
  setPrintedInvitation,
  specialyInvitation,
  setSpecialyInvitation,
  uniqueInvitation,
  setUniqueInvitation,
  relegiousInvitation,
  setRelegiousInvitation,
  otherInvitation,
  setOtherInvitation,
}: Page1Props) => {
  const { references, portfolio, experience } = formState;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col overflow-hidden lg:flex-row">
      <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[30%] lg:max-w-[30%]">
        <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 md:px-11 lg:mt-[2rem]">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2E3192] p-5 text-white">
            1
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-gray-300"></div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
            2
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-gray-300"></div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
            3
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-gray-300"></div>
        </div>
        <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 md:px-11 lg:mt-[1rem]">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
            4
          </button>
          <div className="h-[0.3rem] w-[4rem] rounded-xl bg-gray-300"></div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5">
            5
          </button>
        </div>
        <div className="flex h-[50%] flex-col items-start justify-center gap-9 px-9 xs:pl-5 md:px-11 lg:p-8">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Tell us about your business
          </h1>
          <p className="text-black xs:text-sm md:w-[90%]">
            Fill out your Business details to get verified and proceed to
            registration process.
          </p>
        </div>
        <div className="relative h-[10rem] lg:w-full">
          <img
            src={"/tajmahal.png"}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="scroll-touch flex max-h-[calc(100vh-5.2rem)] min-w-[70%] flex-col items-center gap-9 overflow-y-scroll bg-[#F7F6F9] p-2 md:p-[1rem]">
        <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <div className="flex gap-9">
            <h1 className="text-3xl font-semibold">Basic Details</h1>
          </div>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-row items-start justify-between gap-2">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Portfolio of past work</label>
                <p className="text-gray-500">PNG, PDF, JPG</p>
                <button className="flex items-center justify-center gap-5 rounded-xl border-2 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
                  {" "}
                  <Upload />
                  Upload
                </button>
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="businessName">
                  Do you provide references upon request ?
                </label>
                <div className="flex flex-row items-center justify-center gap-2">
                  <p>Yes</p>
                  <input
                    type="radio"
                    checked={references === true}
                    onChange={() => updateFormState({ references: true })}
                  />
                  <p>No</p>
                  <input
                    type="radio"
                    checked={references === false}
                    onChange={() => updateFormState({ references: false })}
                  />
                </div>
              </div>
            </div>
            <div className="flex min-w-full flex-row items-start justify-between gap-2">
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Or provide Via</label>
                <input
                  id="businessName"
                  type="text"
                  className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
                  placeholder="Enter url here"
                  value={portfolio}
                  onChange={(e) =>
                    updateFormState({ portfolio: e.target.value })
                  }
                />
              </div>
              <div className="flex min-w-[40%] flex-col gap-4">
                <label htmlFor="category">Years of Experience ?</label>
                <Combobox
                  options={_experience}
                  placeholder="Select your category"
                  setFunction={(value) =>
                    updateFormState({ experience: value })
                  }
                  className="flex items-center justify-between rounded-xl border-2 py-6 hover:text-[#2E3192]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">
            Types of Invitations you design
          </h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                appetizers={_typesOfInvitationsYouDesign}
                selectedAppetizers={typesOfInvitationsYouDesign}
                setSelectedAppetizers={setTypesOfInvitationsYouDesign}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">Formal Invitations</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                appetizers={_formalInvitations}
                selectedAppetizers={formalinvitation}
                setSelectedAppetizers={setFormalInvitation}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">Casual Invitations</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                appetizers={_casualInvitations}
                selectedAppetizers={casualinvitation}
                setSelectedAppetizers={setCasualInvitation}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">Electronic Invitations</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                appetizers={_electronicInvitations}
                selectedAppetizers={Electronicinvitation}
                setSelectedAppetizers={setElectronicInvitation}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">Handmade Invitations</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                appetizers={_handmadeInvitations}
                selectedAppetizers={handmadeinvitation}
                setSelectedAppetizers={setHandmadeInvitation}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">Printed Invitations</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                appetizers={_printedInvitations}
                selectedAppetizers={printedInvitation}
                setSelectedAppetizers={setPrintedInvitation}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">Specialty Invitations</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                appetizers={_specialtyInvitations}
                selectedAppetizers={specialyInvitation}
                setSelectedAppetizers={setSpecialyInvitation}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">Unique Invitations</h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                appetizers={_uniqueInvitations}
                selectedAppetizers={uniqueInvitation}
                setSelectedAppetizers={setUniqueInvitation}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <h1 className="text-3xl font-semibold">
            Religious and Cultural Invitations
          </h1>
          <div className="flex min-h-full min-w-full flex-col items-center gap-5">
            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                appetizers={_religiousAndCulturalInvitations}
                selectedAppetizers={relegiousInvitation}
                setSelectedAppetizers={setRelegiousInvitation}
              />
            </div>
            {/* <div className="items-strech mt-9 flex flex-row gap-7 self-end">
              <button
                className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                onClick={handleSubmit}
              >
                Skip
              </button>
              <button
                className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                onClick={handleSubmit}
              >
                Continue
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
