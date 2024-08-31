export type pavtypes = "org" | "individual" | "grp";

export interface Package {
  type: string;
  priceRange: [number, number];
}

export type BasicDetails = "photo" | "video" | "both";

export interface pavFormState {
  //pag1

  type: pavtypes;
  fullName: string;
  client_testimonials: string | File;
  portfolio: string | File;
  group_members: string;
  organization_members: string;

  //page2
  basic_Detail: BasicDetails;
  styles: string[];
  events: string[];
  customizable_package: boolean;

  //page3

  customizable_sound_lighting_rates: boolean;
  equipments: string[];

  //page4
  proposals_to_clients: boolean;
  free_initial_consultation: boolean;
  advance_setup: boolean;
  collaboration_with_other_vendors: boolean;
  setups_installations: boolean;
  booking_deposit: boolean;
  cancellation_policy: File | string;
  tnc: File | string;

  //page5:
  hourlyPackages: Package[];
  dailyPackages: Package[];
}
