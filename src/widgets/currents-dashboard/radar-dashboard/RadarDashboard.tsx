import { type FC } from 'react';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import type { ICurrentDashboardProps } from '../../../shared/types';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export const RadarDashboard: FC<ICurrentDashboardProps> = ({ visibleLabels, data: dataCharts, backgroundColor }) => {
  const data = {
    labels: visibleLabels,
    datasets: [
      {
        data: dataCharts,
        backgroundColor,
        borderColor: ['rgb(140,140,140)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div style={{ width: '100%' }}>
      <Radar
        data={data}
        options={options}
      />
      ;
    </div>
  );
};
