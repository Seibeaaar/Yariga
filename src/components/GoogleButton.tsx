import Button from './Button';
import GoogleIcon from '@/assets/icons/Google.svg';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux';
import { authViaGoogleError as setAuthViaGoogleError } from '@/redux/reducers/auth';

const GoogleButton = () => {
  const dispatch = useDispatch<AppDispatch>();
  const onGoogleAuth = () => {
    dispatch(setAuthViaGoogleError(null));
    location.href = 'http://localhost:5001/auth/google';
  };
  return (
    <Button
      variant="outlined"
      onClick={onGoogleAuth}
      className="gap-[16px]"
      leftIcon={<img src={GoogleIcon} />}
      text="Continue with Google"
      type="button"
    />
  );
};

export default GoogleButton;
