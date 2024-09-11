import { useSelector } from 'react-redux';
import { RootState } from '@/redux';

import NonAuthorizedScreen from '@/components/ScreenContainer/NonAuth';
import SkyscraperImage from '@/assets/images/Skyscraper.webp';
import SignUpForm from '@/components/SignUp/Form';
import AuthRedirect from '@/components/AuthRedirect';
import AnimatedBlock from '@/components/AnimatedBlock';
import Loader from '@/components/Loader';
import Popup from '@/components/Popup';

const SignUpPage = () => {
  const { authPending, authError } = useSelector(
    (state: RootState) => state.auth,
  );
  return (
    <NonAuthorizedScreen>
      <Loader showLoader={authPending} />
      <Popup
        vertical="top"
        horizontal="right"
        title="Oops. Something wrong"
        severity="error"
        showPopup={!!authError}
        content={authError as string}
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
            <h1 className="text-4xl font-bold">Welcome to Yariga</h1>
            <p className="text-secondary-light dark:text-secondary-dark">
              Please enter your details to join our community
            </p>
            <SignUpForm />
            <AuthRedirect mode="signUp" />
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

export default SignUpPage;
