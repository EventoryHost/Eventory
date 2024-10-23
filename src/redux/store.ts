// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import businessDetailsReducer from "./businessDetailsSlice";
import cateringReducer from "./cateringSlice";
import decoratorReducer from "./decoratorSlice";
import venueProviderSlice from "./venue-providerSlice";
import propRentalSlice from "./prop-rentalSlice";
import pavSlice from "./pavSlice";

const store = configureStore({
  reducer: {
    businessDetails: businessDetailsReducer,
    catering: cateringReducer,
    decorator: decoratorReducer,
    "venue-provider": venueProviderSlice,
    "prop-rental": propRentalSlice,
    pav: pavSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
