"use client";

import { ArrowLeft } from "lucide-react";
import Appetizers from "../../(components)/Appetizers";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { fetchCateringData, saveCateringDetails } from "@/redux/cateringSlice";
import { useEffect } from "react";
import jwt from "jsonwebtoken";
import { get } from "http";


const _staffProvides = ["Chefs", "Bartenders", "Servers", "Cleaners", "Others"];

const _equipmentsProvided = [
  "Utensils ",
  "Chafing Dishes",
  "Others",
  "Serving Ware",
  "Tableware",
];

const Page4 = ({
  selectedStaffProvider,
  setSelectedStaffProvider,
  selectedEquipmentsProvided,
  setSelectedEquipmentsProvided,
  handleContinue,
  setCurrentPage,
  currentPage,
}: {
  selectedStaffProvider: string[];
  setSelectedStaffProvider: React.Dispatch<React.SetStateAction<string[]>>;

  selectedEquipmentsProvided: string[];
  setSelectedEquipmentsProvided: React.Dispatch<React.SetStateAction<string[]>>;
  handleContinue: () => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
}) => {
  const dispatch = useDispatch();
  const { formData } = useSelector((state: RootState) => state.catering);
  function getVendorId2(): string | null {
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
  const userId =  getVendorId2() || ""; 


  useEffect(() => {
    // Fetch data when Page 4 mounts
    if (userId) {
      dispatch(fetchCateringData(userId) as any);
    }
  }, [dispatch, userId]);

  useEffect(() => {
    if (formData) {
      // Update local state based on fetched formData
      if (!selectedStaffProvider.length) {
        setSelectedStaffProvider(formData.staffProvides || []);
      }
      if (!selectedEquipmentsProvided.length) {
        setSelectedEquipmentsProvided(formData.equipmentsProvided || []);
      }
    }
  }, [formData, selectedStaffProvider, selectedEquipmentsProvided, setSelectedStaffProvider, setSelectedEquipmentsProvided]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare the data to save, including staff and equipment details
    const dataToSave = {
      ...formData,
      staffProvides: selectedStaffProvider,
      equipmentsProvided: selectedEquipmentsProvided,
    };

    dispatch(saveCateringDetails({ userId, data: dataToSave }) as any);
    handleContinue();
  };

  return (
    <div className="flex h-full w-full flex-col items-center overflow-hidden scrollbar-hide lg:flex-row">
      <div className="scroll-touch items-strech flex w-[100%] flex-col gap-9 overflow-y-scroll bg-[#F7F6F9] scrollbar-hide">
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <div className="flex items-center gap-4">
            <ArrowLeft
              className="ml-2 mr-1 h-6 w-6 cursor-pointer text-[#2E3192]"
              aria-hidden="true"
              onClick={() => setCurrentPage(currentPage - 1)}
            />
            <h1 className="text-2xl font-semibold">
              Staff and Equipment Provided
            </h1>
          </div>
          <div className="flex min-h-full min-w-full flex-col gap-5">
            <label htmlFor="category" className="text-xl font-medium">
              Staff Provides:<span className="text-red-500">*</span>
            </label>

            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                field={"staffProvides"}
                appetizers={_staffProvides}
                selectedAppetizers={selectedStaffProvider}
                setSelectedAppetizers={setSelectedStaffProvider}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
          <div className="flex min-h-full min-w-full flex-col gap-5">
            <label htmlFor="category" className="text-xl font-medium">
              Equipments Provided:
            </label>

            <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
              <Appetizers
                field={"equipmentsProvided"}
                appetizers={_equipmentsProvided}
                selectedAppetizers={selectedEquipmentsProvided}
                setSelectedAppetizers={setSelectedEquipmentsProvided}
              />
            </div>
            <div className="items-strech flex flex-row gap-7 self-end">
              <button
                className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
                onClick={handleSubmit}
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

export default Page4;
