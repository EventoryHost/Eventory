export type pavtypes = "org" | "individual" | "grp";

export interface Package {
  type: string;
  priceRange: [number, number];
}

export type BasicDetails = "photo" | "video" | "both";

export interface pavFormState {
  fullName: string;
  
  description: string;
  
  eventsize: number;
  events: string[];
  Selectedstyles: string[];
  
  Selectedequipments: string[];
  setSelectedEquipments: React.Dispatch<React.SetStateAction<string[]>>;
  Addons: string[];
  setAddons: React.Dispatch<React.SetStateAction<string[]>>;
  finaldeliverymethods: string[];
  setFinaldeliverymethods: React.Dispatch<React.SetStateAction<string[]>>;
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
  setwrittenthemeproposalafterconsultaion: (writtenthemeproposalafterconsultaion: boolean) => void;
  freerevisionforinitialthemeproposal: boolean;
  setrevisionforinitialthemeproposal: (freerevisionforinitialthemeproposal: boolean) => void;
  policy: string | File | File[];
  termsandconditions: string | File | File[];
  settermsandconditions: React.Dispatch<React.SetStateAction<string | File | File[]>>;
  setpolicy: React.Dispatch<React.SetStateAction<string | File | File[]>>;
  
}
