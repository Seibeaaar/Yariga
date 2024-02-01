import { Profile } from "@/types/proifle";
import instance from ".";
import { ProfileAvatarRequest } from "@/types/proifle";

export const uploadProfileAvatarRequest = async (
  data: ProfileAvatarRequest,
): Promise<Profile> => {
  const result = await instance.post("/profile/avatar", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return result.data;
};
