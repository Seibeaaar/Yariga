import { Link } from 'react-router-dom';
import NotFoundImage from '@/assets/images/404.webp';
import NonAuthorizedScreen from '@/components/ScreenContainer/NonAuth';
import AnimatedBlock from '@/components/AnimatedBlock';

const NotFoundPage = () => {
  return (
    <NonAuthorizedScreen>
      <div className="w-screen h-screen flex flex-col items-center justify-center px-[24px] md:px-0">
        <AnimatedBlock
          animationProps={{
            initial: {
              opacity: 0,
              y: -200,
            },
            animate: {
              opacity: 1,
              y: 0,
            },
            transition: {
              duration: 0.5,
            },
          }}
        >
          <img
            src={NotFoundImage}
            alt="404"
            className="w-[240px] h-[240px] md:w-[360px] md:h-[360px]"
          />
        </AnimatedBlock>
        <AnimatedBlock
          className="text-center"
          animationProps={{
            initial: {
              opacity: 0,
              y: 200,
            },
            animate: {
              opacity: 1,
              y: 0,
            },
            transition: {
              duration: 0.5,
            },
          }}
        >
          <h1 className="font-bold text-4xl mt-[24px]">Oh no...</h1>
          <p className="my-[12px] font-medium text-xl text-secondary-light dark:text-secondary-dark">
            Unfortunately Yariga does not serve that page
          </p>
          <Link className="text-primary text-lg" to="/">
            Come back
          </Link>
        </AnimatedBlock>
      </div>
    </NonAuthorizedScreen>
  );
};

export default NotFoundPage;
