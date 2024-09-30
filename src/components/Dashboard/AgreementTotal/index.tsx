import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux';
import {
  selectTotalByInterval,
  selectGetTotalByIntervalPending,
} from '@/redux/selectors/agreement';
import { selectUserStats, selectUser } from '@/redux/selectors/user';
import Widget from '@/components/Widget';
import AgreementTotalChart from './Chart';
import AgreementIntervalSelector from './IntervalSelector';
import { AGREEMENT_TOTAL_INTERVAL } from '@/types/agreement';
import { getTotalByInterval } from '@/redux/actions/agreement';
import { USER_ROLE } from '@/types/user';

const AgreementTotal = () => {
  const [chartWidth, setChartWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch<AppDispatch>();

  const totalByInterval = useSelector(selectTotalByInterval);
  const getTotalByIntervalPending = useSelector(
    selectGetTotalByIntervalPending,
  );
  const userStats = useSelector(selectUserStats);
  const user = useSelector(selectUser);

  const onIntervalSelect = (interval: AGREEMENT_TOTAL_INTERVAL) =>
    dispatch(getTotalByInterval(interval));

  useEffect(() => {
    const updateChartWidth = () => {
      if (!containerRef.current) return;

      setChartWidth(containerRef.current.clientWidth);
    };

    updateChartWidth();
    window.addEventListener('resize', updateChartWidth);
    return () => {
      window.removeEventListener('resize', updateChartWidth);
    };
  }, []);

  useEffect(() => {
    onIntervalSelect(AGREEMENT_TOTAL_INTERVAL.Monthly);
  }, []);

  if (!user) return null;

  const renderTotal = () => {
    if (!userStats || userStats.agreementsTotal === undefined) {
      return 'N/A';
    }

    return `$${userStats.agreementsTotal}`;
  };

  return (
    <Widget className="w-1/2">
      <div ref={containerRef} className="w-full">
        <div className="flex justify-between mb-[24px]">
          <div>
            <p className="text-lg font-semibold">
              {user.role === USER_ROLE.Landlord
                ? 'Total revenue'
                : 'Total spent'}
            </p>
            <h5 className="font-bold text-3xl mt-[12px]">{renderTotal()}</h5>
          </div>
          <AgreementIntervalSelector onIntervalSelect={onIntervalSelect} />
        </div>
        <AgreementTotalChart
          totalByInterval={totalByInterval}
          pending={getTotalByIntervalPending}
          chartWidth={chartWidth}
        />
      </div>
    </Widget>
  );
};

export default AgreementTotal;
