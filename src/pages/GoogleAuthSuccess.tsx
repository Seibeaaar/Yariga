import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import Loader from '@/components/Loader';

import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux';
import { authViaGoogleError } from '@/redux/reducers/auth';
import { setUser } from '@/redux/reducers/user';

const GoogleAuthSuccessPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const params = queryString.parse(window.location.search);
    const token = params.token as string;
    const user = params.user
      ? JSON.parse(decodeURIComponent(params.user as string))
      : null;

    if (token && user) {
      localStorage.setItem('token', token);
      dispatch(setUser(user));
      navigate('/dashboard');
    } else {
      dispatch(authViaGoogleError('Missing data from Google'));
      navigate('/');
    }
  }, [navigate, dispatch]);

  return <Loader showLoader />;
};

export default GoogleAuthSuccessPage;
