import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AuthRedirectMode } from '@/types/auth';
import { AUTH_REDIRECT_CONFIG } from '@/constants/auth';

type AuthRedirectProps = {
  mode: AuthRedirectMode;
};

const AuthRedirect: FC<AuthRedirectProps> = ({ mode }) => {
  const config = AUTH_REDIRECT_CONFIG[mode];

  return (
    <div className="flex justify-center items-center gap-[4px] text-sm">
      <p className="text-secondary-light dark:text-secondary-dark">
        {config.question}
      </p>
      <Link className="text-primary" to={config.path}>
        {config.linkTitle}
      </Link>
    </div>
  );
};

export default AuthRedirect;
