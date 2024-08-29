"use client";

import { Combobox } from "@/components/ui/combobox";
import Appetizers from "../(components)/Appetizers";

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

interface FormState {
  venueType: string;
  venueDescription: string;
  decorType: string;
  // audioVisualEquipment: string[];
  // accessibilityFeatures: string[];
  //facilities: string[];
}

interface Page2Props {
  audioVisualEquipment: string[];
  setAudioVisualEquipment: React.Dispatch<React.SetStateAction<string[]>>;
  accessibilityFeatures: string[];
  setAccessibilityFeatures: React.Dispatch<React.SetStateAction<string[]>>;
  facilities: string[];
  setFacilities: React.Dispatch<React.SetStateAction<string[]>>;

  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
  handleContinue: () => void;
}

const Page2: React.FC<Page2Props> = ({
  formState,
  updateFormState,
  audioVisualEquipment,
  setAudioVisualEquipment,
  accessibilityFeatures,
  setAccessibilityFeatures,
  facilities,
  setFacilities,
  handleContinue,
}) => {
  const { decorType } = formState;

  return (
    <div className="flex flex-col items-start gap-7 overflow-y-scroll rounded-xl bg-white p-3 xs:w-[100%] xs:min-w-[90%] xs:justify-start md:p-6">
      <div className="flex flex-col gap-7 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
        <div className="flex gap-9">
          <h1 className="text-3xl font-semibold">Venue Feature details</h1>
        </div>
        <div className="flex min-h-full min-w-full flex-col items-center gap-5">
          <div className="flex min-w-full flex-col items-start justify-between gap-2">
            <div className="flex min-w-[40%] flex-col gap-4">
              <label htmlFor="category">Decor Services</label>
              <Combobox
                options={_decorTypes}
                placeholder="Select Decor Type"
                setFunction={(value) => updateFormState({ decorType: value })}
                className="flex items-center justify-between rounded-xl border-2 py-6 hover:text-[#2E3192]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
        <h1 className="text-3xl font-semibold">
          Audio and visual Equipment you provide{" "}
        </h1>
        <div className="flex min-h-full min-w-full flex-col items-center gap-5">
          <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
            <Appetizers
              appetizers={_audioEquipment}
              selectedAppetizers={audioVisualEquipment}
              setSelectedAppetizers={setAudioVisualEquipment}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
        <h1 className="text-3xl font-semibold">
          Accessibility Features at your Venue{" "}
        </h1>
        <div className="flex min-h-full min-w-full flex-col items-center gap-5">
          <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
            <Appetizers
              appetizers={_accessibilityFeatures}
              selectedAppetizers={accessibilityFeatures}
              setSelectedAppetizers={setAccessibilityFeatures}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-9 rounded-xl bg-white p-3 xs:min-w-[90%] md:p-6">
        <h1 className="text-3xl font-semibold">Facilities at your Venue</h1>
        <div className="flex min-h-full min-w-full flex-col items-center gap-5">
          <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
            <Appetizers
              appetizers={_facilities}
              selectedAppetizers={facilities}
              setSelectedAppetizers={setFacilities}
            />
          </div>
          <div className="items-strech mt-9 flex flex-row gap-7 self-end">
            <button
              className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:w-fit xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
              onClick={handleContinue}
            >
              Skip
            </button>
            <button
              className="rounded-xl bg-[#2E3192] text-white xs:w-fit xs:px-4 xs:py-3 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
