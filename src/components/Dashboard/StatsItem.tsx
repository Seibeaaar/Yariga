import { FC } from 'react';
import Widget from '../Widget';
import CountUp from 'react-countup';

type StatsItemProps = {
  value?: number;
  label: string;
  pending: boolean;
};

const StatsItem: FC<StatsItemProps> = ({ value, label, pending }) => {
  const renderStatsContent = () => {
    if (pending) {
      return <p className="leading-8">Calculating...</p>;
    }

    if (value === undefined) {
      return <p className="text-2xl">N/A</p>;
    }

    return <CountUp end={value} className="text-2xl" />;
  };
  return (
    <Widget className="flex w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-12px)] items-center justify-between flex-grow">
      <div>
        <p className="text-sm text-secondary-light dark:text-secondary-dark">
          {label}
        </p>
        {renderStatsContent()}
      </div>
    </Widget>
  );
};

export default StatsItem;
