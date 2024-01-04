import instance from ".";
import { LoginData, SignUpData } from "@/types/auth";

export const loginRequest = async (data: LoginData) => {
  const result = await instance.post("/auth/login", data);
  return result.data;
};

export const signUpRequest = async (data: SignUpData) => {
  const result = await instance.post("/auth/signUp", data);
  return result.data;
};
