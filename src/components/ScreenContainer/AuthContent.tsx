import { NavbarContext } from '@/contexts/NavbarContext';
import useWindowSize from '@/hooks/useWindowSize';
import { AuthedScreenContainerProps } from '@/types/components';
import { FC, useContext } from 'react';

const AuthContainerContent: FC<AuthedScreenContainerProps> = ({
  children,
  title = '',
  actionItem,
}) => {
  const { width } = useWindowSize();
  const { navbarCollapsed } = useContext(NavbarContext);

  const calculateLeftPaddingStyle = () => {
    if (width <= 1024) {
      return 'pl-[15px]';
    }

    return navbarCollapsed ? 'pl-[115px]' : 'pl-[265px]';
  };

  const shouldRenderContentHeader = !!title || !!actionItem;
  return (
    <section
      className={`transition-all min-h-[calc(100vh-70px)] bg-bg-light mt-[70px] dark:bg-bg-dark w-screen p-[15px] flex-grow ${calculateLeftPaddingStyle()}`}
    >
      {shouldRenderContentHeader && (
        <div className="flex items-center justify-between mb-[24px]">
          {title && <h1 className="text-2xl font-bold">{title}</h1>}
          {actionItem ?? null}
        </div>
      )}
      {children}
    </section>
  );
};

export default AuthContainerContent;
