import ReactSpeedometer from 'react-d3-speedometer';
import type { FC } from 'react';

interface ISpeedometerDashboardProps {
  maxValue?: number;
  currentValue?: number;
}
export const SpeedometerDashboard: FC<ISpeedometerDashboardProps> = ({ maxValue, currentValue }) => {
  return (
    <ReactSpeedometer
      maxValue={maxValue}
      segmentColors={['lightgreen', 'limegreen', 'gold', 'tomato', 'firebrick']}
      value={currentValue}
      width={500}
      needleColor={'rgb(140,140,140)'}
    />
  );
};
