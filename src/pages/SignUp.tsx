import NonAuthorizedScreen from '@/components/ScreenContainer/NonAuth';
import SkyscraperImage from '@/assets/images/Skyscraper.webp';
import SignUpForm from '@/components/SignUp/Form';

const SignUpPage = () => {
  return (
    <NonAuthorizedScreen>
      <div className="flex items-center w-screen h-screen">
        <section className="flex-grow flex items-center justify-center">
          <div className="w-full lg:w-2/3 px-[24px] lg:p-0">
            <h1 className="text-4xl font-bold">Welcome to Yariga</h1>
            <p className="text-secondary-light dark:text-secondary-dark">
              Please enter your details to join our community
            </p>
            <SignUpForm />
          </div>
        </section>
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
