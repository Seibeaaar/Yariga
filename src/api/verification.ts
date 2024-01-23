import { Profile } from "@/types/proifle";
import instance from ".";

export const emailVerificationRequest = async (
  requestId: string,
): Promise<Profile> => {
  const result = await instance.post(`/verification/verifyEmail/${requestId}`);
  return result.data;
};
