import { useContext, FC } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { COLORS } from '@/constants/styles';
import { ThemeContext } from '@/customization/ThemeContext';

type AgreementChartProps = {
  chartWidth: number;
};

const barData = [
  {
    name: 'May',
    value: 250,
  },
  {
    name: 'June',
    value: 170,
  },
  {
    name: 'July',
    value: 120,
  },
  {
    name: 'August',
    value: 329,
  },
  {
    name: 'September',
    value: 128,
  },
];

const AgreementTotalChart: FC<AgreementChartProps> = ({ chartWidth }) => {
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

  return (
    <BarChart data={barData} width={chartWidth} height={200}>
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

export default AgreementTotalChart;
