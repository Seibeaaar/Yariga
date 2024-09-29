import { FC } from 'react';
import Widget from '../Widget';
import CountUp from 'react-countup';

type StatsItemProps = {
  value: number;
  label: string;
};

const StatsItem: FC<StatsItemProps> = ({ value, label }) => {
  return (
    <Widget className="flex items-center justify-between flex-grow">
      <div>
        <p className="text-sm text-secondary-light dark:text-secondary-dark">
          {label}
        </p>
        <CountUp
          end={value}
          className="text-2xl text-primary-light dark:text-primary-dark"
        />
      </div>
    </Widget>
  );
};

export default StatsItem;
