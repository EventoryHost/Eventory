"use client";

import FileInput from "@/components/fileInput";
import Appetizers from "../../(components)/Appetizers";
import { Upload } from "lucide-react";

const audioOptions = [
  "Speakers",
  "Microphones",
  "mixing consoles",
  "Amplifiers",
  "Signal Processors",
  "Cables and accessories",
  "playback equipment",
  "dj equipment",
  "audio interfaces",
  "in-ear monitors",
  "portable pa systems",
  "recording equipment",
  "confrence and meeting equipment",
  "lighting equipment",
  "others",
];

const visualOptions = [
  "projectos",
  "screens",
  "LED displays",
  "TV screens",
  "video wall",
  "video cameras",
  "playback and recording equipment",
  "camera accessories",
  "video switchers and mixers",
  "visual effects",
  "signal distribution",
  "ingeractive display",
  "presentaion aids",
  "VR and AR equipment",
  "ineractive display",
  "Others",
];

const lightOptions = [
  "LED lights",
  "conventional lights",
  "lighting control",
  "lighting stands",
  "lighting effects",
  "lighting filters",
  "lighting truss",
  "lighting cables",
  "lighting power",
  "lighting dimmers",
  "lighting consoles",
  "lighting software",
  "lighting fixtures",
  "lighting controllers",
  "lighting accessories",
  "Others",
];

type PricingEntry = {
  name: string;
  min: number;
  max: number;
};

export interface page5Props {
  selectedAudioOptions: string[];
  setSelectedAudioOptions: (value: any) => void;
  selectedvisualOptions: string[];
  setSelectedVisualOptions: (value: any) => void;
  selectedLightOptions: string[];
  setSelectedLightOptions: (value: any) => void;
  percentageValuePage4: number;
  percentageValuePage5: number;
  furnitureHourlyPricingEntries: any;
  tentHourlyPricingEntries: any;
  handleAddPricingEntry: (entry: PricingEntry) => void;
  updateFormState: (value: any) => void;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

function Page5({
  selectedAudioOptions,
  setSelectedAudioOptions,
  selectedvisualOptions,
  setSelectedVisualOptions,
  selectedLightOptions,
  setSelectedLightOptions,
  updateFormState,
  currentPage,
  setCurrentPage,
}: page5Props) {
  return (
    <>
      <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
        <div className="flex min-h-full min-w-full flex-col gap-5">
          <h1 className="text-3xl font-semibold">Audio-Visual Rentals</h1>
          <div className="flex min-w-[40%] flex-col">
            <label className="text-xl font-semibold" htmlFor="category">
              Upload list
            </label>
            <p className="text-gray-500">PNG, PDF, JPG</p>
            {/* <button className="mt-2 flex w-1/3 items-center justify-center gap-5 rounded-xl border-2 bg-gray-200 px-9 py-3 text-[#2E3192] hover:bg-[#2E3192] hover:text-white">
              <Upload />
              Upload
              <input
                type="file"
                id="audioVisualListUrl"
                name="audioVisualListUrl"
                accept="image/png, .pdf, image/jpg"
                onChange={(e) => {
                  const file = e.target.files![0];
                  updateFormState({
                    audioVisualListUrl: e.target.files![0],
                  });
                }}
              />
            </button> */}
            <FileInput
              label="audio visual list"
              onFileSelect={(file) => {
                updateFormState({ audioVisualListUrl: file });
              }}
              acceptedFileTypes="image/png, .pdf, image/jpg"
            />
          </div>
        </div>
      </div>

      <div className="mx-12 flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
        <div className="flex min-h-full min-w-full flex-col gap-5">
          <h1 className="text-3xl font-semibold">Audio Equipment</h1>
          <Appetizers
            field={"audioOptions"}
            appetizers={audioOptions}
            selectedAppetizers={selectedAudioOptions}
            setSelectedAppetizers={setSelectedAudioOptions}
          />
        </div>
      </div>

      <div className="mx-12 flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
        <div className="flex min-h-full min-w-full flex-col gap-5">
          <h1 className="text-3xl font-semibold">Visual Equipment </h1>
          <Appetizers
            field={"visualOptions"}
            appetizers={visualOptions}
            selectedAppetizers={selectedvisualOptions}
            setSelectedAppetizers={setSelectedVisualOptions}
          />
        </div>
      </div>

      <div className="mx-12 flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
        <div className="flex min-h-full min-w-full flex-col gap-5">
          <h1 className="text-3xl font-semibold">Light Equipment</h1>
          <Appetizers
            field={"lightOptions"}
            appetizers={lightOptions}
            selectedAppetizers={selectedLightOptions}
            setSelectedAppetizers={setSelectedLightOptions}
          />
        </div>
      </div>

      <div className="mx-12 flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
        <div className="flex min-h-full min-w-full flex-col gap-5">
          <h1 className="text-3xl font-semibold">Pricing Structure</h1>

          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-semibold">Hourly Package Rates</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement; // Type assertion to HTMLFormElement
                const name = (
                  form.elements.namedItem("name") as HTMLInputElement
                ).value;
                const minRate = parseInt(
                  (form.elements.namedItem("minRate") as HTMLInputElement)
                    .value,
                );
                const maxRate = parseInt(
                  (form.elements.namedItem("maxRate") as HTMLInputElement)
                    .value,
                );
                // handleAddPricingEntry('hourly', { name, min: minRate, max: maxRate });
              }}
            >
              <div className="flex gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Service Name"
                  className="rounded border p-2"
                />
                <input
                  type="number"
                  name="minRate"
                  placeholder="Min Rate"
                  className="rounded border p-2"
                />
                <input
                  type="number"
                  name="maxRate"
                  placeholder="Max Rate"
                  className="rounded border p-2"
                />
                <button
                  type="submit"
                  className="cursor-pointer rounded-lg bg-[#E6E6E6] p-2 hover:shadow-xl"
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
            </form>

