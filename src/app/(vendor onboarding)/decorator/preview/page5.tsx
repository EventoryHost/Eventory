import { EditIcon } from "lucide-react";
import Appetizers from "../../(components)/PreviewAppetizer";
import FileDisplay from "../../caterer/(components)/File";
import { FormState } from "../page";

type PagePreviewProps = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
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

  formState: FormState;
  updateFormState: (newState: Partial<FormState>) => void;
  themesOffered: string[];
  setThemesOffered: React.Dispatch<React.SetStateAction<string[]>>;

  themesElements: string[];
  setThemesElements: React.Dispatch<React.SetStateAction<string[]>>;
  handleContinue: () => void;
};

function Preview({
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
  formState,
  updateFormState,
  themesOffered,
  setThemesOffered,
  themesElements,
  setThemesElements,
  handleContinue,
  setCurrentPage,
}: PagePreviewProps) {
  return (
    <div className="flex h-full flex-col items-start justify-start gap-5 overflow-y-scroll scrollbar-hide">
      <div className="flex min-w-full flex-col items-start justify-around gap-10">
        <div className="flex w-[100%] flex-col gap-7 rounded-xl bg-white p-4 xs:min-w-[90%] md:p-6">
          <div className="flex items-center justify-start gap-5">
            <svg
              onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3233 10L6.35314 13.9702C5.88229 14.441 5.88229 15.2044 6.35314 15.6753L10.3233 19.6455M6.70627 14.8227L23.5858 14.8227"
                stroke="#2B3F6C"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            <div className="flex">
              <h1 className="text-3xl font-semibold">Decoration</h1>
            </div>
          </div>

          <div className="flex gap-9">
            <div className="flex w-full items-center justify-between rounded-xl bg-[#F0EFFC] p-2 pl-4 text-xl font-semibold">
              1. Basic Details
              <div className="align-center flex justify-center p-1">
                <button onClick={() => setCurrentPage(1)}>
                  <EditIcon size={28} />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="mt-4 flex flex-col justify-start gap-6">
              <div className="flex items-start justify-between">
                <div className="w-[50%]">
                  <h2 className="font-poppins text-lg font-medium">
                    Full Name (POC)
                  </h2>
                  <h3 className="font-helvetica text-lg font-semibold">
                    {formState.businessName}
                  </h3>
                </div>
                <div className="w-[50%]">
                  <h2 className="font-poppins text-lg font-medium">
                    Event Size
                  </h2>
                  <h3 className="font-helvetica text-lg font-semibold">
                    {formState.eventsize}
                  </h3>
                </div>
              </div>
              <div>
                <h2 className="font-poppins text-lg font-medium">
                  Decoration Setup Duration
                </h2>
                <h3 className="font-helvetica text-lg font-semibold">
                  {formState.duration}
                </h3>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-6">
              <span className="text-xl font-medium">Types of Event</span>
              <Appetizers
                appetizers={typeOfevents}
                selectedAppetizers={typeOfevents}
                setSelectedAppetizers={setTypesOfEvents}
              />
            </div>

            <div className="mt-4 flex flex-col gap-6">
              <span className="text-xl font-medium">Wedding Events</span>
              <Appetizers
                appetizers={weddingEvents}
                selectedAppetizers={weddingEvents}
                setSelectedAppetizers={setWeddingEvents}
              />
            </div>
            <div className="mt-4 flex flex-col gap-6">
              <span className="text-xl font-medium">Corporate Events</span>
              <Appetizers
                appetizers={corporateEvents}
                selectedAppetizers={corporateEvents}
                setSelectedAppetizers={setCorporateEvents}
              />
            </div>
            <div className="mt-4 flex flex-col gap-6">
              <span className="text-xl font-medium">Seasonal Event</span>
              <Appetizers
                appetizers={seasonalEvents}
                selectedAppetizers={seasonalEvents}
                setSelectedAppetizers={setSeasonalEvents}
              />
            </div>
            <div className="mt-4 flex flex-col gap-6">
              <span className="text-xl font-medium">Cultural Events</span>
              <Appetizers
                appetizers={culturalEvents}
                selectedAppetizers={culturalEvents}
                setSelectedAppetizers={setCulturalEvents}
              />
            </div>
          </div>

          <div className="flex gap-9">
            <div className="flex w-full items-center justify-between rounded-xl bg-[#F0EFFC] p-2 pl-4 text-xl font-semibold">
              2. Themes Offered
              <div className="align-center flex justify-center p-1">
                <button onClick={() => setCurrentPage(2)}>
                  <EditIcon size={28} />
                </button>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="my-4 flex flex-col gap-6">
              <span className="text-xl font-medium">Themes</span>
              <Appetizers
                appetizers={themesOffered}
                selectedAppetizers={themesOffered}
                setSelectedAppetizers={setThemesOffered}
              />
            </div>

            <div className="w-[100%] gap-6 font-semibold">
              <div className="flex gap-16 py-2">
                <div className="flex w-1/2 flex-col">
                  <span className="font-poppins text-lg font-medium text-black">
                    Do you offer prop selection for themes ?
                  </span>

                  <span className="font-poppins text-lg font-medium">
                    {formState.propthemesOffered === null
                      ? ""
                      : formState.propthemesOffered
                        ? "yes"
                        : "no"}
                  </span>
                </div>
                <div className="flex w-1/2 flex-col">
                  <span className="font-poppins text-lg font-medium">
                    Do you adapt themes to different venue sizes ?
                  </span>
                  <span className="font-poppins text-lg font-medium">
                    {formState.adobtThemes === null
                      ? ""
                      : formState.adobtThemes
                        ? "yes"
                        : "no"}
                  </span>
                </div>
              </div>
              <div className="flex gap-16 py-2">
                <div className="flex w-1/2 flex-col">
                  <span className="font-poppins text-lg font-medium">
                    Do you adapt themes to different venue sizes ?
                  </span>

                  <span className="font-poppins text-lg font-medium">
                    {formState.colorschmes === null
                      ? ""
                      : formState.colorschmes
                        ? "yes"
                        : "no"}
                  </span>
                </div>
                <div className="flex w-1/2 flex-col">
                  <span className="font-poppins text-lg font-medium">
                    Do you offer customization of themes ?
                  </span>
                  <span className="font-poppins text-lg font-medium">
                    {formState.customizationsThemes === null
                      ? ""
                      : formState.customizationsThemes
                        ? "yes"
                        : "no"}
                  </span>
                </div>
              </div>
              <div className="mt-4 flex w-3/4 flex-col">
                <span className="font-poppins text-lg font-medium">
                  Custom design process
                </span>
                <span className="mt-2 font-poppins text-lg font-medium">
                  {formState.customDesignProcess}
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-9">
            <div className="flex w-full items-center justify-between rounded-xl bg-[#F0EFFC] p-2 pl-4 text-xl font-semibold">
              3. Themes Element
              <div className="align-center flex justify-center p-1">
                <button onClick={() => setCurrentPage(3)}>
                  <EditIcon size={28} />
                </button>
              </div>
            </div>
          </div>

          <div className="w-full gap-6">
            <div className="mt-4 flex flex-col gap-6">
              <span className="text-xl font-medium">Themes Elements</span>
              <Appetizers
                appetizers={themesElements}
                selectedAppetizers={themesElements}
                setSelectedAppetizers={setThemesElements}
              />
            </div>

            <div className="mt-6 flex gap-6">
              <div className="mt-6 flex min-w-[50%] max-w-[50%] flex-col gap-1">
                <span className="text-base font-medium">Theme Photos</span>
                <div className="font-semibold">
                  {Array.isArray(formState.themephotos) ? (
                    <FileDisplay files={formState.themephotos} />
                  ) : (
                    <div>Not specified</div>
                  )}
                </div>
              </div>
              <div className="mt-6 flex min-w-[50%] max-w-[50%] flex-col gap-1">
                <span className="text-base font-medium">Theme videos</span>
                <div className="font-semibold">
                  {Array.isArray(formState.themevideos) ? (
                    <FileDisplay files={formState.themevideos} />
                  ) : (
                    <div>Not specified</div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-9">
            <div className="flex w-full items-center justify-between rounded-xl bg-[#F0EFFC] p-2 pl-4 text-xl font-semibold">
              4. Consultation Details
              <div className="align-center flex justify-center p-1">
                <button onClick={() => setCurrentPage(4)}>
                  <EditIcon size={28} />
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="mt-6 flex min-w-[50%] max-w-[50%] flex-col gap-1">
              <span className="text-base font-medium">Photos</span>
              <div className="font-semibold">
                {Array.isArray(formState.photos) ? (
                  <FileDisplay files={formState.photos} />
                ) : (
                  <div>Not specified</div>
                )}
              </div>
            </div>
            <div className="mt-6 flex min-w-[50%] max-w-[50%] flex-col gap-1">
              <span className="text-base font-medium">Videos</span>
              <div className="font-semibold">
                {Array.isArray(formState.videos) ? (
                  <FileDisplay files={formState.videos} />
                ) : (
                  <div>Not specified</div>
                )}
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-col justify-start gap-6">
            <div className="flex items-start justify-between">
              <div className="w-[50%]">
                <h2 className="font-poppins text-lg font-medium">
                  Awards/Recognition
                </h2>
                <h3 className="font-helvetica text-lg font-medium">
                  {formState.Recongnition_awards}
                </h3>
              </div>
              <div className="w-[50%]">
                <h2 className="font-poppins text-lg font-medium">
                  Client Testimonials
                </h2>
                <h3 className="font-helvetica text-lg font-medium">
                  {formState.clientTestimonials}
                </h3>
              </div>
            </div>
            <div className="flex items-start justify-between">
              <div className="w-[50%]">
                <h2 className="] font-poppins text-lg font-medium">
                  Instagram URL
                </h2>
                <h3 className="font-helvetica text-lg font-medium">
                  {formState.intstagramurl}
                </h3>
              </div>
              <div className="w-[50%]">
                <h2 className="font-poppins text-lg font-medium">
                  Website URL
                </h2>
                <h3 className="font-helvetica text-lg font-medium">
                  {formState.websiteurl}
                </h3>
              </div>
            </div>
            <div>
              <h2 className="font-poppins text-lg font-medium">
                Advance Booking Period ?
              </h2>
              <h3 className="font-helvetica text-lg font-medium">
                {formState.advbookingperiod}
              </h3>
            </div>
          </div>
          <div className="w-full">
            <div className="w-[100%]">
              <div className="mb-4 flex gap-16 py-2">
                <div className="flex w-1/2 flex-col">
                  <span className="mb-2 font-poppins text-lg font-medium">
                    Do you offer revisions to the initial theme proposal?
                  </span>

                  <p className="font-poppins text-lg font-medium">
                    {formState.revisionforinitialthemeproposal === null
                      ? ""
                      : formState.revisionforinitialthemeproposal
                        ? "yes"
                        : "no"}
                  </p>
                </div>
                <div className="flex w-1/2 flex-col">
                  <span className="mb-2 font-poppins text-lg font-medium">
                    Do you provide a written theme proposal after consultation?
                  </span>

                  <p className="font-poppins text-lg font-medium">
                    {formState.writtenthemeproposalafterconsultaion === null
                      ? ""
                      : formState.writtenthemeproposalafterconsultaion
                        ? "yes"
                        : "no"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-9">
            <div className="flex w-full items-center justify-between rounded-xl bg-[#F0EFFC] p-2 pl-4 text-xl font-semibold">
              5. Policies
              <div className="align-center flex justify-center p-1">
                <button onClick={() => setCurrentPage(5)}>
                  <EditIcon size={28} />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex gap-2">
              <div className="mt-6 flex min-w-[50%] max-w-[50%] flex-col gap-1">
                <span className="text-base font-normal">
                  Terms And Conditions
                </span>
                <div className="font-semibold">
                  {Array.isArray(formState.termsAndConditions) ? (
                    <FileDisplay files={formState.termsAndConditions} />
                  ) : (
                    <div>Not specified</div>
                  )}
                </div>
              </div>
              <div className="m-6 mt-6 flex min-w-[50%] max-w-[50%] flex-col gap-1">
                <span className="text-base font-normal">
                  Cancellation Policy
                </span>
                <div className="font-semibold">
                  {Array.isArray(formState.cancellationPolicy) ? (
                    <FileDisplay files={formState.cancellationPolicy} />
                  ) : (
                    <div>Not specified</div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-9 flex flex-row items-stretch gap-7 self-end bg-white">
            <button
              className="rounded-xl border-2 border-[#2E3192] text-[#2E3192] xs:px-3 xs:py-2 md:w-fit md:min-w-[10rem] md:px-4 md:py-3"
              onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
            >
              Back
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
}

export default Preview;
