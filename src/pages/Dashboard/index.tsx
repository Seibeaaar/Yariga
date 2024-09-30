import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux';
import { getStats } from '@/redux/actions/user';
import AuthedScreenContainer from '@/components/ScreenContainer/Auth';
import LandlordDashboard from './Landlord';

const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getStats());
  }, []);
  return (
    <AuthedScreenContainer title="Dashboard">
      <LandlordDashboard />
    </AuthedScreenContainer>
  );
};

export default Dashboard;
