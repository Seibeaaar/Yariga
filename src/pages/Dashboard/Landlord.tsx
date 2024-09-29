import AgreementTotalWidget from '@/components/Dashboard/AgreementTotal';
import StatsItem from '@/components/Dashboard/StatsItem';

const LandlordDashboard = () => {
  return (
    <>
      <div className="flex items-center gap-[16px] my-[24px]">
        <StatsItem value={684} label="Properties for sale" />
        <StatsItem value={126} label="Properties for retn" />
        <StatsItem value={290} label="Total customers" />
        <StatsItem value={350} label="Total agreements" />
      </div>
      <AgreementTotalWidget />
    </>
  );
};

export default LandlordDashboard;
