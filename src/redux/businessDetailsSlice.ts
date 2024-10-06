// redux/businessDetailsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type BusinessDetails = {
  businessName: string;
  category: string;
  gstin: string;
  years: string;
  businessAddress: string;
  landmark: string;
  pinCode: string;
  cities: string[];
};

const initialState: BusinessDetails = {
  businessName: '',
  category: '',
  gstin: '',
  years: '',
  businessAddress: '',
  landmark: '',
  pinCode: "",
  cities: [],
};

const businessDetailsSlice = createSlice({
  name: 'businessDetails',
  initialState,
  reducers: {
    setBusinessDetails: (state, action: PayloadAction<BusinessDetails>) => {
      return action.payload;
    },
    updateBusinessField: <K extends keyof BusinessDetails>(
      state: BusinessDetails,
      action: PayloadAction<{ key: K; value: BusinessDetails[K] }>
    ) => {
      state[action.payload.key] = action.payload.value;
    },
  },
});

export const { setBusinessDetails, updateBusinessField } = businessDetailsSlice.actions;
export default businessDetailsSlice.reducer;
