"use client";
import jwt from "jsonwebtoken";
// RootPage.tsx
import React, { useEffect, useState } from "react";
import { useToast } from "@/components/hooks/use-toast";
import { useRouter } from "next/navigation";

import Page1 from "./page1/page1";
import Page2 from "./page2/page2";
import Page3 from "./page3/page3";
import preview from "./preview/preview";
import { addPropRental } from "@/services/vendors/propRental";

import Image from "next/image";
import { Import } from "lucide-react";
import Preview from "./preview/preview";
import Plans from "../(Plans)/Plans";
import Agreement from "../(Agreement)/Agreement";
import Registration_Completed from "../(Registration-Completed)/thankupage";

export interface FormState {
  // Page1
  managerName: string;
  workDescription: string;
  eventSize: string;
  handleChange: (key: keyof FormState, value: any) => void;
  [key: string]: any;

  // Page2
  itemCatalogue: boolean | File;
  customization: boolean | null;
  maintenance: string;
  services: string;

  // Page3
  furnitureAndDecorListUrl: string | File;
  tentAndCanopyListUrl: string | File;
  audioVisualListUrl: string | File;
  photos: string | File | File[];

  videos: string | File | File[];
  awardsAndRecognize: string;
  clientTestimonial: string;
  instaUrl: string;
  websiteUrl: string;
  termsAndConditions: string | File | File[];
  cancellationPolicy: string | File | File[];

  // furnitureHourlyPricingEntries: PricingEntry[];
  // tentHourlyPricingEntries: PricingEntry[];
  // furnitureDealPricingEntries: PricingEntry[];
  // furnitureWorkerPricingEntries: PricingEntry[];
  // hourlyCheckbox: boolean;
  // packageTypePage3: string;
  // packageMinRate: string;
  // packageMaxRate: string;
  // dealCheckbox: boolean;
  // dealType: string;
  // dealMinRate: string;
  // dealMaxRate: string;
  // workerCheckbox: boolean;
  // workerType: string;
  // workerMinRate: string;
  // workerMaxRate: string;

  // advancedPaymentCheckboxPage3: false;
  // percentageValuePage3: number;
  // percentageValuePage4: number;
  // percentageValuePage5: number;

  // // Page4
  // hourlyCheckboxPage4: boolean;
  // dealCheckboxPage4: boolean;
  // workerCheckboxPage4: boolean;
  // advancedPaymentCheckboxPage4: false;

  // // Page5
  // hourlyCheckboxPage5: boolean;
  // dealCheckboxPage5: boolean;
  // workerCheckboxPage5: boolean;
  // advancedPaymentCheckboxPage5: false;
}

type PricingEntry = {
  name: string;
  min: number;
  max: number;
};

