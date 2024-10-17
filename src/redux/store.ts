// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import businessDetailsReducer from './businessDetailsSlice';
import cateringReducer from './cateringSlice'
import decoratorReducer from './decoratorSlice'


const store = configureStore({
  reducer: {
    businessDetails: businessDetailsReducer,
    catering : cateringReducer,
    decorator : decoratorReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;