import NonAuthorizedScreen from '@/components/ScreenContainer/NonAuth';
import AnimatedBlock from '@/components/AnimatedBlock';
import ProfilePicutreUpload from '@/components/ProfilePicture/Upload';

const ProfilePicturePage = () => {
  return (
    <NonAuthorizedScreen>
      <div className="h-screen">
        <AnimatedBlock
          animationProps={{
            initial: {
              opacity: 0,
              y: -100,
            },
            animate: {
              opacity: 1,
              y: 0,
            },
            transition: {
              duration: 1,
            },
          }}
          className="text-center px-[24px]"
        >
          <h1 className="text-4xl font-bold">
            Let's show you to other users here
          </h1>
          <h3 className="text-secondary-light dark:text-secondary-dark text-xl">
            Please upload your profile picture
          </h3>
        </AnimatedBlock>
        <ProfilePicutreUpload />
      </div>
    </NonAuthorizedScreen>
  );
};

export default ProfilePicturePage;
