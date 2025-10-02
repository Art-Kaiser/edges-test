import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import type { FC } from 'react';
import type { ICurrentDashboardProps } from '../../../shared/types';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const BarDashboard: FC<ICurrentDashboardProps> = ({ visibleLabels, data: dataCharts, backgroundColor }) => {
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
      <Bar
        data={data}
        options={options}
      />
      ;
    </div>
  );
};
