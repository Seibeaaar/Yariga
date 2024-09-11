import NonAuthorizedScreen from '@/components/ScreenContainer/NonAuth';
import SkyscraperImage from '@/assets/images/Skyscraper.webp';
import LoginForm from '@/components/Login/Form';
import AuthRedirect from '@/components/AuthRedirect';
import AnimatedBlock from '@/components/AnimatedBlock';

const LoginPage = () => {
  return (
    <NonAuthorizedScreen>
      <div className="flex items-center w-screen h-screen">
        <AnimatedBlock
          tag="section"
          initial={{
            opacity: 0,
          }}
          animate={{ opacity: 1 }}
          duration={1}
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
