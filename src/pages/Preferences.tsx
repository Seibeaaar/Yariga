import { setPreferences } from '@/redux/actions/user';
import NonAuthorizedScreen from '@/components/ScreenContainer/NonAuth';
import PropertyPreferencesForm from '@/components/Preferences/Form';
import AnimatedBlock from '@/components/AnimatedBlock';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux';
import { PropertyFilters } from '@/types/property';

const PreferencesPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const onFormSubmit = (payload: PropertyFilters) =>
    dispatch(setPreferences(payload));

  return (
    <NonAuthorizedScreen>
      <div className="pt-[36px] pb-[28px]">
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
          <h1 className="text-4xl font-bold">Before you go to Yariga</h1>
          <h3 className="text-secondary-light dark:text-secondary-dark text-xl">
            Describe your preferences so we can find best options for you
          </h3>
        </AnimatedBlock>
        <div className="mx-auto px-[24px] md:w-3/4 md:p-0 mt-[24px]">
          <PropertyPreferencesForm
            submitText="Set your preferences"
            animated
            onSubmit={onFormSubmit}
          />
        </div>
      </div>
    </NonAuthorizedScreen>
  );
};

export default PreferencesPage;
