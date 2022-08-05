import { AppDispatch } from "./../index";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Data from "./activities.json";
import { Activities } from "../../models/activities";

// --:  Types
export interface ActivitiesState {
  data: [];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
}

// --: Initial state
const initialState: ActivitiesState = {
  data: [],
  status: "idle",
  error: null,
};

type Config = {
  dispatch: AppDispatch;
};
export const fetchActivities = createAsyncThunk<any, void, Config>(
  "/activities",
  async () => {
    try {
      // Here we would normally make a network request to get the data.
      // Using async/await to simulate a network request and a try/catch to handle errors.
      // eg./ const response = await fetch("https://openplay.net/v1/japi/activities", {...config});
      // const data = await response.json();
      // return data;
      return Data.data;
    } catch (error) {
      return error;
    }
  }
);

// ========================
// === < Slice /> =========
export const activitiesSlice = createSlice({
  name: "activities",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder // When fetchActivities is called, set status to loading
      .addCase(fetchActivities.pending, (state) => {
        state.status = "loading";
      }) // When fetchActivities succeeds, set status to succeeded and set data to the response
      .addCase(
        fetchActivities.fulfilled,
        (state: ActivitiesState, { payload }) => {
          state.status = "succeeded";
          state.data = payload;
        }
      ) // When fetchActivities fails, set status to failed and set error to the error message
      .addCase(
        fetchActivities.rejected,
        (state: ActivitiesState, { error }) => {
          state.status = "failed";
          state.error = error.message;
        }
      );
  },
});

// --: Selectors
export const selectActivity = (state: any, id: number) => {
  // Get all activities for the facility pressed by user and sort by time
  return state.activities.data
    .filter(({ facility_id }: { facility_id: number }) => facility_id === id)
    .sort((a: Activities, b: Activities) => {
      let time1: any = new Date("01-01-2017 " + a.start_time + ":00");
      let time2: any = new Date("01-01-2017 " + b.start_time + ":00");
      return time1.getTime() - time2.getTime();
    });
};
export const selectAll = (state: { activities: { data: Activities } }) =>
  state.activities.data;
export const getDataStatus = (state: any) => state.activities.status;
export const getDataError = (state: any) => state.activities.error;

export default activitiesSlice.reducer;
