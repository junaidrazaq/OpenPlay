import { AppDispatch } from "./../index";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Data from "./facilities.json";

// --:  Types
export interface FacilitiesState {
  data: [];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// --: Initial state
const initialState: FacilitiesState = {
  data: [],
  status: "idle",
  error: null,
};

type Config = {
  dispatch: AppDispatch;
};

export const fetchFacilities = createAsyncThunk<any, void, Config>(
  "/facilities",
  async () => {
    try {
      //  ** -- Here we would normally make a network request to get the data.
      // Using async/await to simulate a network request and a try/catch to handle errors.
      // eg./ const response = await fetch("https://openplay.net/v1/japi/activities", {...config});
      // const data = await response.json();
      // return data; -- **
      // : Sort facilities alphabetically
      const alphabetical = [...Data.data].sort(function (a, b) {
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });

      return alphabetical;
    } catch (error) {
      return error;
    }
  }
);

// ========================
// === < Slice /> =========
export const facilitiesSlice = createSlice({
  name: "facilities",
  initialState,
  reducers: {
    // ...
  },
  extraReducers(builder) {
    builder // When fetchFacilities is called, set status to loading
      .addCase(fetchFacilities.pending, (state: FacilitiesState, action) => {
        state.status = "loading";
      }) // When fetchFacilities succeeds, set status to succeeded and set data to the response
      .addCase(
        fetchFacilities.fulfilled,
        (state: FacilitiesState, { payload }: any) => {
          state.status = "succeeded";
          state.data = payload;
        }
      ) // When fetchFacilities fails, set status to failed and set error to the error message
      .addCase(
        fetchFacilities.rejected,
        (state: FacilitiesState, action: any) => {
          state.status = "failed";
          state.error = action.error.message;
        }
      );
  },
});

// --: Selectors
export const selectAll = (state: { facilities: any }) => state.facilities.data;
export const getDataStatus = (state: any) => state.facilities.status;
export const getDataError = (state: any) => state.facilities.error;

export default facilitiesSlice.reducer;
