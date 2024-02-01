import { Profile } from "@/types/proifle";
import { PhoneVerificationRequest } from "@/types/auth";
import instance from ".";

export const emailVerificationRequest = async (
  requestId: string,
): Promise<Profile> => {
  const result = await instance.post(`/verification/verifyEmail/${requestId}`);
  return result.data;
};

export const phoneVerificationRequest = async (
  data: PhoneVerificationRequest,
): Promise<Profile> => {
  const result = await instance.post(`/verification/sendRequest`, data);
  return result.data;
};
