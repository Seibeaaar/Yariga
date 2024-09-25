import { useState, ChangeEvent, useRef } from 'react';
import { Upload, Clear, Person } from '@mui/icons-material';
import ProfilePictureUploadOption from './UploadOption';
import Button from '../Button';

const ProfilePicutreUpload = () => {
  const [picture, setPicture] = useState<File | null>(null);
  const [hovered, setHovered] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

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

  return (
    <>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative overflow-hidden max-w-[360px] max-h-[360px] mx-auto h-full w-full rounded-full text-secondary-light dark:text-secondary-dark border border-border-light dark:border-border-dark flex items-center justify-center"
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
        onClick={() => console.log(picture)}
        text="Upload profile picture"
      />
    </>
  );
};

export default ProfilePicutreUpload;
