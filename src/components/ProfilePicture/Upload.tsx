import { useState, ChangeEvent, useRef } from 'react';
import { Upload, Clear, Person } from '@mui/icons-material';
import ProfilePictureUploadOption from './UploadOption';
import Button from '../Button';
import { ACCEPTED_IMAGE_FORMATS } from '@/constants/common';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux';
import { addProfilePicture } from '@/redux/actions/user';
import useScreenOrientation from '@/hooks/useScreenOrientation';

const ProfilePicutreUpload = () => {
  const [picture, setPicture] = useState<File | null>(null);
  const [hovered, setHovered] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const { isMobileLandscape } = useScreenOrientation();

  const onPictureUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    setPicture(e.target.files[0]);
  };

  const onPictureRemoval = () => {
    setPicture(null);
  };

  const openInput = () => {
    if (!inputRef || !inputRef.current) return;
    inputRef.current.click();
  };

  const onSubmit = () => {
    if (!picture) return;
    dispatch(
      addProfilePicture({
        photo: picture,
      }),
    );
  };

  const uploadDimensionStyles = () => {
    if (isMobileLandscape) {
      return 'w-[270px] md:w-[360px] lg:w-[480px] h-[270px] md:h-[360px] lg:h-[480px] my-[24px]';
    }

    return 'max-w-[270px] max-h-[270px] md:max-w-[360px] md:max-h-[360px] lg:max-w-[450px] lg:max-h-[450px] w-full h-full';
  };

  return (
    <>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`relative flex-grow m-auto overflow-hidden ${uploadDimensionStyles()} rounded-full text-secondary-light dark:text-secondary-dark border border-border-light dark:border-border-dark flex items-center justify-center`}
      >
        {picture ? (
          <img
            className="w-full h-full"
            src={URL.createObjectURL(picture)}
            alt="Profile picture"
          />
        ) : (
          <Person
            color="inherit"
            sx={{
              width: 180,
              height: 180,
            }}
          />
        )}
        <input
          ref={inputRef}
          onChange={onPictureUpload}
          className="absolute w-full h-full opacity-0 cursor-pointer"
          type="file"
          accept={ACCEPTED_IMAGE_FORMATS.map((format) => `.${format}`).join(
            ',',
          )}
        />
        {picture && hovered ? (
          <div className="absolute w-full h-full flex items-center justify-center">
            <div className="absolute w-full h-full bg-secondary-light dark:bg-secondary-dark opacity-70" />
            <div className="flex gap-[16px]">
              <ProfilePictureUploadOption
                icon={Clear}
                onClick={onPictureRemoval}
              />
              <ProfilePictureUploadOption icon={Upload} onClick={openInput} />
            </div>
          </div>
        ) : null}
      </div>
      <Button
        onClick={onSubmit}
        text="Upload profile picture"
        disabled={!picture}
      />
    </>
  );
};

export default ProfilePicutreUpload;
