import React from 'react';
import { ScatterplotAxis } from './ScatterplotAxis';

export const ScatterplotXYAxes = ({ xStat, yStat, xScale, yScale, padding, width, height }) => {
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
      <ScatterplotAxis
        {...xSettings}
        stat={xStat}
        padding={padding}
        width={width}
        height={height}
      />
      <ScatterplotAxis
        {...ySettings}
        stat={yStat}
        padding={padding}
        width={width}
        height={height}
      />
    </g>
  );
};
