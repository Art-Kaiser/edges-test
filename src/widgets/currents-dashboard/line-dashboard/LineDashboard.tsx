import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import type { FC } from 'react';
import type { ICurrentDashboardProps } from '../../../shared/types';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface ILineDashboardProps extends ICurrentDashboardProps {
  fill: boolean;
}
export const LineDashboard: FC<ILineDashboardProps> = ({ visibleLabels, data: dataCharts, fill }) => {
  const data = {
    labels: visibleLabels,
    datasets: [
      {
        fill,
        data: dataCharts,
        backgroundColor: 'rgb(189,253,186)',
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
      <Line
        data={data}
        options={options}
      />
      ;
    </div>
  );
};
