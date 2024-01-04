import { createSlice } from "@reduxjs/toolkit";
import { Profile } from "@/types/proifle";

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
});

export default profileSlice.reducer;
