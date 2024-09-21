import NonAuthorizedScreen from '@/components/ScreenContainer/NonAuth';
import AnimatedBlock from '@/components/AnimatedBlock';
import PropertyForm from '@/components/Property/Form';

const FirstPropertyPage = () => {
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
            Add your first property so we can show it to potential tenants
          </h3>
        </AnimatedBlock>
        <PropertyForm animated error={null} pending={false} />
      </div>
    </NonAuthorizedScreen>
  );
};

export default FirstPropertyPage;
