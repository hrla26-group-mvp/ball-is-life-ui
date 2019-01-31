import React from 'react';
import { ScatterplotAxis } from './ScatterplotAxis';

export const ScatterplotXYAxes = ({ playerData, xScale, yScale, padding, height }) => {
  const xSettings = {
    translate: `translate(0, ${height - padding})`,
    scale: xScale,
    orient: 'bottom',
  };

  const ySettings = {
    translate: `translate(${padding}, 0)`,
    scale: yScale,
    orient: 'left',
  };

  return (
    <g className="scatterplotxyaxes">
      <ScatterplotAxis {...xSettings} />
      <ScatterplotAxis {...ySettings} />
    </g>
  );
};
