import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { uploadAvatar } from "@/redux/thunks/profile";

import Button from "@/components/Button";
import ScreenContainer from "@/components/ScreenContainer";
import { Avatar } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import CloseIcon from "@mui/icons-material/Close";
import { ChangeEvent, useState, useRef } from "react";
import { ACCEPTED_AVATAR_FORMATS } from "@/constants/profile";
import Loader from "@/components/Loader";

const ProfileAvatarUpload = () => {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch<AppDispatch>();
  const { pending } = useSelector((state: RootState) => state.profile);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    setShowTooltip(false);
    if (e.target.files?.length) {
      setUploadedImage(e.target.files[0]);
    }
  };

  const openFileCatalog = () => fileInputRef.current?.click();

  const deleteUploadedImage = () => {
    setUploadedImage(null);
  };

  const formatImageSrc = () =>
    uploadedImage ? URL.createObjectURL(uploadedImage) : "";

  const onSubmit = () => {
    const formData = new FormData();
    formData.append("avatar", uploadedImage!);
    dispatch(uploadAvatar(formData));
  };

  return (
    <ScreenContainer className="pt-[24px] pb-[48px] flex flex-col items-center">
      {pending ? <Loader /> : null}
      <h1 className="text-center font-bold text-2xl md:text-3xl mb-[16px]">
        Please choose your profile picture
      </h1>
      <h3 className="text-center font-medium text-xl">
        It is important to build a trust between parties
      </h3>
      <section className="flex flex-1 items-center">
        <div
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onClick={() => !uploadedImage && openFileCatalog()}
          className="w-[254px] h-[254px] rounded-full cursor-pointer relative border-2 border-secondary-light dark:border-secondary-dark"
        >
          <Avatar src={formatImageSrc()} sx={{ width: 250, height: 250 }} />
          <input
            type="file"
            className="w-0 h-0 absolute"
            onChange={handleImageUpload}
            title=""
            ref={fileInputRef}
            accept={ACCEPTED_AVATAR_FORMATS.map((format) => `.${format}`).join(
              ",",
            )}
          />
          {uploadedImage && showTooltip ? (
            <div className="flex gap-[48px] justify-center items-center w-full h-full bg-secondary-light rounded-full absolute top-0 opacity-80">
              <div
                onClick={openFileCatalog}
                className="flex w-[48px] h-[48px] items-center justify-center rounded bg-primary-light opacity-1"
              >
                <FileDownloadIcon />
              </div>
              <div
                onClick={deleteUploadedImage}
                className="flex w-[48px] h-[48px] items-center justify-center rounded bg-primary-light"
              >
                <CloseIcon />
              </div>
            </div>
          ) : null}
        </div>
      </section>
      <div className="w-1/3">
        <Button
          onClick={onSubmit}
          disabled={!uploadedImage}
          text="Upload a profile picture"
        />
      </div>
    </ScreenContainer>
  );
};

export default ProfileAvatarUpload;
