import { useSelector } from 'react-redux';
import {
  selectUserStats,
  selectGetUserStatsPending,
} from '@/redux/selectors/user';
import AgreementTotalWidget from '@/components/Dashboard/AgreementTotal';
import StatsItem from '@/components/Dashboard/StatsItem';
import { LandlordStats, USER_ROLE } from '@/types/user';
import LatestAgreementsWidget from '@/components/Dashboard/LatestAgreements';
import MyPropertiesList from '@/components/Dashboard/MyPropertiesList';

const LandlordDashboard = () => {
  const userStats = useSelector(selectUserStats) as LandlordStats | null;
  const getStatsPending = useSelector(selectGetUserStatsPending);
  return (
    <>
      <div className="flex flex-wrap items-center gap-[16px] mt-[24px]">
        <StatsItem
          pending={getStatsPending}
          value={userStats?.propertiesForSale}
          label="Properties for sale"
        />
        <StatsItem
          pending={getStatsPending}
          value={userStats?.propertiesForRent}
          label="Properties for rent"
        />
        <StatsItem
          pending={getStatsPending}
          value={userStats?.tenantsCount}
          label="Total customers"
        />
        <StatsItem
          pending={getStatsPending}
          value={userStats?.agreementsCount}
          label="Total agreements"
        />
      </div>
      <div className="flex flex-wrap gap-[16px] items-stretch my-[24px]">
        <AgreementTotalWidget />
        <LatestAgreementsWidget userRole={USER_ROLE.Landlord} />
      </div>
      <MyPropertiesList />
    </>
  );
};

export default LandlordDashboard;