            <ul>
              {/* {hourlypackageRates.map((entry, index) => (
          <li key={index}>{`${entry.name}: ${entry.min} - ${entry.max}`}</li>
        ))} */}
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-5">
            <h2 className="text-2xl font-semibold">Deal Package Rates</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const name = (
                  form.elements.namedItem("name") as HTMLInputElement
                ).value;
                const minRate = parseInt(
                  (form.elements.namedItem("minRate") as HTMLInputElement)
                    .value,
                );
                const maxRate = parseInt(
                  (form.elements.namedItem("maxRate") as HTMLInputElement)
                    .value,
                );
                // handleAddPricingEntry('deal', { name, min: minRate, max: maxRate });
              }}
            >
              <div className="flex gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Service Name"
                  className="rounded border p-2"
                />
                <input
                  type="number"
                  name="minRate"
                  placeholder="Min Rate"
                  className="rounded border p-2"
                />
                <input
                  type="number"
                  name="maxRate"
                  placeholder="Max Rate"
                  className="rounded border p-2"
                />
                <button
                  type="submit"
                  className="cursor-pointer rounded-lg bg-[#E6E6E6] p-2 hover:shadow-xl"
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
                </button>{" "}
              </div>
            </form>
            <ul>
              {/* {dealpackageRates.map((entry, index) => (
          <li key={index}>{`${entry.name}: ${entry.min} - ${entry.max}`}</li>
        ))} */}
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-5">
            <h2 className="text-2xl font-semibold">Rates by Workers</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const name = (
                  form.elements.namedItem("name") as HTMLInputElement
                ).value;
                const minRate = parseInt(
                  (form.elements.namedItem("minRate") as HTMLInputElement)
                    .value,
                );
                const maxRate = parseInt(
                  (form.elements.namedItem("maxRate") as HTMLInputElement)
                    .value,
                );
                // handleAddPricingEntry('worker', { name, min: minRate, max: maxRate });
              }}
            >
              <div className="flex gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Service Name"
                  className="rounded border p-2"
                />
                <input
                  type="number"
                  name="minRate"
                  placeholder="Min Rate"
                  className="rounded border p-2"
                />
                <input
                  type="number"
                  name="maxRate"
                  placeholder="Max Rate"
                  className="rounded border p-2"
                />
                <button
                  type="submit"
                  className="cursor-pointer rounded-lg bg-[#E6E6E6] p-2 hover:shadow-xl"
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
                </button>{" "}
              </div>
            </form>
            <ul>
              {/* {ratesByWorkers.map((entry, index) => (
          <li key={index}>{`${entry.name}: ${entry.min} - ${entry.max}`}</li>
        ))} */}
            </ul>
          </div>
          {/* Button container */}
          <div className="mr-[5%] flex w-full justify-end gap-[32px]">
            {/* Previous Button */}
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
            >
              Previous
            </button>

            {/* Next Button */}
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page5;
