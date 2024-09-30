import { ChangeEvent, useState, FC } from 'react';
import { AGREEMENT_TOTAL_INTERVAL } from '@/types/agreement';
import { PayloadAction } from '@reduxjs/toolkit';

type IntervalSelectorProps = {
  onIntervalSelect(
    interval: AGREEMENT_TOTAL_INTERVAL,
  ): PayloadAction<AGREEMENT_TOTAL_INTERVAL>;
};

const AgreementIntervalSelector: FC<IntervalSelectorProps> = ({
  onIntervalSelect,
}) => {
  const [currentInterval, setCurrentInterval] =
    useState<AGREEMENT_TOTAL_INTERVAL>(AGREEMENT_TOTAL_INTERVAL.Monthly);

  const onIntervalChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const interval = e.target.value as AGREEMENT_TOTAL_INTERVAL;
    setCurrentInterval(interval);
    onIntervalSelect(interval);
  };

  return (
    <select
      defaultValue={AGREEMENT_TOTAL_INTERVAL.Monthly}
      value={currentInterval}
      onChange={onIntervalChange}
      className="bg-bg-light dark:bg-bg-dark rounded-[4px] outline-none p-[8px] min-w-[120px] border-r-[8px] border-bg-light dark:border-bg-dark cursor-pointer h-fit"
    >
      {Object.values(AGREEMENT_TOTAL_INTERVAL).map((interval) => (
        <option value={interval} key={interval}>
          {interval[0].toUpperCase() + interval.slice(1)}
        </option>
      ))}
    </select>
  );
};

export default AgreementIntervalSelector;
