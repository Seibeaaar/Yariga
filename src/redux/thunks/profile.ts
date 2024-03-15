import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginRequest,
  signUpRequest,
  completeProfileRequest,
} from "@/api/auth";
import { LoginData, ProfileCompletionRequest, SignUpData } from "@/types/auth";
import { emailVerificationRequest } from "@/api/verification";
import { uploadProfileAvatarRequest } from "@/api/profile";

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

export const verifyEmail = createAsyncThunk(
  "profile/verifyEmail",
  async (id: string, { rejectWithValue }) => {
    try {
      const profile = await emailVerificationRequest(id);
      return profile;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const completeProfile = createAsyncThunk(
  "profile/complete",
  async (data: ProfileCompletionRequest, { rejectWithValue }) => {
    try {
      const profile = await completeProfileRequest(data);
      return profile;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const uploadAvatar = createAsyncThunk(
  "profile/uploadAvatar",
  async (data: FormData, { rejectWithValue }) => {
    try {
      const profile = await uploadProfileAvatarRequest(data);
      return profile;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);
