import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  saveDecoratorData,
  getDecoratorData,
} from "@/services/flows/decoratorService";

interface DecoratorState {
  formData: Record<string, any>;
  currentPage2: number;
  loading: boolean;
  error: string | null;
}

const initialState: DecoratorState = {
  formData: {},
  currentPage2: 1,
  loading: false,
  error: null,
};

// Async thunk to fetch decorator data
export const fetchDecoratorData = createAsyncThunk(
  "decorator/fetchData",
  async (userId: string) => {
    const response = await getDecoratorData(userId);
    return response.data;
  },
);

// Async thunk to save decorator details
export const saveDecoratorDetails = createAsyncThunk(
  "decorator/saveData",
  async ({ userId, data }: { userId: string; data: any }) => {
    const response = await saveDecoratorData(userId, data);
    return response.data;
  },
);

// Create a slice of the store
const decoratorSlice = createSlice({
  name: "decorator",
  initialState,
  reducers: {
    resetDecoratorState: (state) => {
      state.formData = {};
      state.currentPage2 = 1;
      state.loading = false;
      state.error = null;
    },
    updateFormData: (
      state,
      action: PayloadAction<{ page: number; data: any }>,
    ) => {
      const { page, data } = action.payload;
      state.formData[page] = { ...state.formData[page], ...data };
    },
    setcurrentPage2: (state, action: PayloadAction<number>) => {
      state.currentPage2 = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDecoratorData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDecoratorData.fulfilled, (state, action) => {
        state.loading = false;
        state.formData = action.payload;
        state.error = null;
      })
      .addCase(fetchDecoratorData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      })
      .addCase(saveDecoratorDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(saveDecoratorDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.formData = action.payload; // Update state with saved data
        state.error = null;
      })
      .addCase(saveDecoratorDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  },
});

// Export the reducer and actions
export const { resetDecoratorState, updateFormData, setcurrentPage2 } =
  decoratorSlice.actions;
export default decoratorSlice.reducer;
