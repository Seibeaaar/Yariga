import { Profile } from "@/types/proifle";
import instance from ".";

export const uploadProfileAvatarRequest = async (
  data: FormData,
): Promise<Profile> => {
  const result = await instance.post("/profile/avatar", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return result.data;
};
