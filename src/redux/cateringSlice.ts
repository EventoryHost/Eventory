import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { saveCateringData, getCateringData } from '../services/flows/cateringService';

interface CateringState {
   formData: Record<string, any>; // Store form data for all pages
   currentPage2: number; // Track the current page
   loading: boolean;
   error: string | null;
}

const initialState: CateringState = {
   formData: {},
   currentPage2: 1,
   loading: false,
   error: null,
};

// Async thunk to fetch catering data
export const fetchCateringData = createAsyncThunk(
   'catering/fetchData',
   async (userId: string) => {
      const response = await getCateringData(userId);
      return response.data; 
   }
);

// Async thunk to save catering details
export const saveCateringDetails = createAsyncThunk(
   'catering/saveData',
   async ({ userId, data }: { userId: string; data: any }) => {
      const response = await saveCateringData(userId, data);
      return response.data;
   }
);

// Create a slice of the store
const cateringSlice = createSlice({
   name: 'catering',
   initialState,
   reducers: {
      resetCateringState: (state) => {
         state.formData = {};
         state.currentPage2 = 1;
         state.loading = false;
         state.error = null;
      },
      updateFormData: (state, action: PayloadAction<{ page: number; data: any }>) => {
         const { page, data } = action.payload;
         state.formData[page] =  { ...state.formData[page], ...data }; 
      },
      setcurrentPage2: (state, action: PayloadAction<number>) => {
         state.currentPage2 = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchCateringData.pending, (state) => {
            state.loading = true;
         })
         .addCase(fetchCateringData.fulfilled, (state, action) => {
            state.loading = false;
            state.formData = action.payload; // Set the fetched data for all pages
            state.error = null;
         })
         .addCase(fetchCateringData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || null; 
         })
         .addCase(saveCateringDetails.pending, (state) => {
            state.loading = true;
         })
         .addCase(saveCateringDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.formData = action.payload; // Update state with saved data
            state.error = null;
         })
         .addCase(saveCateringDetails.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || null; 
         });
   },
});

// Export the reducer and actions
export const { resetCateringState, updateFormData, setcurrentPage2 } = cateringSlice.actions;
export default cateringSlice.reducer;
