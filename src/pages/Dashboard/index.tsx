import AuthedScreenContainer from '@/components/ScreenContainer/Auth';
import LandlordDashboard from './Landlord';

const Dashboard = () => {
  return (
    <AuthedScreenContainer title="Dashboard">
      <LandlordDashboard />
    </AuthedScreenContainer>
  );
};

export default Dashboard;
