// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import businessDetailsReducer from './businessDetailsSlice';
import cateringReducer from './cateringSlice'


const store = configureStore({
  reducer: {
    businessDetails: businessDetailsReducer,
    catering : cateringReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;