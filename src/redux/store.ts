// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import businessDetailsReducer from './businessDetailsSlice';


const store = configureStore({
  reducer: {
    businessDetails: businessDetailsReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
