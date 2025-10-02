import { useGetEdgesCurrents } from '../../../shared/hooks/use-get-edges-currents/useGetEdgesCurrents.ts';
import { DoughnutDashboard } from '../../../widgets/currents-dashboard/doughnut-dashboard/DoughnutDashboard.tsx';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

import { RadarDashboard } from '../../../widgets/currents-dashboard/radar-dashboard/RadarDashboard.tsx';
import { LineDashboard } from '../../../widgets/currents-dashboard/line-dashboard/LineDashboard.tsx';
import { BarDashboard } from '../../../widgets/currents-dashboard/bar-dashboard/BarDashboard.tsx';
import { SpeedometerDashboard } from '../../../widgets/currents-dashboard/speedometer-dashboard/SpeedometerDashboard.tsx';
import { ProgressBar } from '../../../widgets/currents-dashboard/ProgressBar/ProgressBar.tsx';
import { usePrepareChartsData } from '../../../shared/hooks/use-prepare-charts-data/usePrepareChartsData.tsx';
import { useQueryTagParams } from '../../../shared/hooks/use-query-tag-params/useQueryTagParams.ts';
import { TagsEnum } from '../../../shared/types';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export const CurrentsPage = () => {
  const { tag } = useQueryTagParams(TagsEnum.REAL);
  const { data: currents, isError, isLoading } = useGetEdgesCurrents(tag);
  const { changeVisible, visibleLabels, dataFull, ...dataCharts } = usePrepareChartsData(currents ?? {});

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <h1>Текущие значения параметров</h1>
      {!isError ? (
        <div style={{ width: '100%', position: 'relative', display: 'flex', justifyContent: 'space-evenly' }}>
          <div>
            <div
              style={{
                width: '20%',
                display: 'flex',
                gap: '10px',
                flexDirection: 'column',
                alignItems: 'flex-start',
                height: '900px',
                flexWrap: 'wrap',
                position: 'sticky',
                top: 50,
              }}
            >
              {dataFull.map(([label, value, color]) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '10px',
                    width: '300px',
                  }}
                >
                  <div style={{ background: color, width: 20, height: 20 }} />
                  <span style={{ marginRight: '10px', textAlign: 'start' }}>
                    {label} - {value}
                  </span>
                  <button
                    style={{ background: visibleLabels.includes(label) ? 'red' : 'green', color: 'white' }}
                    onClick={() => changeVisible(label)}
                  >
                    <span>{visibleLabels.includes(label) ? 'off' : 'on'}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '45%', alignItems: 'center' }}>
            <SpeedometerDashboard
              currentValue={dataCharts.data.at(-1)}
              maxValue={Math.max(...Object.values(currents ?? {}))}
            />

            <DoughnutDashboard
              visibleLabels={visibleLabels}
              {...dataCharts}
            />

            <RadarDashboard
              visibleLabels={visibleLabels}
              {...dataCharts}
            />

            <BarDashboard
              visibleLabels={visibleLabels}
              {...dataCharts}
            />

            <LineDashboard
              fill
              visibleLabels={visibleLabels}
              {...dataCharts}
            />

            {dataFull?.map(([label, value, color]) => (
              <ProgressBar
                key={label}
                value={value}
                maxValue={Math.max(...Object.values(currents ?? {}))}
                barColor={color}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>Ошибка при получении данных</div>
      )}
    </div>
  );
};
