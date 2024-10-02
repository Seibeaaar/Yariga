import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/redux';
import { getStats } from '@/redux/actions/user';
import { getMyProperties, getRecommendations } from '@/redux/actions/property';
import AuthedScreenContainer from '@/components/ScreenContainer/Auth';
import LandlordDashboard from './Landlord';
import TenantDashboard from './Tenant';
import { selectUser } from '@/redux/selectors/user';
import { USER_ROLE } from '@/types/user';

const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user) {
      dispatch(getStats());
      if (user.role === USER_ROLE.Landlord) {
        dispatch(getMyProperties());
      } else {
        dispatch(getRecommendations());
      }
    }
  }, [dispatch, user]);

  const renderDashboardContent = () => {
    if (!user) {
      return null;
    }

    return user.role === USER_ROLE.Landlord ? (
      <LandlordDashboard />
    ) : (
      <TenantDashboard />
    );
  };
  return (
    <AuthedScreenContainer title="Dashboard">
      {renderDashboardContent()}
    </AuthedScreenContainer>
  );
};

export default Dashboard;
