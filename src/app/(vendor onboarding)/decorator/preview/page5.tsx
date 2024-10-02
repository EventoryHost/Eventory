import Appetizers from "../../(components)/Appetizers";
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
            <div className="flex w-[100%] justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
              1. Basic Details
              <div className="align-center flex justify-center p-1">
                <button onClick={() => setCurrentPage(1)}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.5137 3.80454C14.5869 2.72979 16.3274 2.72913 17.4013 3.80307L19.8932 6.29493C20.958 7.35971 20.969 9.08347 19.918 10.1618L10.6849 19.6351C9.97933 20.359 9.01167 20.7672 8.00124 20.7671L5.24909 20.767C3.96984 20.7669 2.94823 19.7006 3.00203 18.4215L3.12019 15.6124C3.15968 14.6734 3.54996 13.7834 4.2138 13.1186L13.5137 3.80454ZM16.3415 4.86454C15.8533 4.37638 15.0622 4.37668 14.5744 4.8652L12.9118 6.53032L17.1916 10.8101L18.8446 9.11408C19.3224 8.62391 19.3173 7.84038 18.8333 7.35639L16.3415 4.86454ZM5.27446 14.1792L11.8519 7.59178L16.1445 11.8844L9.61148 18.5873C9.18816 19.0217 8.60756 19.2666 8.0013 19.2665L5.24916 19.2664C4.82274 19.2664 4.4822 18.9109 4.50014 18.4846L4.61829 15.6756C4.64199 15.1121 4.87616 14.5781 5.27446 14.1792ZM20.5158 20.6948C20.9298 20.6948 21.2655 20.3589 21.2655 19.9445C21.2655 19.5301 20.9298 19.1942 20.5158 19.1942H14.3941C13.98 19.1942 13.6444 19.5301 13.6444 19.9445C13.6444 20.3589 13.98 20.6948 14.3941 20.6948H20.5158Z"
                      fill="#2B3F6C"
                    />
                  </svg>
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
            <div className="flex w-[100%] justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
              2. Themes Offered
              <div className="align-center flex justify-center p-1">
                <button onClick={() => setCurrentPage(2)}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.5137 3.80454C14.5869 2.72979 16.3274 2.72913 17.4013 3.80307L19.8932 6.29493C20.958 7.35971 20.969 9.08347 19.918 10.1618L10.6849 19.6351C9.97933 20.359 9.01167 20.7672 8.00124 20.7671L5.24909 20.767C3.96984 20.7669 2.94823 19.7006 3.00203 18.4215L3.12019 15.6124C3.15968 14.6734 3.54996 13.7834 4.2138 13.1186L13.5137 3.80454ZM16.3415 4.86454C15.8533 4.37638 15.0622 4.37668 14.5744 4.8652L12.9118 6.53032L17.1916 10.8101L18.8446 9.11408C19.3224 8.62391 19.3173 7.84038 18.8333 7.35639L16.3415 4.86454ZM5.27446 14.1792L11.8519 7.59178L16.1445 11.8844L9.61148 18.5873C9.18816 19.0217 8.60756 19.2666 8.0013 19.2665L5.24916 19.2664C4.82274 19.2664 4.4822 18.9109 4.50014 18.4846L4.61829 15.6756C4.64199 15.1121 4.87616 14.5781 5.27446 14.1792ZM20.5158 20.6948C20.9298 20.6948 21.2655 20.3589 21.2655 19.9445C21.2655 19.5301 20.9298 19.1942 20.5158 19.1942H14.3941C13.98 19.1942 13.6444 19.5301 13.6444 19.9445C13.6444 20.3589 13.98 20.6948 14.3941 20.6948H20.5158Z"
                      fill="#2B3F6C"
                    />
                  </svg>
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
                    {formState.propthemesOffered ? "yes" : "no"}
                  </span>
                </div>
                <div className="flex w-1/2 flex-col">
                  <span className="font-poppins text-lg font-medium">
                    Do you adapt themes to different venue sizes ?
                  </span>
                  <span className="font-poppins text-lg font-medium">
                    {formState.adobtThemes ? "yes" : "no"}
                  </span>
                </div>
              </div>
              <div className="flex gap-16 py-2">
                <div className="flex w-1/2 flex-col">
                  <span className="font-poppins text-lg font-medium">
                    Do you adapt themes to different venue sizes ?
                  </span>

                  <span className="font-poppins text-lg font-medium">
                    {formState.colorschmes ? "yes" : "no"}
                  </span>
                </div>
                <div className="flex w-1/2 flex-col">
                  <span className="font-poppins text-lg font-medium">
                    Do you offer customization of themes ?
                  </span>
                  <span className="font-poppins text-lg font-medium">
                    {formState.customizationsThemes ? "yes" : "no"}
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
            <div className="flex w-[100%] justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
              3. Themes Element
              <div className="align-center flex justify-center p-1">
                <button onClick={() => setCurrentPage(3)}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.5137 3.80454C14.5869 2.72979 16.3274 2.72913 17.4013 3.80307L19.8932 6.29493C20.958 7.35971 20.969 9.08347 19.918 10.1618L10.6849 19.6351C9.97933 20.359 9.01167 20.7672 8.00124 20.7671L5.24909 20.767C3.96984 20.7669 2.94823 19.7006 3.00203 18.4215L3.12019 15.6124C3.15968 14.6734 3.54996 13.7834 4.2138 13.1186L13.5137 3.80454ZM16.3415 4.86454C15.8533 4.37638 15.0622 4.37668 14.5744 4.8652L12.9118 6.53032L17.1916 10.8101L18.8446 9.11408C19.3224 8.62391 19.3173 7.84038 18.8333 7.35639L16.3415 4.86454ZM5.27446 14.1792L11.8519 7.59178L16.1445 11.8844L9.61148 18.5873C9.18816 19.0217 8.60756 19.2666 8.0013 19.2665L5.24916 19.2664C4.82274 19.2664 4.4822 18.9109 4.50014 18.4846L4.61829 15.6756C4.64199 15.1121 4.87616 14.5781 5.27446 14.1792ZM20.5158 20.6948C20.9298 20.6948 21.2655 20.3589 21.2655 19.9445C21.2655 19.5301 20.9298 19.1942 20.5158 19.1942H14.3941C13.98 19.1942 13.6444 19.5301 13.6444 19.9445C13.6444 20.3589 13.98 20.6948 14.3941 20.6948H20.5158Z"
                      fill="#2B3F6C"
                    />
                  </svg>
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
            <div className="flex w-[100%] justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
              4. Consultation Details
              <div className="align-center flex justify-center p-1">
                <button onClick={() => setCurrentPage(4)}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.5137 3.80454C14.5869 2.72979 16.3274 2.72913 17.4013 3.80307L19.8932 6.29493C20.958 7.35971 20.969 9.08347 19.918 10.1618L10.6849 19.6351C9.97933 20.359 9.01167 20.7672 8.00124 20.7671L5.24909 20.767C3.96984 20.7669 2.94823 19.7006 3.00203 18.4215L3.12019 15.6124C3.15968 14.6734 3.54996 13.7834 4.2138 13.1186L13.5137 3.80454ZM16.3415 4.86454C15.8533 4.37638 15.0622 4.37668 14.5744 4.8652L12.9118 6.53032L17.1916 10.8101L18.8446 9.11408C19.3224 8.62391 19.3173 7.84038 18.8333 7.35639L16.3415 4.86454ZM5.27446 14.1792L11.8519 7.59178L16.1445 11.8844L9.61148 18.5873C9.18816 19.0217 8.60756 19.2666 8.0013 19.2665L5.24916 19.2664C4.82274 19.2664 4.4822 18.9109 4.50014 18.4846L4.61829 15.6756C4.64199 15.1121 4.87616 14.5781 5.27446 14.1792ZM20.5158 20.6948C20.9298 20.6948 21.2655 20.3589 21.2655 19.9445C21.2655 19.5301 20.9298 19.1942 20.5158 19.1942H14.3941C13.98 19.1942 13.6444 19.5301 13.6444 19.9445C13.6444 20.3589 13.98 20.6948 14.3941 20.6948H20.5158Z"
                      fill="#2B3F6C"
                    />
                  </svg>
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
                    {formState.revisionforinitialthemeproposal ? "yes" : "no"}
                  </p>
                </div>
                <div className="flex w-1/2 flex-col">
                  <span className="mb-2 font-poppins text-lg font-medium">
                    Do you provide a written theme proposal after consultation?
                  </span>

                  <p className="font-poppins text-lg font-medium">
                    {formState.writtenthemeproposalafterconsultaion
                      ? "yes"
                      : "no"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-9">
            <div className="flex w-[100%] justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
              5. Policies
              <div className="align-center flex justify-center p-1">
                <button onClick={() => setCurrentPage(5)}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.5137 3.80454C14.5869 2.72979 16.3274 2.72913 17.4013 3.80307L19.8932 6.29493C20.958 7.35971 20.969 9.08347 19.918 10.1618L10.6849 19.6351C9.97933 20.359 9.01167 20.7672 8.00124 20.7671L5.24909 20.767C3.96984 20.7669 2.94823 19.7006 3.00203 18.4215L3.12019 15.6124C3.15968 14.6734 3.54996 13.7834 4.2138 13.1186L13.5137 3.80454ZM16.3415 4.86454C15.8533 4.37638 15.0622 4.37668 14.5744 4.8652L12.9118 6.53032L17.1916 10.8101L18.8446 9.11408C19.3224 8.62391 19.3173 7.84038 18.8333 7.35639L16.3415 4.86454ZM5.27446 14.1792L11.8519 7.59178L16.1445 11.8844L9.61148 18.5873C9.18816 19.0217 8.60756 19.2666 8.0013 19.2665L5.24916 19.2664C4.82274 19.2664 4.4822 18.9109 4.50014 18.4846L4.61829 15.6756C4.64199 15.1121 4.87616 14.5781 5.27446 14.1792ZM20.5158 20.6948C20.9298 20.6948 21.2655 20.3589 21.2655 19.9445C21.2655 19.5301 20.9298 19.1942 20.5158 19.1942H14.3941C13.98 19.1942 13.6444 19.5301 13.6444 19.9445C13.6444 20.3589 13.98 20.6948 14.3941 20.6948H20.5158Z"
                      fill="#2B3F6C"
                    />
                  </svg>
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
