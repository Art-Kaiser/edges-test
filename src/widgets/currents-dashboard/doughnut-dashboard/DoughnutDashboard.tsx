import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { type FC } from 'react';
import type { ICurrentDashboardProps } from '../../../shared/types';

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutDashboard: FC<ICurrentDashboardProps> = ({ visibleLabels, data: dataCharts, backgroundColor }) => {
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
    <div style={{ width: '65%', display: 'flex', justifyContent: 'center' }}>
      <Doughnut
        data={data}
        options={options}
      />
    </div>
  );
};
