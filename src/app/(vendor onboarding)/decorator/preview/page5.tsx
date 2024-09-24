import Appetizers from "../../(components)/Appetizers";
import File from "../../caterer/(components)/File";
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
    <div className="flex h-full flex-col items-start justify-start gap-5  overflow-y-scroll scrollbar-hide xs:w-[95%] xs:min-w-[90%]">
      <div className="flex min-w-full flex-col items-start justify-around gap-10">
        <div className="flex w-[100%] flex-col gap-7 rounded-xl bg-white p-4 xs:min-w-[90%] md:p-6">
          <div className="flex justify-start gap-5 items-center">
            <svg onClick={() => setCurrentPage((prevPage) => prevPage - 1)} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.3233 10L6.35314 13.9702C5.88229 14.441 5.88229 15.2044 6.35314 15.6753L10.3233 19.6455M6.70627 14.8227L23.5858 14.8227" stroke="#2B3F6C" stroke-width="1.5" stroke-linecap="round" />
            </svg>
            <div className="flex"><h1 className="text-3xl font-semibold">Decoration</h1></div>
          </div>

          <div className="flex gap-9">
            <div className="flex w-[100%] justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
              1. Basic Details
              <div className="align-center flex justify-center p-1">
                <button onClick={() => setCurrentPage(1)}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5137 3.80454C14.5869 2.72979 16.3274 2.72913 17.4013 3.80307L19.8932 6.29493C20.958 7.35971 20.969 9.08347 19.918 10.1618L10.6849 19.6351C9.97933 20.359 9.01167 20.7672 8.00124 20.7671L5.24909 20.767C3.96984 20.7669 2.94823 19.7006 3.00203 18.4215L3.12019 15.6124C3.15968 14.6734 3.54996 13.7834 4.2138 13.1186L13.5137 3.80454ZM16.3415 4.86454C15.8533 4.37638 15.0622 4.37668 14.5744 4.8652L12.9118 6.53032L17.1916 10.8101L18.8446 9.11408C19.3224 8.62391 19.3173 7.84038 18.8333 7.35639L16.3415 4.86454ZM5.27446 14.1792L11.8519 7.59178L16.1445 11.8844L9.61148 18.5873C9.18816 19.0217 8.60756 19.2666 8.0013 19.2665L5.24916 19.2664C4.82274 19.2664 4.4822 18.9109 4.50014 18.4846L4.61829 15.6756C4.64199 15.1121 4.87616 14.5781 5.27446 14.1792ZM20.5158 20.6948C20.9298 20.6948 21.2655 20.3589 21.2655 19.9445C21.2655 19.5301 20.9298 19.1942 20.5158 19.1942H14.3941C13.98 19.1942 13.6444 19.5301 13.6444 19.9445C13.6444 20.3589 13.98 20.6948 14.3941 20.6948H20.5158Z" fill="#2B3F6C" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="mt-4 gap-6 justify-start flex flex-col">
              <div className="flex justify-between items-start">
                <div className="w-[50%]">
                  <h2 className="text-lg text-[#263238] font-medium font-poppins">Full Name (POC)</h2>
                  <h3 className="text-lg text-[#263238] font-semibold font-helvetica">{formState.businessName}</h3>
                </div>
                <div className="w-[50%]">
                  <h2 className="text-lg text-[#263238] font-medium font-poppins">Event Size</h2>
                  <h3 className="text-lg text-[#263238] font-semibold font-helvetica">{formState.eventsize}</h3>
                </div>
              </div>
              <div>
                <h2 className="text-lg text-[#263238] font-medium font-poppins">Decoration Setup Duration</h2>
                <h3 className="text-lg text-[#263238] font-semibold font-helvetica">{formState.duration}</h3>
              </div>
            </div>
            <div className="mt-4 gap-6 flex flex-col">
              <span className="text-xl">Types of Event</span>
              <Appetizers
                appetizers={typeOfevents}
                selectedAppetizers={typeOfevents}
                setSelectedAppetizers={setTypesOfEvents}
              />
            </div>

            <div className="mt-4 gap-6 flex flex-col">
              <span className="text-xl">Wedding Events</span>
              <Appetizers
                appetizers={weddingEvents}
                selectedAppetizers={weddingEvents}
                setSelectedAppetizers={setWeddingEvents}
              />
            </div>
            <div className="gap-6 mt-4 flex flex-col">
              <span className="text-xl">Corporate Events</span>
              <Appetizers
                appetizers={corporateEvents}
                selectedAppetizers={corporateEvents}
                setSelectedAppetizers={setCorporateEvents}
              />
            </div>
            <div className="gap-6 mt-4 flex flex-col">
              <span className="text-xl">Seasonal Event</span>
              <Appetizers
                appetizers={seasonalEvents}
                selectedAppetizers={seasonalEvents}
                setSelectedAppetizers={setSeasonalEvents}
              />
            </div>
            <div className="gap-6 mt-4 flex flex-col">
              <span className="text-xl">Cultural Events</span>
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
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5137 3.80454C14.5869 2.72979 16.3274 2.72913 17.4013 3.80307L19.8932 6.29493C20.958 7.35971 20.969 9.08347 19.918 10.1618L10.6849 19.6351C9.97933 20.359 9.01167 20.7672 8.00124 20.7671L5.24909 20.767C3.96984 20.7669 2.94823 19.7006 3.00203 18.4215L3.12019 15.6124C3.15968 14.6734 3.54996 13.7834 4.2138 13.1186L13.5137 3.80454ZM16.3415 4.86454C15.8533 4.37638 15.0622 4.37668 14.5744 4.8652L12.9118 6.53032L17.1916 10.8101L18.8446 9.11408C19.3224 8.62391 19.3173 7.84038 18.8333 7.35639L16.3415 4.86454ZM5.27446 14.1792L11.8519 7.59178L16.1445 11.8844L9.61148 18.5873C9.18816 19.0217 8.60756 19.2666 8.0013 19.2665L5.24916 19.2664C4.82274 19.2664 4.4822 18.9109 4.50014 18.4846L4.61829 15.6756C4.64199 15.1121 4.87616 14.5781 5.27446 14.1792ZM20.5158 20.6948C20.9298 20.6948 21.2655 20.3589 21.2655 19.9445C21.2655 19.5301 20.9298 19.1942 20.5158 19.1942H14.3941C13.98 19.1942 13.6444 19.5301 13.6444 19.9445C13.6444 20.3589 13.98 20.6948 14.3941 20.6948H20.5158Z" fill="#2B3F6C" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="gap-6 my-4 flex flex-col">
              <span className="text-xl">Themes</span>
              <Appetizers
                appetizers={themesOffered}
                selectedAppetizers={themesOffered}
                setSelectedAppetizers={setThemesOffered}
              />
            </div>

            <div className="w-[100%] gap-6 font-semibold">
              <div className="flex gap-16 py-2">
                <div className="flex w-1/2 flex-col">
                  <span className="text-lg text-black font-medium font-poppins">
                    Do you offer prop selection for themes ?
                  </span>

                  <span className="text-lg  font-poppins">
                    {formState.propthemesOffered ? "yes" : "no"}
                  </span>
                </div>
                <div className="flex w-1/2 flex-col">
                  <span className="text-lg font-medium font-poppins">
                    Do you adapt themes to different venue sizes ?
                  </span>
                  <span className="text-lg  font-poppins">
                    {formState.adobtThemes ? "yes" : "no"}
                  </span>
                </div>
              </div>
              <div className="flex gap-16 py-2">
                <div className="flex w-1/2 flex-col">
                  <span className="text-lg font-medium font-poppins">
                    Do you adapt themes to different venue sizes ?
                  </span>

                  <span className="text-lg  font-poppins">
                    {formState.colorschmes ? "yes" : "no"}
                  </span>
                </div>
                <div className="flex w-1/2 flex-col">
                  <span className="text-lg font-medium font-poppins">
                    Do you offer customization of themes ?
                  </span>
                  <span className="text-lg  font-poppins">
                    {formState.customizationsThemes ? "yes" : "no"}
                  </span>
                </div>
              </div>
              <div className="mt-4 flex w-3/4 flex-col">
                <span className="text-lg font-medium font-poppins">Custom design process</span>
                <span className="mt-2 text-lg font-poppins">
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
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5137 3.80454C14.5869 2.72979 16.3274 2.72913 17.4013 3.80307L19.8932 6.29493C20.958 7.35971 20.969 9.08347 19.918 10.1618L10.6849 19.6351C9.97933 20.359 9.01167 20.7672 8.00124 20.7671L5.24909 20.767C3.96984 20.7669 2.94823 19.7006 3.00203 18.4215L3.12019 15.6124C3.15968 14.6734 3.54996 13.7834 4.2138 13.1186L13.5137 3.80454ZM16.3415 4.86454C15.8533 4.37638 15.0622 4.37668 14.5744 4.8652L12.9118 6.53032L17.1916 10.8101L18.8446 9.11408C19.3224 8.62391 19.3173 7.84038 18.8333 7.35639L16.3415 4.86454ZM5.27446 14.1792L11.8519 7.59178L16.1445 11.8844L9.61148 18.5873C9.18816 19.0217 8.60756 19.2666 8.0013 19.2665L5.24916 19.2664C4.82274 19.2664 4.4822 18.9109 4.50014 18.4846L4.61829 15.6756C4.64199 15.1121 4.87616 14.5781 5.27446 14.1792ZM20.5158 20.6948C20.9298 20.6948 21.2655 20.3589 21.2655 19.9445C21.2655 19.5301 20.9298 19.1942 20.5158 19.1942H14.3941C13.98 19.1942 13.6444 19.5301 13.6444 19.9445C13.6444 20.3589 13.98 20.6948 14.3941 20.6948H20.5158Z" fill="#2B3F6C" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="w-full gap-6">
            <div className="gap-6 mt-4 flex flex-col">
              <span className="text-xl">Themes Elements</span>
              <Appetizers
                appetizers={themesElements}
                selectedAppetizers={themesElements}
                setSelectedAppetizers={setThemesElements}
              />
            </div>

            <div className="flex mt-6 gap-6">
              <div className="w-[50%] gap-5">
                <span className="text-xl ">Theme Photos</span>
                <div className="flex mt-2 min-w-[100%] px-6 py-3 gap-6 border rounded-2xl justify-start items-center">
                  <div>
                    <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5.5C1 3.29086 2.79086 1.5 5 1.5H9H11.0633C11.6568 1.5 12.2197 1.76365 12.5997 2.21963L16.5364 6.94373C16.836 7.30316 17 7.75623 17 8.2241V11.5V17.5C17 19.7091 15.2091 21.5 13 21.5H5C2.79086 21.5 1 19.7091 1 17.5V5.5Z" stroke="#2B3F6C" stroke-width="1.5" />
                      <path d="M12 2V5.5C12 6.60457 12.8954 7.5 14 7.5H16.5" stroke="#2B3F6C" stroke-width="1.5" stroke-linecap="round" />
                      <path d="M5 11.5H13" stroke="#2B3F6C" stroke-width="1.5" stroke-linecap="round" />
                      <path d="M5 16.5H9" stroke="#2B3F6C" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                  </div>
                  <div className="flex w-[85%] text-left">
                    <span className="text-left ">
                      {typeof formState.themephotos === "string" ? (
                        "No File selected"
                      ) : (
                        <File file={formState.themephotos} />
                      )}
                    </span>
                  </div>
                  <div className="flex">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1" y="1" width="20" height="20" rx="5" stroke="#2B3F6C" stroke-width="1.5" />
                      <path d="M8.5 10.5L10.5 12.5L14.5 8.5" stroke="#2B3F6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-[50%] gap-2">
                <span className="text-xl">Theme Video</span>
                <div className="flex mt-2 min-w-1/2 px-6 py-3 gap-6 border rounded-2xl justify-start items-center">
                  <div>
                    <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5.5C1 3.29086 2.79086 1.5 5 1.5H9H11.0633C11.6568 1.5 12.2197 1.76365 12.5997 2.21963L16.5364 6.94373C16.836 7.30316 17 7.75623 17 8.2241V11.5V17.5C17 19.7091 15.2091 21.5 13 21.5H5C2.79086 21.5 1 19.7091 1 17.5V5.5Z" stroke="#2B3F6C" stroke-width="1.5" />
                      <path d="M12 2V5.5C12 6.60457 12.8954 7.5 14 7.5H16.5" stroke="#2B3F6C" stroke-width="1.5" stroke-linecap="round" />
                      <path d="M5 11.5H13" stroke="#2B3F6C" stroke-width="1.5" stroke-linecap="round" />
                      <path d="M5 16.5H9" stroke="#2B3F6C" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                  </div>
                  <div className="flex w-[85%] text-left">
                    <span className="text-left">
                      {typeof formState.themevideos === "string" ? (
                        "no file selected"
                      ) : (
                        <File file={formState.themevideos} />
                      )}
                    </span>
                  </div>
                  <div className="flex">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1" y="1" width="20" height="20" rx="5" stroke="#2B3F6C" stroke-width="1.5" />
                      <path d="M8.5 10.5L10.5 12.5L14.5 8.5" stroke="#2B3F6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="flex gap-9">
            <div className="flex w-[100%] justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
              4. Consultation Details
              <div className="align-center flex justify-center p-1">
                <button onClick={() => setCurrentPage(4)}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5137 3.80454C14.5869 2.72979 16.3274 2.72913 17.4013 3.80307L19.8932 6.29493C20.958 7.35971 20.969 9.08347 19.918 10.1618L10.6849 19.6351C9.97933 20.359 9.01167 20.7672 8.00124 20.7671L5.24909 20.767C3.96984 20.7669 2.94823 19.7006 3.00203 18.4215L3.12019 15.6124C3.15968 14.6734 3.54996 13.7834 4.2138 13.1186L13.5137 3.80454ZM16.3415 4.86454C15.8533 4.37638 15.0622 4.37668 14.5744 4.8652L12.9118 6.53032L17.1916 10.8101L18.8446 9.11408C19.3224 8.62391 19.3173 7.84038 18.8333 7.35639L16.3415 4.86454ZM5.27446 14.1792L11.8519 7.59178L16.1445 11.8844L9.61148 18.5873C9.18816 19.0217 8.60756 19.2666 8.0013 19.2665L5.24916 19.2664C4.82274 19.2664 4.4822 18.9109 4.50014 18.4846L4.61829 15.6756C4.64199 15.1121 4.87616 14.5781 5.27446 14.1792ZM20.5158 20.6948C20.9298 20.6948 21.2655 20.3589 21.2655 19.9445C21.2655 19.5301 20.9298 19.1942 20.5158 19.1942H14.3941C13.98 19.1942 13.6444 19.5301 13.6444 19.9445C13.6444 20.3589 13.98 20.6948 14.3941 20.6948H20.5158Z" fill="#2B3F6C" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-6 ">
            <div className="w-[50%] gap-5">
              <span className="text-xl ">Photos</span>
              <div className="flex mt-2 min-w-[100%] px-6 py-3 gap-6 border rounded-2xl justify-start items-center">
                <div>
                  <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5.5C1 3.29086 2.79086 1.5 5 1.5H9H11.0633C11.6568 1.5 12.2197 1.76365 12.5997 2.21963L16.5364 6.94373C16.836 7.30316 17 7.75623 17 8.2241V11.5V17.5C17 19.7091 15.2091 21.5 13 21.5H5C2.79086 21.5 1 19.7091 1 17.5V5.5Z" stroke="#2B3F6C" stroke-width="1.5" />
                    <path d="M12 2V5.5C12 6.60457 12.8954 7.5 14 7.5H16.5" stroke="#2B3F6C" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M5 11.5H13" stroke="#2B3F6C" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M5 16.5H9" stroke="#2B3F6C" stroke-width="1.5" stroke-linecap="round" />
                  </svg>
                </div>
                <div className="flex w-[85%] text-left">
                  <span className="text-left ">
                    {typeof formState.photos === "string" ? (
                      "No File selected"
                    ) : (
                      <File file={formState.photos} />
                    )}
                  </span>
                </div>
                <div className="flex">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="20" height="20" rx="5" stroke="#2B3F6C" stroke-width="1.5" />
                    <path d="M8.5 10.5L10.5 12.5L14.5 8.5" stroke="#2B3F6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-[50%] gap-2">
              <span className="text-xl">Video</span>
              <div className="flex mt-2 min-w-1/2 px-6 py-3 gap-6 border rounded-2xl justify-start items-center">
                <div>
                  <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5.5C1 3.29086 2.79086 1.5 5 1.5H9H11.0633C11.6568 1.5 12.2197 1.76365 12.5997 2.21963L16.5364 6.94373C16.836 7.30316 17 7.75623 17 8.2241V11.5V17.5C17 19.7091 15.2091 21.5 13 21.5H5C2.79086 21.5 1 19.7091 1 17.5V5.5Z" stroke="#2B3F6C" stroke-width="1.5" />
                    <path d="M12 2V5.5C12 6.60457 12.8954 7.5 14 7.5H16.5" stroke="#2B3F6C" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M5 11.5H13" stroke="#2B3F6C" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M5 16.5H9" stroke="#2B3F6C" stroke-width="1.5" stroke-linecap="round" />
                  </svg>
                </div>
                <div className="flex w-[85%] text-left">
                  <span className="text-left ">
                    {typeof formState.videos === "string" ? (
                      "no file selected"
                    ) : (
                      <File file={formState.videos} />
                    )}
                  </span>
                </div>
                <div className="flex">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="20" height="20" rx="5" stroke="#2B3F6C" stroke-width="1.5" />
                    <path d="M8.5 10.5L10.5 12.5L14.5 8.5" stroke="#2B3F6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 gap-6 justify-start flex flex-col">
            <div className="flex justify-between items-start">
              <div className="w-[50%]">
                <h2 className="text-lg text-[#263238] font-medium font-poppins">Awards/Recognition</h2>
                <h3 className="text-lg text-[#263238]  font-helvetica">{formState.Recongnition_awards}</h3>
              </div>
              <div className="w-[50%]">
                <h2 className="text-lg text-[#263238] font-medium font-poppins">Client Testimonials</h2>
                <h3 className="text-lg text-[#263238]  font-helvetica">{formState.clientTestimonials}</h3>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div className="w-[50%]">
                <h2 className="text-lg text-[#263238] font-medium font-poppins">Instagram URL</h2>
                <h3 className="text-lg text-[#263238]  font-helvetica">{formState.intstagramurl}</h3>
              </div>
              <div className="w-[50%]">
                <h2 className="text-lg text-[#263238] font-medium font-poppins">Website URL</h2>
                <h3 className="text-lg text-[#263238]  font-helvetica">{formState.websiteurl}</h3>
              </div>
            </div>
            <div>
              <h2 className="text-lg text-[#263238] font-medium font-poppins">Advance Booking Period ?</h2>
              <h3 className="text-lg text-[#263238]  font-helvetica">{formState.advbookingperiod}</h3>
            </div>
          </div>
          <div className="w-full">
            <div className="w-[100%] ">
              <div className="mb-4 flex gap-16 py-2">
                <div className="flex w-1/2 flex-col">
                  <span className="mb-2 text-lg font-medium font-poppins">
                    Do you offer revisions to the initial theme proposal?
                  </span>

                  <p className=" text-lg text-[#263238] font-medium font-poppins">
                    {formState.revisionforinitialthemeproposal ? "yes" : "no"}
                  </p>
                </div>
                <div className="flex w-1/2 flex-col">
                  <span className="mb-2 text-lg text-[#263238] font-medium font-poppins">
                    Do you provide a written theme proposal after consultation?
                  </span>

                  <p className="text-lg text-[#263238] font-medium font-poppins">
                    {formState.writtenthemeproposalafterconsultaion ? "yes" : "no"}
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
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5137 3.80454C14.5869 2.72979 16.3274 2.72913 17.4013 3.80307L19.8932 6.29493C20.958 7.35971 20.969 9.08347 19.918 10.1618L10.6849 19.6351C9.97933 20.359 9.01167 20.7672 8.00124 20.7671L5.24909 20.767C3.96984 20.7669 2.94823 19.7006 3.00203 18.4215L3.12019 15.6124C3.15968 14.6734 3.54996 13.7834 4.2138 13.1186L13.5137 3.80454ZM16.3415 4.86454C15.8533 4.37638 15.0622 4.37668 14.5744 4.8652L12.9118 6.53032L17.1916 10.8101L18.8446 9.11408C19.3224 8.62391 19.3173 7.84038 18.8333 7.35639L16.3415 4.86454ZM5.27446 14.1792L11.8519 7.59178L16.1445 11.8844L9.61148 18.5873C9.18816 19.0217 8.60756 19.2666 8.0013 19.2665L5.24916 19.2664C4.82274 19.2664 4.4822 18.9109 4.50014 18.4846L4.61829 15.6756C4.64199 15.1121 4.87616 14.5781 5.27446 14.1792ZM20.5158 20.6948C20.9298 20.6948 21.2655 20.3589 21.2655 19.9445C21.2655 19.5301 20.9298 19.1942 20.5158 19.1942H14.3941C13.98 19.1942 13.6444 19.5301 13.6444 19.9445C13.6444 20.3589 13.98 20.6948 14.3941 20.6948H20.5158Z" fill="#2B3F6C" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex gap-6  ">
              <div className="w-[50%] gap-5">
                <span className="text-xl ">Terms And Conditions</span>
                <div className="flex mt-2 min-w-[100%] px-6 py-3 gap-6 border rounded-2xl justify-start items-center">
                  <div>
                    <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5.5C1 3.29086 2.79086 1.5 5 1.5H9H11.0633C11.6568 1.5 12.2197 1.76365 12.5997 2.21963L16.5364 6.94373C16.836 7.30316 17 7.75623 17 8.2241V11.5V17.5C17 19.7091 15.2091 21.5 13 21.5H5C2.79086 21.5 1 19.7091 1 17.5V5.5Z" stroke="#2B3F6C" stroke-width="1.5" />
                      <path d="M12 2V5.5C12 6.60457 12.8954 7.5 14 7.5H16.5" stroke="#2B3F6C" stroke-width="1.5" stroke-linecap="round" />
                      <path d="M5 11.5H13" stroke="#2B3F6C" stroke-width="1.5" stroke-linecap="round" />
                      <path d="M5 16.5H9" stroke="#2B3F6C" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                  </div>
                  <div className="flex w-[85%] text-left">
                    <span className="text-left ">
                      {typeof formState.termsAndConditions === "string" ? (
                        "No File selected"
                      ) : (
                        <File file={formState.termsAndConditions} />
                      )}
                    </span>
                  </div>
                  <div className="flex">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1" y="1" width="20" height="20" rx="5" stroke="#2B3F6C" stroke-width="1.5" />
                      <path d="M8.5 10.5L10.5 12.5L14.5 8.5" stroke="#2B3F6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-[50%] gap-2">
                <span className="text-xl">Cancellation Policy</span>
                <div className="flex mt-2 min-w-1/2 px-6 py-3 gap-6 border rounded-2xl justify-start items-center">
                  <div>
                    <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5.5C1 3.29086 2.79086 1.5 5 1.5H9H11.0633C11.6568 1.5 12.2197 1.76365 12.5997 2.21963L16.5364 6.94373C16.836 7.30316 17 7.75623 17 8.2241V11.5V17.5C17 19.7091 15.2091 21.5 13 21.5H5C2.79086 21.5 1 19.7091 1 17.5V5.5Z" stroke="#2B3F6C" stroke-width="1.5" />
                      <path d="M12 2V5.5C12 6.60457 12.8954 7.5 14 7.5H16.5" stroke="#2B3F6C" stroke-width="1.5" stroke-linecap="round" />
                      <path d="M5 11.5H13" stroke="#2B3F6C" stroke-width="1.5" stroke-linecap="round" />
                      <path d="M5 16.5H9" stroke="#2B3F6C" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                  </div>
                  <div className="flex w-[85%] text-left">
                    <span className="text-left ">
                      {typeof formState.cancellationPolicy === "string" ? (
                        "no file selected"
                      ) : (
                        <File file={formState.cancellationPolicy} />
                      )}
                    </span>
                  </div>
                  <div className="flex">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1" y="1" width="20" height="20" rx="5" stroke="#2B3F6C" stroke-width="1.5" />
                      <path d="M8.5 10.5L10.5 12.5L14.5 8.5" stroke="#2B3F6C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-9 flex bg-white flex-row items-stretch gap-7 self-end">
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
