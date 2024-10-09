import { FC, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkTokenValid } from '@/utils/user';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux';
import { logOut } from '@/redux/actions/auth';
import { selectUser } from '@/redux/selectors/user';

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const user = useSelector(selectUser);
  const tokenValid = checkTokenValid();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!user || !tokenValid) {
      dispatch(logOut());
      navigate('/');
    }
  }, [dispatch, user, tokenValid]);

  return children;
};

export default ProtectedRoute;
