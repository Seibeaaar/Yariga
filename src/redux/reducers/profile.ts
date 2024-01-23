import { createSlice } from "@reduxjs/toolkit";
import { Profile } from "@/types/proifle";
import {
  executeLoginRequest,
  executeSignUpRequest,
  verifyEmail,
} from "../thunks/profile";
import router from "@/router";

export type ProfileState = {
  pending: boolean;
  profile: Profile | null;
  error: boolean;
  emailVerificationComplete: boolean;
  emailVerificationError: boolean;
};

const initialState: ProfileState = {
  pending: false,
  profile: null,
  error: false,
  emailVerificationComplete: false,
  emailVerificationError: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(executeLoginRequest.pending, (state) => {
      state.pending = true;
      state.error = false;
    });
    builder.addCase(executeLoginRequest.fulfilled, (state, action) => {
      state.pending = false;
      state.error = false;
      state.profile = action.payload;
      router.navigate("/complete-profile");
    });
    builder.addCase(executeLoginRequest.rejected, (state) => {
      state.pending = false;
      state.error = true;
    });
    builder.addCase(executeSignUpRequest.pending, (state) => {
      state.pending = true;
      state.error = false;
    });
    builder.addCase(executeSignUpRequest.fulfilled, (state, action) => {
      state.pending = false;
      state.error = false;
      state.profile = action.payload;
      router.navigate("/email-sent");
    });
    builder.addCase(executeSignUpRequest.rejected, (state) => {
      state.error = true;
      state.pending = false;
    });
    builder.addCase(verifyEmail.fulfilled, (state, action) => {
      state.pending = false;
      state.emailVerificationComplete = true;
      state.profile = action.payload;
    });
    builder.addCase(verifyEmail.rejected, (state) => {
      state.emailVerificationComplete = true;
      state.emailVerificationError = true;
      state.pending = false;
    });
    builder.addCase(verifyEmail.pending, (state) => {
      state.pending = true;
      state.emailVerificationComplete = false;
      state.emailVerificationError = false;
    });
  },
});

export default profileSlice.reducer;
