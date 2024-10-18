import { ArrowLeft, EditIcon } from "lucide-react";
import Appetizers from "../../(components)/Appetizers";
import FileDisplay from "../../caterer/(components)/File";

type PagePreviewProps = {
  fullName: string;
  setFullName: (fullName: string) => void;
  description: string;
  setDescription: (description: string) => void;
  eventsize: string;
  events: string[];
  setEventsize: (eventsize: string) => void;
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
            <ArrowLeft
              className="ml-2 mr-1 h-6 w-6 cursor-pointer text-[#2E3192]"
              aria-hidden="true"
              onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
            />
            <h1 className="text-3xl font-semibold">Photo And Videography</h1>
          </div>

          <div className="flex w-full items-center justify-between rounded-xl bg-[#F0EFFC] p-2 pl-4 text-xl font-semibold">
            1. Basic Details
            <div className="align-center flex justify-center p-1">
              <button onClick={() => setCurrentPage(1)}>
                <EditIcon size={28} />
              </button>
            </div>
          </div>

          <div className="mt-4 flex flex-col justify-start gap-6">
            <div className="flex items-start justify-between">
              <div className="w-[50%]">
                <h2 className="font-poppins text-lg font-medium">
                  Full Name (POC)
                </h2>
                <h3 className="font-helvetica text-lg font-medium">
                  {fullName}
                </h3>
              </div>
              <div className="w-[50%]">
                <h2 className="font-poppins text-lg font-medium">Event Size</h2>
                <h3 className="font-helvetica text-lg font-medium">
                  {eventsize}
                </h3>
              </div>
            </div>
            <div>
              <h2 className="font-poppins text-lg font-medium">
                Decoration Setup Duration
              </h2>
              <h3 className="font-helvetica text-lg font-medium">
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
          <div className="flex w-full items-center justify-between rounded-xl bg-[#F0EFFC] p-2 pl-4 text-xl font-semibold">
            2. Photography Details
            <div className="align-center flex justify-center p-1">
              <button onClick={() => setCurrentPage(2)}>
                <EditIcon size={28} />
              </button>
            </div>
          </div>

          <div className="w-full">
            <div className="my-4 flex flex-col gap-6">
              <span className="text-xl font-medium">Types of Styles</span>
              <Appetizers
                appetizers={photoSelectedstyles}
                selectedAppetizers={photoSelectedstyles}
                setSelectedAppetizers={setphotoSelectedstyles}
              />
            </div>
            <div className="my-4 flex flex-col gap-6">
              <span className="text-xl font-medium">Equiment Available</span>
              <Appetizers
                appetizers={photoequipments}
                selectedAppetizers={photoequipments}
                setSelectedAppetizers={setphotoEquipments}
              />
            </div>
            <div className="my-4 flex flex-col gap-6">
              <span className="text-xl font-medium">
                Add-One Or Upgrades Available
              </span>
              <Appetizers
                appetizers={photoAddons}
                selectedAppetizers={photoAddons}
                setSelectedAppetizers={setphotoAddons}
              />
            </div>
            <div className="my-4 flex flex-col gap-6">
              <span className="text-xl font-medium">
                Final Delivery Methods
              </span>
              <Appetizers
                appetizers={photofinaldeliverymethods}
                selectedAppetizers={photofinaldeliverymethods}
                setSelectedAppetizers={setphotoFinaldeliverymethods}
              />
            </div>
          </div>
          <div className="flex w-full items-center justify-between rounded-xl bg-[#F0EFFC] p-2 pl-4 text-xl font-semibold">
            3. Videography Details
            <div className="align-center flex justify-center p-1">
              <button onClick={() => setCurrentPage(2)}>
                <EditIcon size={28} />
              </button>
            </div>
          </div>

          <div className="w-full">
            <div className="my-4 flex flex-col gap-6">
              <span className="text-xl font-medium">Types of Styles</span>
              <Appetizers
                appetizers={videoSelectedstyles}
                selectedAppetizers={videoSelectedstyles}
                setSelectedAppetizers={setvideoStyles}
              />
            </div>
            <div className="my-4 flex flex-col gap-6">
              <span className="text-xl font-medium">Equiment Available</span>
              <Appetizers
                appetizers={Selectedvideoequipments}
                selectedAppetizers={Selectedvideoequipments}
                setSelectedAppetizers={setvideoSelectedEquipments}
              />
            </div>
            <div className="my-4 flex flex-col gap-6">
              <span className="text-xl font-medium">
                Add-One Or Upgrades Available
              </span>
              <Appetizers
                appetizers={videoAddons}
                selectedAppetizers={videoAddons}
                setSelectedAppetizers={setvideoAddons}
              />
            </div>
            <div className="my-4 flex flex-col gap-6">
              <span className="text-xl font-medium">
                Final Delivery Methods
              </span>
              <Appetizers
                appetizers={videofinaldeliverymethods}
                selectedAppetizers={videofinaldeliverymethods}
                setSelectedAppetizers={setvideoFinaldeliverymethods}
              />
            </div>
          </div>
          <div className="flex w-full items-center justify-between rounded-xl bg-[#F0EFFC] p-2 pl-4 text-xl font-semibold">
            4. Consultation Details
            <div className="align-center flex justify-center p-1">
              <button onClick={() => setCurrentPage(4)}>
                <EditIcon size={28} />
              </button>
            </div>
          </div>

          <div className="mt-4 flex flex-col justify-start gap-6">
            <div className="flex items-start justify-between">
              <div className="w-[50%]">
                <h2 className="font-poppins text-lg font-medium">
                  Duration of Final Delivery of Photos/Videos
                </h2>
                <h3 className="font-helvetica text-lg font-medium">
                  {Durationoffinaldelivery}
                </h3>
              </div>
              <div className="w-[50%]">
                <h2 className="font-poppins text-lg font-medium">
                  Package Type
                </h2>
                <h3 className="font-helvetica text-lg font-medium">
                  {Packagetype}
                </h3>
              </div>
            </div>
            <div className="flex items-start justify-between">
              <div className="w-[50%]">
                <h2 className="font-poppins text-lg font-medium">
                  Do You Provide Design Proposals to Clients
                </h2>
                <h3 className="font-helvetica text-lg font-medium">
                  {proposalsToClients ? "Yes" : "No"}
                </h3>
              </div>
              <div className="w-[50%]">
                <h2 className="font-poppins text-lg font-medium">
                  Do You Provide Free Initial Consultation
                </h2>
                <h3 className="font-helvetica text-lg font-medium">
                  {freeInitialConsultation ? "Yes" : "No"}
                </h3>
              </div>
            </div>
            <div className="flex items-start justify-between gap-16">
              <div>
                <h2 className="] min-w-[50%] font-poppins text-lg font-medium">
                  Do You Require Any Booking Deposits For Your Services ?
                </h2>
                <h3 className="font-helvetica text-lg font-medium">
                  {bookingDeposit ? "Yes" : "No"}
                </h3>
              </div>
              <div>
                <h2 className="min-w-[50%] font-poppins text-lg font-medium">
                  Are You Available For Desination Events Or Out OF Town
                  Bookings ?
                </h2>
                <h3 className="font-helvetica text-lg font-medium">
                  {availablefordestinationevents ? "Yes" : "No"}
                </h3>
              </div>
            </div>
            <div className="flex items-start justify-between">
              <div className="w-[50%]">
                <h2 className="font-poppins text-lg font-medium">
                  Do You Provide Advance Set-Up ?
                </h2>
                <h3 className="font-helvetica text-lg font-medium">
                  {advanceSetup ? "Yes" : "No"}
                </h3>
              </div>
              <div className="w-[50%]">
                <h2 className="font-poppins text-lg font-medium">
                  Do You Offer Post-Production Services ?
                </h2>
                <h3 className="font-helvetica text-lg font-medium">
                  {postproductionservices ? "Yes" : "No"}
                </h3>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-between rounded-xl bg-[#F0EFFC] p-2 pl-4 text-xl font-semibold">
            5. Additional Details
            <div className="align-center flex justify-center p-1">
              <button onClick={() => setCurrentPage(5)}>
                <EditIcon size={28} />
              </button>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="mt-6 flex min-w-[50%] max-w-[50%] flex-col gap-1">
              <span className="text-base font-medium">Photos</span>
              <div className="font-semibold">
                {Array.isArray(photos) ? (
                  <FileDisplay files={photos} />
                ) : (
                  <div>Not specified</div>
                )}
              </div>
            </div>
            <div className="mt-6 flex min-w-[50%] max-w-[50%] flex-col gap-1">
              <span className="text-base font-medium">Videos</span>
              <div className="font-semibold">
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
                <h2 className="font-poppins text-lg font-medium">
                  Awards/Recognition
                </h2>
                <h3 className="font-helvetica text-lg">
                  {Recongnition_awards}
                </h3>
              </div>
              <div className="w-[50%]">
                <h2 className="] font-poppins text-lg font-medium">
                  Client Testimonials
                </h2>
                <h3 className="font-helvetica text-lg">{clientTestimonials}</h3>
              </div>
            </div>
            <div className="flex items-start justify-between">
              <div className="w-[50%]">
                <h2 className="] font-poppins text-lg font-medium">
                  Instagram URL
                </h2>
                <h3 className="font-helvetica text-lg">{intstagramurl}</h3>
              </div>
              <div className="w-[50%]">
                <h2 className="font-poppins text-lg font-medium">
                  Website URL
                </h2>
                <h3 className="font-helvetica text-lg font-medium">
                  {websiteurl}
                </h3>
              </div>
            </div>
          </div>

          <div className="flex w-full items-center justify-between rounded-xl bg-[#F0EFFC] p-2 pl-4 text-xl font-semibold">
            6. Policies
            <div className="align-center flex justify-center p-1">
              <button onClick={() => setCurrentPage(6)}>
                <EditIcon size={28} />
              </button>
            </div>
          </div>

          <div className="w-full">
            <div className="flex gap-6">
              <div className="mt-6 flex min-w-[50%] max-w-[50%] flex-col gap-1">
                <span className="text-base font-normal">
                  Terms And Conditions
                </span>
                <div className="font-semibold">
                  {Array.isArray(termsandconditions) ? (
                    <FileDisplay files={termsandconditions} />
                  ) : (
                    <div>Not specified</div>
                  )}
                </div>
              </div>
              <div className="mt-6 flex min-w-[50%] max-w-[50%] flex-col gap-1">
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
