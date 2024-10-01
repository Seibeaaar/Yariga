import { useContext, FC } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { COLORS } from '@/constants/styles';
import { RiseLoader } from 'react-spinners';
import { ThemeContext } from '@/customization/ThemeContext';
import { TotalByInterval } from '@/types/agreement';
import CustomLoader from '@/components/CustomLoader';

type AgreementChartProps = {
  chartWidth: number;
  totalByInterval: TotalByInterval[];
  pending: boolean;
};

const AgreementTotalChart: FC<AgreementChartProps> = ({
  chartWidth,
  totalByInterval,
  pending,
}) => {
  const { isDarkTheme } = useContext(ThemeContext);

  const formatTooltipInfo = (value: string) => ['', `$${value}`];
  const contentStyle = {
    backgroundColor: isDarkTheme ? COLORS['bg-dark'] : COLORS['bg-light'],
    border: 'none',
    borderRadius: 7,
  };
  const itemStyle = {
    color: isDarkTheme ? COLORS['secondary-dark'] : COLORS['secondary-light'],
  };

  const renderContent = () => {
    if (pending) {
      return <CustomLoader loader={RiseLoader} size={20} />;
    }

    if (totalByInterval.length === 0) {
      return <p className="text-xl">No data found</p>;
    }

    return (
      <BarChart data={totalByInterval} width={chartWidth} height={200}>
        <Bar radius={4} dataKey="value" fill={COLORS.primary} />
        <Tooltip
          itemStyle={itemStyle}
          cursor={false}
          formatter={formatTooltipInfo}
          contentStyle={contentStyle}
          separator=""
          labelClassName="text-secondary-light dark:text-secondary-dark"
        />
        <YAxis
          hide
          padding={{
            bottom: 12,
          }}
          dataKey="value"
          tickSize={0}
        />
        <XAxis axisLine={false} dataKey="name" tickSize={0} />
      </BarChart>
    );
  };

  return (
    <article className="h-[200px] flex items-center justify-center">
      {renderContent()}
    </article>
  );
};

export default AgreementTotalChart;
