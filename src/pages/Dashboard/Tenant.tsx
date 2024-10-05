import { useSelector } from 'react-redux';
import {
  selectUserStats,
  selectGetUserStatsPending,
} from '@/redux/selectors/user';
import AgreementTotalWidget from '@/components/Dashboard/AgreementTotal';
import StatsItem from '@/components/Dashboard/StatsItem';
import LatestAgreementsWidget from '@/components/Dashboard/LatestAgreements';
import { TenantStats, USER_ROLE } from '@/types/user';
import RecommendationsList from '@/components/Dashboard/RecommendationsList';

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
      <div className="flex gap-[16px] items-stretch my-[24px]">
        <AgreementTotalWidget />
        <LatestAgreementsWidget userRole={USER_ROLE.Tenant} />
      </div>
      <RecommendationsList />
    </>
  );
};

export default TenantDashboard;
