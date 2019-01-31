import React from 'react';
import { ScatterplotDot } from './ScatterplotDot';

export const ScatterplotDots = ({ playerData, xScale, yScale, xStat, yStat }) => (
  <g>
    {playerData.map((d, i) => (
      <ScatterplotDot
        cx={xScale(d[xStat]).toString()}
        cy={yScale(d[yStat]).toString()}
        r={4}
        key={i}
      />
    ))}
  </g>
);