const RootPage = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [formState, setFormState] = useState<FormState>({
    managerName: "",
    workDescription: "",
    eventSize: "",
    handleChange: (key: keyof FormState, value: any) => { },

    // URL's for the files
    itemCatalogue: false,
    customization: null,
    photos: [],
    videos: [],
    maintenance: "",
    services: "",
    awardsAndRecognize: "",
    instaUrl: "",
    websiteUrl: "",
    clientTestimonial: "",

    cancellationPolicy: "",
    termsAndConditions: "",
    furnitureAndDecorListUrl: "",
    tentAndCanopyListUrl: "",
    audioVisualListUrl: "",

    furnitureHourlyPricingEntries: [],
    tentHourlyPricingEntries: [],
    furnitureDealPricingEntries: [],
    furnitureWorkerPricingEntries: [],
    hourlyCheckbox: false,
    packageTypePage3: "",
    packageMinRate: "",
    packageMaxRate: "",
    dealCheckbox: false,
    dealType: "",
    dealMinRate: "",
    dealMaxRate: "",
    workerCheckbox: false,
    workerType: "",
    workerMinRate: "",
    workerMaxRate: "",
    advancedPaymentCheckboxPage3: false,
    percentageValuePage3: 50,
    percentageValuePage4: 50,
    percentageValuePage5: 50,
    hourlyCheckboxPage4: false,
    dealCheckboxPage4: false,
    workerCheckboxPage4: false,
    advancedPaymentCheckboxPage4: false,
    hourlyCheckboxPage5: false,
    dealCheckboxPage5: false,
    workerCheckboxPage5: false,
    advancedPaymentCheckboxPage5: false,

    tentAndCanopy: {
      listUrl: "",
      items: [],
      packageRates: {
        hourly: [],
        deal: [],
        worker: [],
      },
    },

    // Initialize furnitureAndDecor with appropriate properties
    furnitureAndDecor: {
      listUrl: "",
      items: [],
      packageRates: {
        hourly: [],
        deal: [],
        worker: [],
      },
    },
  });

  function updateFormState(newState: Partial<FormState>) {
    setFormState((prev) => ({ ...prev, ...newState }));
  }

  const handleChange = (key: keyof FormState, value: any) => {
    setFormState((prevState) => ({ ...prevState, [key]: value }));
  };

  const handleAddPricingEntry = (entry: PricingEntry) => {
    setFormState((prevState) => ({
      ...prevState,
      furnitureHourlyPricingEntries: [
        ...prevState.furnitureHourlyPricingEntries,
        entry,
      ],
    }));
    console.log(formState.furnitureHourlyPricingEntries);
  };

  const handleAddTentHourlyPricingEntries = (entry: {
    name: string;
    min: number;
    max: number;
  }) => {
    console.log("Adding entry:", entry); // Log the new entry
    setFormState((prevState) => {
      console.log("Previous state:", prevState);
      return {
        ...prevState,
        tentHourlyPricingEntries: [
          ...prevState.tentHourlyPricingEntries,
          entry,
        ],
      };
    });
  };

  const handleAddTentPricingEntry = (entry: PricingEntry) => {
    setFormState((prevState) => ({
      ...prevState,
      furnitureDealPricingEntries: [
        ...prevState.furnitureDealPricingEntries,
        entry,
      ],
    }));
    console.log(formState.furnitureDealPricingEntries);
  };
  const handleAddAudioPricingEntry = (entry: PricingEntry) => {
    setFormState((prevState) => ({
      ...prevState,
      furnitureWorkerPricingEntries: [
        ...prevState.furnitureWorkerPricingEntries,
        entry,
      ],
    }));
    console.log(formState.furnitureWorkerPricingEntries);
  };

  // Function to handle changes for nested fields
  const handleNestedChange = (
    key: keyof FormState,
    nestedKey: string,
    value: any,
  ) => {
    setFormState((prevState) => ({
      ...prevState,
      [key]:
        typeof prevState[key] === "object"
          ? { ...prevState[key], [nestedKey]: value }
          : { [nestedKey]: value },
    }));
  };

  const navigateToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  const [selectedCategory, setSelectedCategory] = useState("Furniture & Decor");
  const [selectedFurnitureEvents, setselectedFurnitureEvents] = useState<
    string[]
  >([]);
  const [selectedTentEvents, setselectedTentEvents] = useState<string[]>([]);

  const [selectedAudioEvents, setselectedAudioEvents] = useState<string[]>([]);

  const [serviceProvided, setServiceProvided] = useState<string[]>([]);
  const [selectedFurniture, setSelectedFurniture] = useState<string[]>([]);

  const [selectedDecor, setSelectedDecor] = useState<string[]>([]);
  const [selectedTentOptions, setSelectedTentOptions] = useState<string[]>([]);
  const [selectedAudioOptions, setSelectedAudioOptions] = useState<string[]>(
    [],
  );
  const [selectedvisualOptions, setSelectedVisualOptions] = useState<string[]>(
    [],
  );
  const [selectedLightOptions, setSelectedLightOptions] = useState<string[]>(
    [],
  );
  const [percentageValuePage3, setPercentageValuePage3] = useState(0);
  const [percentageValuePage4, setPercentageValuePage4] = useState(0);
  const [percentageValuePage5, setPercentageValuePage5] = useState(0);

  function getVendorId(): string | null {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token not found");
      return null;
    }
    try {
      const decodedToken = jwt.decode(token) as {
        id: string;
        email: string;
        name: string;
        mobile: string;
      };
      if (!decodedToken || !decodedToken.id) {
        console.error("Invalid token or token does not contain userId.");
        return null;
      }
      return decodedToken.id;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  }

  async function handleSubmit() {
    console.log("Form State before submission:", formState);

    const venId = getVendorId()!;

    const formData = new FormData();
    formData.append("venId", venId);
    formData.append("managerName", formState.managerName || "");
    formData.append("descriptionOfWork", formState.workDescription || "");
    formData.append("eventSize", formState.eventSize || "");
    formData.append("numberOfWorkers", formState.numberOfWorkers || "");

    if (formState.itemCatalogue instanceof File) {
      formData.append("itemCatalogue", formState.itemCatalogue);
    } else {
      // If you need to handle the boolean case, you could append a string instead
      formData.append(
        "itemCatalogue",
        formState.itemCatalogue ? "true" : "false",
      );
    }
    formData.append(
      "customization",
      formState.customization ? formState.customization.toString() : "null",
    );

    formData.append("maintenance", formState.maintenance);
    formData.append("services", formState.services);
    // Handle photos field
    if (Array.isArray(formState.photos)) {
      formState.photos.forEach((file) => {
        if (file instanceof File) {
          formData.append("photos", file); // Append as 'photos' without the array index
        }
      });
    } else if (typeof formState.photos === "string") {
      formData.append("photos", formState.photos); // Append the string (URL)
    }

    // Handle videos field
    if (Array.isArray(formState.videos)) {
      formState.videos.forEach((file) => {
        if (file instanceof File) {
          formData.append("videos", file); // Append as 'videos' without the array index
        }
      });
    } else if (typeof formState.videos === "string") {
      formData.append("videos", formState.videos); // Append the string (URL)
    }

    // Appending arrays without stringifying
    formData.append(
      "furnitureAndDecorListUrl",
      formState.furnitureAndDecorListUrl || "",
    );
    selectedFurnitureEvents?.forEach((item: string | Blob, index: number) => {
      formData.append(`furnitureAndDecor[typeOfEvents][${index}]`, item);
    });
    // Append selected furniture items to the formData
    selectedFurniture?.forEach((item: string | Blob, index: number) => {
      formData.append(`furnitureAndDecor[furniture][${index}]`, item);
    });

    // Append selected decor items to the formData
    selectedDecor?.forEach((item: string | Blob, index: number) => {
      formData.append(`furnitureAndDecor[decor][${index}]`, item);
    });

    formData.append(
      "tentAndCanopyListUrl",
      formState.tentAndCanopyListUrl || "",
    );
    selectedTentEvents?.forEach((item: string | Blob, index: number) => {
      formData.append(`tentAndCanopy[typeOfEvents][${index}]`, item);
    });
    selectedTentOptions.forEach((item: string | Blob, index: any) => {
      formData.append(`tentAndCanopy[items][${index}]`, item);
    });

    formData.append("audioVisualListUrl", formState.audioVisualListUrl || "");
    selectedAudioEvents?.forEach((item: string | Blob, index: number) => {
      formData.append(`audioVisual[typeOfEvents][${index}]`, item);
    });
    selectedAudioOptions?.forEach((item: string | Blob, index: number) => {
      formData.append(`audioVisual[audioEquipment][${index}]`, item);
    });
    selectedvisualOptions?.forEach((item: string | Blob, index: number) => {
      formData.append(`audioVisual[visualEquipment][${index}]`, item);
    });
    selectedLightOptions?.forEach((item: string | Blob, index: number) => {
      formData.append(`audioVisual[lightEquipment][${index}]`, item);
    });

    if (Array.isArray(formState.termsAndConditions)) {
      formState.termsAndConditions.forEach((file) => {
        formData.append("termsAndConditions", file); // No index here
      });
    } else {
      formData.append("termsAndConditions", formState.termsAndConditions);
    }
    if (Array.isArray(formState.cancellationPolicy)) {
      formState.cancellationPolicy.forEach((file) => {
        formData.append("cancellationPolicy", file); // No index here
      });
    } else {
      formData.append("cancellationPolicy", formState.cancellationPolicy);
    }

    formData.append("awardsAndRecognize", formState.awardsAndRecognize);
    formData.append("clientTestimonial", formState.clientTestimonial);
    formData.append("instaUrl", formState.instaUrl);
    formData.append("websiteUrl", formState.websiteUrl);

    console.log("This is the formdata in root page");
    // @ts-ignore
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      toast({
        variant: "default",
        title: "Creating Service...",
      });
      await addPropRental(formData);
      toast({
        variant: "default",
        title: "Service Created Successfully",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: error ? "Error" : "Something went wrong.",
        description: "Error While Creating Service. Pls Try Again",
      });
      router.push("/Payment-Failed");
      console.error("Error adding prop rentals: ", error);
    }
  }

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <Page1
            formState={formState}
            handleChange={handleChange}
            handleNestedChange={handleNestedChange}
            navigateToPage={navigateToPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            handleSubmit={handleSubmit}
          />
        );
      case 2:
        return (
          <Page2
            formState={formState}
            updateFormState={updateFormState}
            serviceProvided={serviceProvided}
            setServiceProvided={setServiceProvided}
            handleChange={handleChange}
            handleNestedChange={handleNestedChange}
            navigateToPage={navigateToPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            handleSubmit={handleSubmit}
          />
        );
      case 3:
        return (
          <Page3
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
            formState={formState}
            updateFormState={updateFormState}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            selectedFurnitureEvents={selectedFurnitureEvents}
            setselectedFurnitureEvents={setselectedFurnitureEvents}
            selectedTentEvents={selectedTentEvents}
            setselectedTentEvents={setselectedTentEvents}
            selectedAudioEvents={selectedAudioEvents}
            setselectedAudioEvents={setselectedAudioEvents}
            selectedFurniture={selectedFurniture}
            setSelectedFurniture={setSelectedFurniture}
            selectedDecor={selectedDecor}
            setSelectedDecor={setSelectedDecor}
            selectedTentOptions={selectedTentOptions}
            setSelectedTentOptions={setSelectedTentOptions}
            selectedvisualOptions={selectedvisualOptions}
            setSelectedVisualOptions={setSelectedVisualOptions}
            selectedAudioOptions={selectedAudioOptions}
            setSelectedAudioOptions={setSelectedAudioOptions}
            selectedLightOptions={selectedLightOptions}
            setSelectedLightOptions={setSelectedLightOptions}
            handleChange={handleChange}
          />
        );

      case 4:
        return (
          <Preview
            formState={formState}
            handleChange={handleChange}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            handleSubmit={handleSubmit}
            serviceProvided={serviceProvided}
            setServiceProvided={setServiceProvided}
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
            selectedFurnitureEvents={selectedFurnitureEvents}
            setselectedFurnitureEvents={setselectedFurnitureEvents}
            selectedTentEvents={selectedTentEvents}
            setselectedTentEvents={setselectedTentEvents}
            selectedAudioEvents={selectedAudioEvents}
            setselectedAudioEvents={setselectedAudioEvents}
            selectedFurniture={selectedFurniture}
            setSelectedFurniture={setSelectedFurniture}
            selectedDecor={selectedDecor}
            setSelectedDecor={setSelectedDecor}
            selectedTentOptions={selectedTentOptions}
            setSelectedTentOptions={setSelectedTentOptions}
            selectedvisualOptions={selectedvisualOptions}
            setSelectedVisualOptions={setSelectedVisualOptions}
            selectedAudioOptions={selectedAudioOptions}
            setSelectedAudioOptions={setSelectedAudioOptions}
            selectedLightOptions={selectedLightOptions}
            setSelectedLightOptions={setSelectedLightOptions}
          />
        );
      case 5:
        return (
          <>
            <Agreement setCurrentPage={setCurrentPage} />
          </>
        );
      case 6:
        return (
          <>
            <Plans
              handleformSubmit={handleSubmit}
              setCurrentPage={setCurrentPage}
            />
          </>
        );
      case 7:
        return (
          <>
            <Registration_Completed />
          </>
        );

      default:
        return <div>thankyou</div>;
    }
  };

  return (
    <div
      className={`m-0 flex w-full flex-col overflow-x-hidden ${currentPage <= 4 ? "lg:h-[calc(100vh-4.2rem)]" : ""} lg:flex-row`}
    >
      {currentPage <= 4 && (
        <div className="flex flex-col items-start justify-between bg-[#FFFFFF] pt-4 xs:gap-7 md:min-w-[30%] lg:max-w-[30%]">
          <div className="m-auto flex w-[90%] flex-col justify-center">
            <div className="flex flex-col gap-1 px-3 lg:mt-[2rem]">
              <span className="text-lg font-semibold">
                Step {currentPage} of 4
              </span>
              <div className="flex gap-2">
                <button
                  className={`flex h-2 w-10 items-center justify-center rounded-full ${currentPage >= 1 ? "bg-[#2E3192] text-white" : "bg-gray-300"}`}
                ></button>

                <button
                  className={`flex h-2 w-10 items-center justify-center rounded-full ${currentPage >= 2 ? "bg-[#2E3192] text-white" : "bg-gray-300"}`}
                ></button>

                <button
                  className={`flex h-2 w-10 items-center justify-center rounded-full ${currentPage >= 3 ? "bg-[#2E3192] text-white" : "bg-gray-300"}`}
                ></button>

                <button
                  className={`flex h-2 w-10 items-center justify-center rounded-full ${currentPage >= 4 ? "bg-[#2E3192] text-white" : "bg-gray-300"}`}
                ></button>
              </div>
            </div>
          </div>
          <div className="m-auto flex h-[50%] w-[90%] flex-col items-start justify-center gap-9 px-3 md:px-6">
            <h1 className="text-2xl font-bold md:text-4xl">
              {currentPage === 2 && "Fill out your Service details  "}
              {currentPage === 1 && "Fill the basic information"}
              {currentPage === 3 &&
                selectedCategory === "Furniture & Decor" &&
                "Fill the Furniture and Decor Rentals details"}
              {currentPage === 3 &&
                selectedCategory === "Tent and Canopy" &&
                "Fill the Tent and Canopy rentals details"}
              {currentPage === 3 &&
                selectedCategory === "Audio-Visual" &&
                "Fill the Audio-Visual rentals details"}

              {currentPage === 4 && "Fill the Staffing and Equipment details"}
            </h1>
            <p className="text-xl text-black">
              {currentPage === 2 &&
                "Please provide the details of the venue offered by your company."}
              {currentPage === 1 &&
                "Please provide the basic information of the rental service offered by your company."}
              {currentPage === 3 &&
                selectedCategory === "Furniture & Decor" &&
                "Please provide the event details of the catering service offered by your company."}
              {currentPage === 3 &&
                selectedCategory === "Tent and Canopy" &&
                "Please provide the event details of the catering service offered by your company."}
              {currentPage === 3 &&
                selectedCategory === "Audio-Visual" &&
                "Please provide the Audio-Visual rentals service offered by your company."}

              {currentPage === 4 &&
                "Please provide the staffing and equipment details of the catering service offered by your company."}
            </p>
          </div>
          <div className="relative h-[10rem] w-full">
            <Image
              src={
                "https://eventory-web-prod.s3.ap-south-1.amazonaws.com/assets/vendor_onboarding/tajmahal.png"
              }
              alt=""
              width={400}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      )}
      <div className="flex min-w-[70%] flex-col items-center justify-center bg-[#F7F6F9] p-4 md:p-12">
        {renderPage()}
      </div>
    </div>
  );
};

export default RootPage;
