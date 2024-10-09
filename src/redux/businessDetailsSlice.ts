// redux/businessDetails2Slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


// businessName: refs.current.businessName!.value,
// category: businessDetails2.category,
// gstin: refs.current.gstin!.value,
// teamsize: businessDetails2.teamsize,
// businessAddress: refs.current.businessAddress!.value,
// pinCode: Number(refs.current.pinCode!.value),
// cities: businessDetails2.cities,
// years: businessDetails2.years,
// annualrevenue: businessDetails2.annualrevenue,

export type BusinessDetails2 = {
  businessName: string;
  category: string;
  gstin: string;
  teamsize: string;
  businessAddress: string;
  pinCode: number;
  cities: string[];
  years: string;
  annualrevenue: string;
};

const initialState: BusinessDetails2 = {
  businessName: '',
  category: '',
  gstin: '',
  years: '',
  businessAddress: '',
  pinCode: 1,
  cities: [],
  teamsize: '',
  annualrevenue: '',
};

const businessDetails2Slice = createSlice({
  name: 'businessDetails2',
  initialState,
  reducers: {
    setBusinessDetails2: (state, action: PayloadAction<BusinessDetails2>) => {
      return action.payload;
    },
    updateBusinessField: <K extends keyof BusinessDetails2>(
      state: BusinessDetails2,
      action: PayloadAction<{ key: K; value: BusinessDetails2[K] }>
    ) => {
      state[action.payload.key] = action.payload.value;
    },
  },
});

export const { setBusinessDetails2, updateBusinessField } = businessDetails2Slice.actions;
export default businessDetails2Slice.reducer;