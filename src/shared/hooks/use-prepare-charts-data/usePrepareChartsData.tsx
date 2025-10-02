import { useCallback, useMemo, useState } from 'react';
import { generateRandomColor } from '../../utils/generate/generate-random-color.tsx';

interface IVisibleElement {
  key: string;
  value: number;
}

export const usePrepareChartsData = <T extends Record<string, number>>(data: T) => {
  const [visibleElement, setVisibleElement] = useState<IVisibleElement[]>([]);

  const handleChangeVisible = useCallback(
    (key: string): void => {
      setVisibleElement((prev) => {
        const find = prev.filter((item) => item.key === key);

        const filteredArray = prev.filter((item) => item.key !== key);

        return !!find.length ? filteredArray : [...prev, { key, value: data[key] }];
      });
    },
    [data],
  );

  const visibleElementValues = visibleElement.map((item) => item.value);
  const visibleLabels = visibleElement.map((item) => item.key);

  const dataFull: readonly [string, number, string][] = useMemo(
    () => Object.entries(data).map((item) => [...item, generateRandomColor()]),
    [data],
  );

  return {
    labels: Object.keys(data),
    data: visibleElementValues,
    backgroundColor: dataFull.map(([, , color]) => color),
    changeVisible: handleChangeVisible,
    visibleLabels,
    dataFull,
  };
};
