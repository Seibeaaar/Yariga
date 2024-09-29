import { useEffect, useRef, useState } from 'react';
import Widget from '@/components/Widget';
import AgreementTotalChart from './Chart';

const AgreementTotal = () => {
  const [chartWidth, setChartWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

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

  return (
    <Widget className="w-1/2">
      <div ref={containerRef} className="w-full">
        <p className="text-lg font-semibold">Total revenue</p>
        <h5 className="font-bold text-3xl mt-[12px] mb-[24px]">$280,000</h5>
        <AgreementTotalChart chartWidth={chartWidth} />
      </div>
    </Widget>
  );
};

export default AgreementTotal;
