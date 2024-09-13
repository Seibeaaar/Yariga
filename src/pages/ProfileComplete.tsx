import NonAuthorizedScreen from '@/components/ScreenContainer/NonAuth';
import ProfileCompleteImage from '@/assets/images/ProfileComplete.webp';
import AnimatedBlock from '@/components/AnimatedBlock';

import ProfileCompleteForm from '@/components/ProfileComplete/Form';

const ProfileCompleteScreen = () => {
  return (
    <NonAuthorizedScreen>
      <div className="flex items-center h-screen w-screen">
        <img
          src={ProfileCompleteImage}
          alt="Person completing a form"
          className="w-1/2 h-full"
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
          <div className="w-full lg:w-2/3 px-[24px] lg:p-0">
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
