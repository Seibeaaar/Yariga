import { useSelector } from 'react-redux';
import { RootState } from '@/redux';

import NonAuthorizedScreen from '@/components/ScreenContainer/NonAuth';
import SkyscraperImage from '@/assets/images/Skyscraper.webp';
import LoginForm from '@/components/Login/Form';
import AuthRedirect from '@/components/AuthRedirect';
import AnimatedBlock from '@/components/AnimatedBlock';
import Loader from '@/components/Loader';
import Popup from '@/components/Popup';

const LoginPage = () => {
  const { authError, authViaGoogleError, authPending } = useSelector(
    (state: RootState) => state.auth,
  );

  return (
    <NonAuthorizedScreen>
      <Loader showLoader={authPending} />
      <Popup
        title="Oops. Something went wrong"
        content={authError as string}
        showPopup={!!authError}
        vertical="top"
        horizontal="right"
        severity="error"
      />
      <Popup
        title="Oops. Something went wrong"
        content={authViaGoogleError as string}
        showPopup={!!authViaGoogleError}
        vertical="top"
        horizontal="right"
        severity="error"
      />
      <div className="flex items-center w-screen h-screen">
        <AnimatedBlock
          tag="section"
          animationProps={{
            initial: {
              opacity: 0,
            },
            animate: {
              opacity: 1,
            },
            transition: {
              duration: 1,
            },
          }}
          className="flex-grow flex items-center justify-center"
        >
          <div className="w-full lg:w-2/3 px-[24px] lg:p-0">
            <h1 className="text-4xl font-bold">Welcome back</h1>
            <p className="text-secondary-light dark:text-secondary-dark">
              Please enter your details
            </p>
            <LoginForm />
            <AuthRedirect mode="login" />
          </div>
        </AnimatedBlock>
        <img
          src={SkyscraperImage}
          alt="Skyscraper"
          className="w-1/2 h-full hidden md:block"
        />
      </div>
    </NonAuthorizedScreen>
  );
};

export default LoginPage;
