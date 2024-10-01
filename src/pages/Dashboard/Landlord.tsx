import { useSelector } from 'react-redux';
import {
  selectUserStats,
  selectGetUserStatsPending,
} from '@/redux/selectors/user';
import AgreementTotalWidget from '@/components/Dashboard/AgreementTotal';
import StatsItem from '@/components/Dashboard/StatsItem';
import { LandlordStats } from '@/types/user';
import LatestAgreementsWidget from '@/components/Dashboard/LatestAgreements';

const LandlordDashboard = () => {
  const userStats = useSelector(selectUserStats) as LandlordStats | null;
  const getStatsPending = useSelector(selectGetUserStatsPending);
  return (
    <>
      <div className="flex items-center gap-[16px] my-[24px]">
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
      <div className="flex gap-[16px] items-stretch">
        <AgreementTotalWidget />
        <LatestAgreementsWidget />
      </div>
    </>
  );
};

export default LandlordDashboard;
