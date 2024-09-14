import NonAuthorizedScreen from '@/components/ScreenContainer/NonAuth';
import ProfileCompleteImage from '@/assets/images/ProfileComplete.webp';
import AnimatedBlock from '@/components/AnimatedBlock';

import ProfileCompleteForm from '@/components/ProfileComplete/Form';
import useScreenOrientation from '@/hooks/useScreenOrientation';

const ProfileCompleteScreen = () => {
  const { isMobileLandscape } = useScreenOrientation();
  return (
    <NonAuthorizedScreen>
      <div
        className={`flex items-center ${isMobileLandscape ? 'h-auto pt-[36px] pb-[16px]' : 'h-screen py-0'} w-screen`}
      >
        <img
          src={ProfileCompleteImage}
          alt="Person completing a form"
          className="w-1/2 h-full hidden lg:block"
        />
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
          <div className="w-full sm:w-3/4 xl:w-2/3 px-[24px] md:p-0">
            <h1 className="text-4xl font-bold">Complete your profile</h1>
            <p className="text-secondary-light dark:text-secondary-dark">
              Next step requires additional info for your Yariga profile
            </p>
            <ProfileCompleteForm />
          </div>
        </AnimatedBlock>
      </div>
    </NonAuthorizedScreen>
  );
};

export default ProfileCompleteScreen;
