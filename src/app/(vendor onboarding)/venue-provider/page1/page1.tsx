"use client";

import { Combobox } from "@/components/ui/combobox";

const venueTypes = [
  { value: "indoor", label: "Indoor" },
  { value: "outdoor", label: "Outdoor" },
  { value: "both", label: "Both" },
];

const seatingOptions = [
  { value: "", label: "Seated" },
  { value: "less than 100", label: "<100 persons" },
  { value: "300", label: "100-300 persons" },
  { value: "400", label: "300-400 persons" },
  { value: "500", label: "> 500 persons" },
];

const standingOptions = [
  { value: "", label: "Seated" },
  { value: "less than 100", label: "<100 persons" },
  { value: "300", label: "100-300 persons" },
  { value: "400", label: "300-400 persons" },
  { value: "500", label: "> 500 persons" },
];

const timeOptions = [
  { value: "00:00", label: "00:01 AM" },
  { value: "01:00", label: "01:00 AM" },
  { value: "02:00", label: "02:00 AM" },
  { value: "03:00", label: "03:00 AM" },
  { value: "04:00", label: "04:00 AM" },
  { value: "05:00", label: "05:00 AM" },
  { value: "06:00", label: "06:00 AM" },
  { value: "07:00", label: "07:00 AM" },
  { value: "08:00", label: "08:00 AM" },
  { value: "09:00", label: "09:00 AM" },
  { value: "10:00", label: "10:00 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "12:00", label: "12:00 PM" },
  { value: "13:00", label: "1:00 PM" },
  { value: "14:00", label: "2:00 PM" },
  { value: "15:00", label: "3:00 PM" },
  { value: "16:00", label: "4:00 PM" },
  { value: "17:00", label: "5:00 PM" },
  { value: "18:00", label: "6:00 PM" },
  { value: "19:00", label: "7:00 PM" },
  { value: "20:00", label: "8:00 PM" },
  { value: "21:00", label: "9:00 PM" },
  { value: "22:00", label: "10:00 PM" },
  { value: "23:00", label: "11:00 PM" },
  { value: "24:00", label: "11:59 PM" },
];

interface FormState {
  venueName: string;
  VenueAddress: string;
  venueType: string;
  seatingCapacity: string;
  standingCapacity: string;
  startOperatingHours: string;
  endOperatingHours: string;
  venueDescription: string;
}

interface Page1Props {
  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
  handleContinue: () => void;
}

const Page1: React.FC<Page1Props> = ({
  formState,
  updateFormState,
  handleContinue,
}) => {
  const {
    venueName,
    VenueAddress,
    venueType,
    seatingCapacity,
    standingCapacity,
    startOperatingHours,
    endOperatingHours,
    venueDescription,
  } = formState;

  return (
    <div className="flex flex-col items-start gap-7 overflow-y-scroll rounded-xl bg-white p-3 xs:w-[100%] xs:min-w-[90%] xs:justify-start md:p-6">
      <h1 className="text-3xl font-semibold">Basic Details</h1>
      <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
        <div className="flex min-w-[40%] flex-col gap-4">
          <label htmlFor="businessName">Venue Name</label>
          <input
            id="businessName"
            type="text"
            className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
            placeholder="Enter your Venue Name"
            value={venueName}
            onChange={(e) => updateFormState({ venueName: e.target.value })}
          />
        </div>
        <div className="flex min-w-[40%] flex-col gap-4">
          <label htmlFor="businessName">Venue Address</label>
          <input
            id="businessName"
            type="text"
            className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
            placeholder="Enter your Venue address"
            value={VenueAddress}
            onChange={(e) => updateFormState({ VenueAddress: e.target.value })}
          />
        </div>
      </div>

      <div className="flex min-h-full min-w-full flex-col items-center gap-5">
        <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
          <div className="flex min-w-[40%] flex-col gap-4">
            <label htmlFor="category">Venue Type</label>
            <Combobox
              options={venueTypes}
              placeholder="Select your category"
              setFunction={(value) => updateFormState({ venueType: value })}
              className="flex items-center justify-between rounded-xl border-2 py-6 hover:text-[#2E3192]"
            />
          </div>
          <div className="flex min-w-[40%] flex-col gap-4">
            <label htmlFor="category">Seating Capacity</label>
            <Combobox
              options={seatingOptions}
              placeholder="Select your category"
              setFunction={(value) =>
                updateFormState({ seatingCapacity: value })
              }
              className="flex items-center justify-between rounded-xl border-2 py-6 hover:text-[#2E3192]"
            />
          </div>
        </div>
        <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
          <div className="flex min-w-[40%] flex-col gap-4">
            <label htmlFor="category">Operating hours</label>
            <Combobox
              options={timeOptions}
              placeholder="start timings..."
              setFunction={(value) =>
                updateFormState({ startOperatingHours: value })
              }
              className="flex items-center justify-between rounded-xl border-2 py-6 hover:text-[#2E3192]"
            />
            <Combobox
              options={timeOptions}
              placeholder="ending timings..."
              setFunction={(value) =>
                updateFormState({ endOperatingHours: value })
              }
              className="flex items-center justify-between rounded-xl border-2 py-6 hover:text-[#2E3192]"
            />
          </div>
          <div className="flex min-w-[40%] flex-col gap-4">
            <label htmlFor="category">Standing Capacity</label>
            <Combobox
              options={standingOptions}
              placeholder="Select your category"
              setFunction={(value) =>
                updateFormState({ standingCapacity: value })
              }
              className="flex items-center justify-between rounded-xl border-2 py-6 hover:text-[#2E3192]"
            />
          </div>
        </div>
        <div className="flex min-w-full flex-col items-center justify-between gap-5 md:flex-row">
          <div className="flex min-w-[40%] flex-col gap-4">
            <label htmlFor="businessName">Venue Description</label>
            <input
              id="businessName"
              type="text"
              className="h-[4rem] w-full rounded-xl border-2 bg-white p-3 text-sm outline-none"
              placeholder="Enter your Venue Description"
              value={venueDescription}
              onChange={(e) =>
                updateFormState({ venueDescription: e.target.value })
              }
            />
          </div>
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
  );
};

export default Page1;
