import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginRequest, signUpRequest } from "@/api/auth";
import { LoginData, SignUpData } from "@/types/auth";

export const executeLoginRequest = createAsyncThunk(
  "profile/login",
  async (data: LoginData, { rejectWithValue }) => {
    try {
      const { profile, token } = await loginRequest(data);
      localStorage.setItem("JWT", token);
      return profile;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const executeSignUpRequest = createAsyncThunk(
  "profile/signUp",
  async (data: SignUpData, { rejectWithValue }) => {
    try {
      const { profile, token } = await signUpRequest(data);
      localStorage.setItem("JWT", token);
      return profile;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);
