import NonAuthorizedScreen from '@/components/ScreenContainer/NonAuth';
import PropertyPreferencesForm from '@/components/Preferences/Form';

const PreferencesPage = () => {
  return (
    <NonAuthorizedScreen>
      <div className="pt-[36px] pb-[28px]">
        <div className="text-center px-[24px]">
          <h1 className="text-4xl font-bold">Before you go to Yariga</h1>
          <h3 className="text-secondary-light dark:text-secondary-dark text-xl">
            Describe criteria of your dream deal so we can find best options for
            you
          </h3>
        </div>
        <PropertyPreferencesForm />
      </div>
    </NonAuthorizedScreen>
  );
};

export default PreferencesPage;
