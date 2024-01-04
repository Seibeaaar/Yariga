import { createSlice } from "@reduxjs/toolkit";
import { Profile } from "@/types/proifle";
import { executeLoginRequest, executeSignUpRequest } from "../thunks/profile";

export type ProfileState = {
  pending: boolean;
  profile: Profile | null;
  error: boolean;
};

const initialState: ProfileState = {
  pending: false,
  profile: null,
  error: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(executeLoginRequest.pending, (state) => {
      state.pending = true;
    });
    builder.addCase(executeLoginRequest.fulfilled, (state, action) => {
      state.pending = false;
      state.error = false;
      state.profile = action.payload;
    });
    builder.addCase(executeLoginRequest.rejected, (state) => {
      state.error = true;
    });
    builder.addCase(executeSignUpRequest.pending, (state) => {
      state.pending = true;
    });
    builder.addCase(executeSignUpRequest.fulfilled, (state, action) => {
      state.pending = false;
      state.error = false;
      state.profile = action.payload;
    });
    builder.addCase(executeSignUpRequest.rejected, (state) => {
      state.error = true;
    });
  },
});

export default profileSlice.reducer;
