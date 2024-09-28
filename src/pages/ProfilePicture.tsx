import NonAuthorizedScreen from '@/components/ScreenContainer/NonAuth';
import ProfilePicutreUpload from '@/components/ProfilePicture/Upload';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  selectAddProfilePictureError,
  selectSetPreferencesPending,
} from '@/redux/selectors/user';
import Button from '@/components/Button';
import Loader from '@/components/Loader';
import Popup from '@/components/Popup';

const ProfilePicturePage = () => {
  const navigate = useNavigate();
  const addProfilePictureError = useSelector(selectAddProfilePictureError);
  const addProfilePicturePending = useSelector(selectSetPreferencesPending);

  const onSkipClick = () => navigate('/set-preferences');

  return (
    <NonAuthorizedScreen>
      <Loader showLoader={addProfilePicturePending} />
      <Popup
        severity="error"
        title="Your photo was not uploaded"
        showPopup={!!addProfilePictureError}
        content={addProfilePictureError as string}
        vertical="top"
        horizontal="right"
      />
      <div className="min-h-screen flex flex-col py-[24px] md:py-[48px]">
        <div className="text-center px-[24px] animate-slideTop">
          <h1 className="text-4xl font-bold">
            Let's show you to other users here
          </h1>
          <h3 className="text-secondary-light dark:text-secondary-dark text-xl">
            Please upload your profile picture
          </h3>
        </div>
        <section className="w-full px-[24px] md:w-2/3 lg:w-1/2 md:px-0 flex flex-col justify-end flex-grow mx-auto animate-slideBottom">
          <ProfilePicutreUpload />
          <Button text="Skip for now" variant="text" onClick={onSkipClick} />
        </section>
      </div>
    </NonAuthorizedScreen>
  );
};

export default ProfilePicturePage;
