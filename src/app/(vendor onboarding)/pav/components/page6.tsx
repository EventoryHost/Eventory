import Appetizers from "../../(components)/Appetizers";
import FileDisplay from "../../caterer/(components)/File";

type PagePreviewProps = {
  fullName: string;
  setFullName: (fullName: string) => void;
  description: string;
  setDescription: (description: string) => void;
  eventsize: number;
  events: string[];
  setEventsize: (eventsize: number) => void;
  setEvent: React.Dispatch<React.SetStateAction<string[]>>;
  photoSelectedstyles: string[];
  setphotoSelectedstyles: React.Dispatch<React.SetStateAction<string[]>>;
  photoequipments: string[];
  setphotoEquipments: React.Dispatch<React.SetStateAction<string[]>>;
  photoAddons: string[];
  setphotoAddons: React.Dispatch<React.SetStateAction<string[]>>;
  photofinaldeliverymethods: string[];
  setphotoFinaldeliverymethods: React.Dispatch<React.SetStateAction<string[]>>;
  videoSelectedstyles: string[];
  setvideoStyles: React.Dispatch<React.SetStateAction<string[]>>;
  Selectedvideoequipments: string[];
  setvideoSelectedEquipments: React.Dispatch<React.SetStateAction<string[]>>;
  videoAddons: string[];
  setvideoAddons: React.Dispatch<React.SetStateAction<string[]>>;
  videofinaldeliverymethods: string[];
  setvideoFinaldeliverymethods: React.Dispatch<React.SetStateAction<string[]>>;
  Durationoffinaldelivery: string;
  setDurationoffinaldelivery: (Durationoffinaldelivery: string) => void;
  Packagetype: string;
  setPackagetype: (Packagetype: string) => void;
  setavailablefordestinationevents: (setPackagetype: boolean) => void;
  availablefordestinationevents: boolean;
  setpostproductionservices: (setPackagetype: boolean) => void;
  postproductionservices: boolean;
  proposalsToClients: boolean;
  setProposalsToClients: (proposalsToClients: boolean) => void;
  freeInitialConsultation: boolean;
  setFreeInitialConsultation: (freeInitialConsultation: boolean) => void;
  advanceSetup: boolean;
  setAdvanceSetup: (advanceSetup: boolean) => void;
  setupsInstallations: boolean;
  setSetupsInstallations: (setupsInstallations: boolean) => void;
  bookingDeposit: boolean;
  setBookingDeposit: (bookingDeposit: boolean) => void;
  photos: string | File | File[];
  videos: string | File | File[];
  setPhotos: React.Dispatch<React.SetStateAction<string | File | File[]>>;
  setVideos: React.Dispatch<React.SetStateAction<string | File | File[]>>;
  websiteurl: string;
  setwebsiteurl: (websiteurl: string) => void;
  intstagramurl: string;
  setintstagramurl: (intstagramurl: string) => void;
  Recongnition_awards: string;
  setRecongnition_awards: (Recongnition_awards: string) => void;
  advbookingperiod: string;
  setadvbookingperiod: (advbookingperiod: string) => void;
  clientTestimonials: string;
  setclientTestimonials: (clientTestimonials: string) => void;
  writtenthemeproposalafterconsultaion: boolean;
  setwrittenthemeproposalafterconsultaion: (
    writtenthemeproposalafterconsultaion: boolean,
  ) => void;
  freerevisionforinitialthemeproposal: boolean;
  setrevisionforinitialthemeproposal: (
    freerevisionforinitialthemeproposal: boolean,
  ) => void;
  policy: string | File | File[];
  termsandconditions: string | File | File[];
  settermsandconditions: React.Dispatch<
    React.SetStateAction<string | File | File[]>
  >;
  setpolicy: React.Dispatch<React.SetStateAction<string | File | File[]>>;
  handleContinue: () => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

function Preview({
  fullName,
  setFullName,
  description,
  setDescription,
  eventsize,
  setEventsize,
  setEvent,
  events,
  handleContinue,
  setCurrentPage,
  photoSelectedstyles,
  setphotoSelectedstyles,
  photoequipments,
  setphotoEquipments,
  photoAddons,
  setphotoAddons,
  photofinaldeliverymethods,
  setphotoFinaldeliverymethods,
  videoSelectedstyles,
  setvideoStyles,
  Selectedvideoequipments,
  setvideoSelectedEquipments,
  videoAddons,
  setvideoAddons,
  videofinaldeliverymethods,
  setvideoFinaldeliverymethods,
  proposalsToClients,
  setProposalsToClients,
  freeInitialConsultation,
  setFreeInitialConsultation,
  advanceSetup,
  setAdvanceSetup,
  Durationoffinaldelivery,
  postproductionservices,
  setpostproductionservices,
  setDurationoffinaldelivery,
  Packagetype,
  setPackagetype,
  availablefordestinationevents,
  setavailablefordestinationevents,
  bookingDeposit,
  setBookingDeposit,
  photos,
  videos,
  setPhotos,
  setVideos,
  websiteurl,
  setwebsiteurl,
  intstagramurl,
  setintstagramurl,
  Recongnition_awards,
  setRecongnition_awards,
  advbookingperiod,
  setadvbookingperiod,
  clientTestimonials,
  setclientTestimonials,
  writtenthemeproposalafterconsultaion,
  setwrittenthemeproposalafterconsultaion,
  freerevisionforinitialthemeproposal,
  setrevisionforinitialthemeproposal,
  termsandconditions,
  settermsandconditions,
  setpolicy,
  policy,
}: PagePreviewProps) {
  return (
    <div className="flex h-full flex-col items-start justify-start gap-5 overflow-y-scroll scrollbar-hide xs:w-[95%] xs:min-w-[90%]">
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
              <h1 className="text-3xl font-semibold">Photo And Videography</h1>
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

          <div className="mt-4 flex flex-col justify-start gap-6">
            <div className="flex items-start justify-between">
              <div className="w-[50%]">
                <h2 className="font-poppins text-lg font-medium ">
                  Full Name (POC)
                </h2>
                <h3 className="font-helvetica text-lg font-medium">
                  {fullName}
                </h3>
              </div>
              <div className="w-[50%]">
                <h2 className="font-poppins text-lg font-medium ">
                  Event Size
                </h2>
                <h3 className="font-helvetica text-lg font-medium ">
                  {eventsize}
                </h3>
              </div>
            </div>
            <div>
              <h2 className="font-poppins text-lg font-medium ">
                Decoration Setup Duration
              </h2>
              <h3 className="font-helvetica text-lg font-medium ">
                {description}
              </h3>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-6">
            <span className="text-xl">Types of Event</span>
            <Appetizers
              appetizers={events}
              selectedAppetizers={events}
              setSelectedAppetizers={setEvent}
            />
          </div>
          <div className="flex gap-9">
            <div className="flex w-[100%] justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
              2. Photography Details
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
              <span className="font-medium text-xl">Types of Styles</span>
              <Appetizers
                appetizers={photoSelectedstyles}
                selectedAppetizers={photoSelectedstyles}
                setSelectedAppetizers={setphotoSelectedstyles}
              />
            </div>
            <div className="my-4 flex flex-col gap-6">
              <span className="font-medium text-xl">Equiment Available</span>
              <Appetizers
                appetizers={photoequipments}
                selectedAppetizers={photoequipments}
                setSelectedAppetizers={setphotoEquipments}
              />
            </div>
            <div className="my-4 flex flex-col gap-6">
              <span className="font-medium text-xl">Add-One Or Upgrades Available</span>
              <Appetizers
                appetizers={photoAddons}
                selectedAppetizers={photoAddons}
                setSelectedAppetizers={setphotoAddons}
              />
            </div>
            <div className="my-4 flex flex-col gap-6">
              <span className="font-medium text-xl">Final Delivery Methods</span>
              <Appetizers
                appetizers={photofinaldeliverymethods}
                selectedAppetizers={photofinaldeliverymethods}
                setSelectedAppetizers={setphotoFinaldeliverymethods}
              />
            </div>
          </div>
          <div className="flex gap-9">
            <div className="flex w-[100%] justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
              3. Videography Details
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
              <span className="font-medium text-xl">Types of Styles</span>
              <Appetizers
                appetizers={videoSelectedstyles}
                selectedAppetizers={videoSelectedstyles}
                setSelectedAppetizers={setvideoStyles}
              />
            </div>
            <div className="my-4 flex flex-col gap-6">
              <span className="font-medium text-xl">Equiment Available</span>
              <Appetizers
                appetizers={Selectedvideoequipments}
                selectedAppetizers={Selectedvideoequipments}
                setSelectedAppetizers={setvideoSelectedEquipments}
              />
            </div>
            <div className="my-4 flex flex-col gap-6">
              <span className="font-medium text-xl">Add-One Or Upgrades Available</span>
              <Appetizers
                appetizers={videoAddons}
                selectedAppetizers={videoAddons}
                setSelectedAppetizers={setvideoAddons}
              />
            </div>
            <div className="my-4 flex flex-col gap-6">
              <span className="font-medium text-xl">Final Delivery Methods</span>
              <Appetizers
                appetizers={videofinaldeliverymethods}
                selectedAppetizers={videofinaldeliverymethods}
                setSelectedAppetizers={setvideoFinaldeliverymethods}
              />
            </div>
          </div>
          <div className="flex gap-9">
            <div className="flex w-[100%] justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
              4. Consultation Details
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
          <div className="mt-4 flex flex-col justify-start gap-6">
            <div className="flex items-start justify-between">
              <div className="w-[50%]">
                <h2 className="font-poppins text-lg font-medium ">
                  Duration of Final Delivery of Photos/Videos
                </h2>
                <h3 className="font-helvetica text-lg font-medium  ">
                  {Durationoffinaldelivery}
                </h3>
              </div>
              <div className="w-[50%]">
                <h2 className="font-poppins text-lg font-medium ">
                  Package Type
                </h2>
                <h3 className="font-helvetica text-lg  font-medium ">
                  {Packagetype}
                </h3>
              </div>
            </div>
            <div className="flex items-start justify-between">
              <div className="w-[50%]">
                <h2 className="font-poppins text-lg font-medium ">
                  Do You Provide Design Proposals to Clients
                </h2>
                <h3 className="font-helvetica text-lg font-medium ">
                  {proposalsToClients ? "Yes" : "No"}
                </h3>
              </div>
              <div className="w-[50%]">
                <h2 className="font-poppins text-lg font-medium ">
                  Do You Provide Free Initial Consultation
                </h2>
                <h3 className="font-helvetica text-lg  font-medium ">
                  {freeInitialConsultation ? "Yes" : "No"}
                </h3>
              </div>
            </div>
            <div className="flex items-start gap-16 justify-between">
              <div>
                <h2 className="min-w-[50%] font-poppins text-lg font-medium ]">
                  Do You Require Any Booking Deposits For Your Services ?
                </h2>
                <h3 className="font-helvetica text-lg  font-medium ">
                  {bookingDeposit ? "Yes" : "No"}
                </h3>
              </div>
              <div>
                <h2 className="min-w-[50%] font-poppins text-lg font-medium">
                  Are You Available For Desination Events Or Out OF Town
                  Bookings ?
                </h2>
                <h3 className="font-helvetica text-lg  font-medium ">
                  {availablefordestinationevents ? "Yes" : "No"}
                </h3>
              </div>
            </div>
            <div className="flex items-start justify-between">
              <div className="w-[50%]">
                <h2 className="font-poppins text-lg font-medium ">
                  Do You Provide Advance Set-Up ?
                </h2>
                <h3 className="font-helvetica text-lg font-medium  ">
                  {advanceSetup ? "Yes" : "No"}
                </h3>
              </div>
              <div className="w-[50%]">
                <h2 className="font-poppins text-lg font-medium ">
                  Do You Offer Post-Production Services ?
                </h2>
                <h3 className="font-helvetica text-lg  font-medium ">
                  {postproductionservices ? "Yes" : "No"}
                </h3>
              </div>
            </div>
          </div>
          <div className="flex gap-9">
            <div className="flex w-[100%] justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
              5. Additional Details
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
            <div className="mt-6 min-w-[50%] max-w-[50%] flex flex-col gap-1">
              <span className="text-base font-medium">Photos</span>
              <div className="  font-semibold">
                {Array.isArray(photos) ? (
                  <FileDisplay files={photos} />
                ) : (
                  <div>Not specified</div>
                )}
              </div>
            </div>
            <div className="mt-6 min-w-[50%] max-w-[50%] flex flex-col gap-1">
              <span className="text-base font-medium">Videos</span>
              <div className="  font-semibold">
                {Array.isArray(videos) ? (
                  <FileDisplay files={videos} />
                ) : (
                  <div>Not specified</div>
                )}
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-col justify-start gap-6">
            <div className="flex items-start justify-between">
              <div className="w-[50%]">
                <h2 className="font-poppins text-lg font-medium ">
                  Awards/Recognition
                </h2>
                <h3 className="font-helvetica text-lg ">
                  {Recongnition_awards}
                </h3>
              </div>
              <div className="w-[50%]">
                <h2 className="font-poppins text-lg font-medium ]">
                  Client Testimonials
                </h2>
                <h3 className="font-helvetica text-lg ">
                  {clientTestimonials}
                </h3>
              </div>
            </div>
            <div className="flex items-start justify-between">
              <div className="w-[50%]">
                <h2 className="font-poppins text-lg font-medium ]">
                  Instagram URL
                </h2>
                <h3 className="font-helvetica text-lg ">
                  {intstagramurl}
                </h3>
              </div>
              <div className="w-[50%]">
                <h2 className="font-poppins text-lg font-medium ">
                  Website URL
                </h2>
                <h3 className="font-helvetica text-lg font-medium  ">
                  {websiteurl}
                </h3>
              </div>
            </div>
          </div>

          <div className="flex gap-9">
            <div className="flex w-[100%] justify-between rounded-xl bg-gray-200 p-2 pl-4 text-3xl font-semibold">
              6. Policies
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
            <div className="flex gap-6">
              <div className="mt-6 min-w-[50%] max-w-[50%] flex flex-col gap-1">
                <span className="text-base font-normal">
                  Terms And Conditions
                </span>
                <div className=" font-semibold">
                  {Array.isArray(termsandconditions) ? (
                    <FileDisplay files={termsandconditions} />
                  ) : (
                    <div>Not specified</div>
                  )}
                </div>
              </div>
              <div className="mt-6 min-w-[50%] max-w-[50%] flex flex-col gap-1">
                <span className="text-base font-normal">
                  Cancellation Policy
                </span>
                <div className="font-semibold">
                  {Array.isArray(policy) ? (
                    <FileDisplay files={policy} />
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
