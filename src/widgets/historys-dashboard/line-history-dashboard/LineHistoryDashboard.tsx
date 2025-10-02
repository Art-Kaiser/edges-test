import { useMemo, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { useGetEdgesHistories } from '../../../shared/hooks/use-get-edges-histories/useGetEdgesHistories.ts';
import Checkboxes from '../../../shared/ui/Checkboxes/Checkboxes.tsx';
import type { HistoryDataTuple } from '../../../shared/types/histories/histories-ui.types.ts';
import { generateRandomColor } from '../../../shared/utils/generate/generate-random-color.tsx';
import { useQueryTagParams } from '../../../shared/hooks/use-query-tag-params/useQueryTagParams.ts';
import { TagsEnum } from '../../../shared/types';

Chart.register(...registerables);

export const LineHistoryDashboard = () => {
  const { tag } = useQueryTagParams(TagsEnum.REAL);

  const { data: histories, isError, isLoading } = useGetEdgesHistories(tag);

  const [visibleLabels, setVisibleLabels] = useState<string[]>([]);

  const dataFull = useMemo(() => {
    const prepareData: HistoryDataTuple[] = Object.entries(histories ?? {}).map((item) => [
      ...item,
      generateRandomColor(),
    ]);
    return prepareData;
  }, [histories]);

  const data = {
    labels: ['', ''],
    datasets: !!visibleLabels.length
      ? dataFull
          ?.filter(([label]) => visibleLabels.includes(label))
          ?.map(([label, values, color]) => ({
            label,
            data: values?.map(({ value }) => value),
            backgroundColor: color,
            borderWidth: 2,
            borderColor: color,
          }))
      : [{ data: null }],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const items = dataFull?.map(([label, , color]) => ({ id: label, label, background: color }));

  const handleChange = (selected: string[]) => {
    setVisibleLabels(selected);
  };

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '85%' }}>
      {!Object.keys(histories ?? {}).length && <div>Истории не найдены</div>}

      {!isError ? (
        <>
          <Checkboxes
            items={items}
            onChange={handleChange}
          />
          <Line
            data={data}
            options={options}
          />
        </>
      ) : (
        <div>Ошибка загрузки истории</div>
      )}
    </div>
  );
};
