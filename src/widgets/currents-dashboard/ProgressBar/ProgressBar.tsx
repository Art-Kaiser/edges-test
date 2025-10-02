import React from 'react';

interface ProgressBarProps {
  value: number; // Текущее значение прогресса (от 0 до 100)
  maxValue?: number; // Максимальное значение прогресса (по умолчанию 100)
  barColor?: string; // Цвет прогрессбара (по умолчанию синий)
  trackColor?: string; // Цвет трека (по умолчанию серый)
  height?: number; // Высота прогрессбара (по умолчанию 20px)
}

export const ProgressBar: React.FunctionComponent<ProgressBarProps> = ({
  value,
  maxValue = 100,
  barColor = '#007BFF',
  trackColor = '#E9ECEF',
  height = 20,
}) => {
  const progressPercentage = (value / maxValue) * 100;

  return (
    <div
      style={{
        width: '100%',
        height: `${height}px`,
        backgroundColor: trackColor,
        borderRadius: '5px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: `${progressPercentage}%`,
          height: '100%',
          backgroundColor: barColor,
          transition: 'width 0.3s ease-in-out',
        }}
      />
    </div>
  );
};
