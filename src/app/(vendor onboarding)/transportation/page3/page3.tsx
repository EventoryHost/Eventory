"use client";
import StepBar from "@/app/(components)/stepBar";
import React, { useState } from "react";

interface FormState {
  vehicleCheckbox: boolean;
  vehicleTypePage3: string;
  vehicleMinRate: string;
  vehicleMaxRate: string;
  serviceCheckbox: boolean;
  serviceType: string;
  serviceMinRate: string;
  serviceMaxRate: string;
  cargoCheckbox: boolean;
  cargoType: string;
  cargoMinRate: string;
  cargoMaxRate: string;
  advancedPaymentCheckbox: boolean;
  percentageValue: number;
}
interface Package {
  type: string;
  priceRange: [number, number];
}

type HandleChange = (field: keyof FormState, value: any) => void;

type Page3Props = {
  formState: FormState;
  handleChange: HandleChange;
  navigateToPage: (pageIndex: number) => void;
  packages: Package[];
  addPackage: (packageType: string) => void;
};

const Page3 = ({
  formState,
  handleChange,
  navigateToPage,
  packages,
  addPackage,
}: Page3Props) => {
  const [vehicles, setVehicles] = useState<
    { type: string; minRate: string; maxRate: string }[]
  >([]);
  const [services, setServices] = useState<
    { type: string; minRate: string; maxRate: string }[]
  >([]);
  const [cargo, setCargo] = useState<
    { type: string; minRate: string; maxRate: string }[]
  >([]);

  const updateFormState = () => {
    handleChange(
      "vehicleTypePage3",
      vehicles.map((v) => v.type),
    );
    handleChange(
      "vehicleMinRate",
      vehicles.map((v) => v.minRate),
    );
    handleChange(
      "vehicleMaxRate",
      vehicles.map((v) => v.maxRate),
    );

    handleChange(
      "serviceType",
      services.map((s) => s.type),
    );
    handleChange(
      "serviceMinRate",
      services.map((s) => s.minRate),
    );
    handleChange(
      "serviceMaxRate",
      services.map((s) => s.maxRate),
    );

    handleChange(
      "cargoType",
      cargo.map((c) => c.type),
    );
    handleChange(
      "cargoMinRate",
      cargo.map((c) => c.minRate),
    );
    handleChange(
      "cargoMaxRate",
      cargo.map((c) => c.maxRate),
    );
  };

  // Call this function when you add a new vehicle, service, or cargo item
  const handleAddVehicle = () => {
    setVehicles([...vehicles, { type: "", minRate: "", maxRate: "" }]);
    updateFormState(); // Update the global state
  };

  const handleAddService = () => {
    setServices([...services, { type: "", minRate: "", maxRate: "" }]);
    updateFormState(); // Update the global state
  };

  const handleAddCargo = () => {
    setCargo([...cargo, { type: "", minRate: "", maxRate: "" }]);
    updateFormState(); // Update the global state
  };

  const handleVehicleChange = (
    index: number,
    field: keyof { type: string; minRate: string; maxRate: string },
    value: string,
  ) => {
    const newVehicles = [...vehicles];
    newVehicles[index] = { ...newVehicles[index], [field]: value };
    setVehicles(newVehicles);
    updateFormState(); 
  };

  const handleServiceChange = (
    index: number,
    field: keyof { type: string; minRate: string; maxRate: string },
    value: string,
  ) => {
    const newServices = [...services];
    newServices[index] = { ...newServices[index], [field]: value };
    setServices(newServices);
    updateFormState(); // Sync with global state
  };

  const handleCargoChange = (
    index: number,
    field: keyof { type: string; minRate: string; maxRate: string },
    value: string,
  ) => {
    const newCargo = [...cargo];
    newCargo[index] = { ...newCargo[index], [field]: value };
    setCargo(newCargo);
    updateFormState(); // Sync with global state
  };

  return (
    <div className="flex h-full min-h-[calc(100vh-5.2rem)] w-full flex-col lg:flex-row">
      <div className="flex flex-col items-start justify-between bg-[#FFFFFF] xs:gap-7 xs:pt-4 md:min-w-[30%] lg:max-w-[30%]">
        <div className="flex items-center justify-start gap-1 xs:self-start xs:pl-5 lg:mt-[2rem]">
          <StepBar currentStep={3} />
        </div>
        <div className="flex h-[80%] flex-col items-start gap-9 px-9 xs:pl-5 md:px-11 lg:p-8">
          <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
            Fill out your Pricing rates
          </h1>
          <p className="text-gray-600 xs:text-sm md:w-[90%] lg:text-lg">
            Please provide the details of the vehicles offered by your company.
          </p>
        </div>
        <div className="relative h-[10rem] lg:w-full">
          <img
            src={"/tajmahal.png"}
            alt="Taj Mahal"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="flex min-w-[70%] flex-col items-center justify-center bg-[#F7F6F9] p-2 md:p-[1rem]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigateToPage(4);
          }}
          className="flex w-full flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6"
        >
          <span className="font-semibold">Pricing Structure</span>

          <div className="flex gap-2">
            <input
              type="checkbox"
              className="h-6 w-6 appearance-none rounded-lg border-2 border-[#2E3192] bg-white checked:bg-[#2E3192] focus:outline-none"
              checked={formState.vehicleCheckbox}
              onChange={(e) =>
                handleChange("vehicleCheckbox", e.target.checked)
              }
            />
            <span className="semi-bold">Type of Vehicles</span>
          </div>

          {/* Render vehicle inputs dynamically */}
          {vehicles.map((vehicle, index) => (
            <div key={index} className="flex flex-row gap-6">
              <div className="flex flex-col">
                <label>Vehicle Name</label>
                <input
                  value={vehicle.type}
                  onChange={(e) =>
                    handleVehicleChange(index, "type", e.target.value)
                  }
                  type="text"
                  className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                  placeholder="Enter vehicle type"
                />
              </div>
              <div className="flex flex-col">
                <label>Min. Rate</label>
                <input
                  value={vehicle.minRate}
                  onChange={(e) =>
                    handleVehicleChange(index, "minRate", e.target.value)
                  }
                  type="text"
                  className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                  placeholder="Enter minimum rate"
                />
              </div>
              <div className="flex flex-col">
                <label>Max. Rate</label>
                <input
                  value={vehicle.maxRate}
                  onChange={(e) =>
                    handleVehicleChange(index, "maxRate", e.target.value)
                  }
                  type="text"
                  className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                  placeholder="Enter maximum rate"
                />
              </div>
            </div>
          ))}

          <div className="item-start flex w-10 flex-col justify-between gap-2">
            <button
              type="button"
              className="cursor-pointer rounded-lg bg-[#E6E6E6] p-2 hover:shadow-xl"
              onClick={handleAddVehicle}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5.5V17.5M6 11.5H18"
                  stroke="#2E3192"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div className="flex gap-2">
            <input
              type="checkbox"
              className="h-6 w-6 appearance-none rounded-lg border-2 border-[#2E3192] bg-white checked:bg-[#2E3192] focus:outline-none"
              checked={formState.serviceCheckbox}
              onChange={(e) =>
                handleChange("serviceCheckbox", e.target.checked)
              }
            />
            <span className="semi-bold">Type of Services</span>
          </div>

          {/* Render service inputs dynamically */}
          {services.map((service, index) => (
            <div key={index} className="flex flex-row gap-6">
              <div className="flex flex-col">
                <label>Name</label>
                <input
                  value={service.type}
                  onChange={(e) =>
                    handleServiceChange(index, "type", e.target.value)
                  }
                  type="text"
                  className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                  placeholder="Enter service type"
                />
              </div>
              <div className="flex flex-col">
                <label>Min. Rate</label>
                <input
                  value={service.minRate}
                  onChange={(e) =>
                    handleServiceChange(index, "minRate", e.target.value)
                  }
                  type="text"
                  className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                  placeholder="Enter minimum rate"
                />
              </div>
              <div className="flex flex-col">
                <label>Max. Rate</label>
                <input
                  value={service.maxRate}
                  onChange={(e) =>
                    handleServiceChange(index, "maxRate", e.target.value)
                  }
                  type="text"
                  className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                  placeholder="Enter maximum rate"
                />
              </div>
            </div>
          ))}

          <div className="item-start flex w-10 flex-col justify-between gap-2">
            <button
              type="button"
              className="cursor-pointer rounded-lg bg-[#E6E6E6] p-2 hover:shadow-xl"
              onClick={handleAddService}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5.5V17.5M6 11.5H18"
                  stroke="#2E3192"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div className="flex gap-2">
            <input
              type="checkbox"
              className="h-6 w-6 appearance-none rounded-lg border-2 border-[#2E3192] bg-white checked:bg-[#2E3192] focus:outline-none"
              checked={formState.cargoCheckbox}
              onChange={(e) => handleChange("cargoCheckbox", e.target.checked)}
            />
            <span className="semi-bold">Type of Cargo</span>
          </div>

          {/* Render cargo inputs dynamically */}
          {cargo.map((cargoItem, index) => (
            <div key={index} className="flex flex-row gap-6">
              <div className="flex flex-col">
                <label>Type</label>
                <input
                  value={cargoItem.type}
                  onChange={(e) =>
                    handleCargoChange(index, "type", e.target.value)
                  }
                  type="text"
                  className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                  placeholder="Enter cargo type"
                />
              </div>
              <div className="flex flex-col">
                <label>Min. Rate</label>
                <input
                  value={cargoItem.minRate}
                  onChange={(e) =>
                    handleCargoChange(index, "minRate", e.target.value)
                  }
                  type="text"
                  className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                  placeholder="Enter minimum rate"
                />
              </div>
              <div className="flex flex-col">
                <label>Max. Rate</label>
                <input
                  value={cargoItem.maxRate}
                  onChange={(e) =>
                    handleCargoChange(index, "maxRate", e.target.value)
                  }
                  type="text"
                  className="w-full rounded-xl border-2 bg-white p-5 py-3 outline-none"
                  placeholder="Enter maximum rate"
                />
              </div>
            </div>
          ))}

          <div className="item-start flex w-10 flex-col justify-between gap-2">
            <button
              type="button"
              className="cursor-pointer rounded-lg bg-[#E6E6E6] p-2 hover:shadow-xl"
              onClick={handleAddCargo}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5.5V17.5M6 11.5H18"
                  stroke="#2E3192"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div className="flex gap-2">
            <input
              type="checkbox"
              className="h-6 w-6 appearance-none rounded-lg border-2 border-[#2E3192] bg-white checked:bg-[#2E3192] focus:outline-none"
              checked={formState.advancedPaymentCheckbox}
              onChange={(e) =>
                handleChange("advancedPaymentCheckbox", e.target.checked)
              }
            />
            <span className="semi-bold">Advanced Payment</span>
          </div>

          <div className="flex flex-row gap-6">
            <div className="flex flex-col">
              <label className="mb-4">Set Percentage Value</label>
              <input
                value={formState.percentageValue}
                onInput={(e) =>
                  handleChange(
                    "percentageValue",
                    (e.target as HTMLInputElement).value,
                  )
                }
                type="range"
                min="0"
                max="100"
                step="1"
                className="w-full rounded-xl border-2 outline-none"
                style={{
                  padding: 0,
                  backgroundColor: "white",
                  borderColor: "#2E3192",
                }}
              />
              <span>{formState.percentageValue}%</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page3;
