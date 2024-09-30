import { useSelector } from 'react-redux';
import {
  selectUserStats,
  selectGetUserStatsPending,
} from '@/redux/selectors/user';
import AgreementTotalWidget from '@/components/Dashboard/AgreementTotal';
import StatsItem from '@/components/Dashboard/StatsItem';
import { TenantStats } from '@/types/user';

const TenantDashboard = () => {
  const userStats = useSelector(selectUserStats) as TenantStats | null;
  const getStatsPending = useSelector(selectGetUserStatsPending);
  return (
    <>
      <div className="flex items-center gap-[16px] my-[24px]">
        <StatsItem
          pending={getStatsPending}
          value={userStats?.propertiesPurchased}
          label="Properties purchased"
        />
        <StatsItem
          pending={getStatsPending}
          value={userStats?.propertiesRented}
          label="Properties rented"
        />
        <StatsItem
          pending={getStatsPending}
          value={userStats?.agreementsCount}
          label="Successful agreements"
        />
      </div>
      <AgreementTotalWidget />
    </>
  );
};

export default TenantDashboard;
