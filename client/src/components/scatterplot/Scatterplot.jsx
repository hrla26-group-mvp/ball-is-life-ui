import React from 'react';
import * as d3 from 'd3';
import { ScatterplotDots } from './ScatterplotDots';
import { ScatterplotXYAxes } from './ScatterplotXYAxes';
import styles from '../../styles/scatterplot/Scatterplot.css';

export const Scatterplot = ({ playerData }) => {
  const padding = 30;
  const width = 650;
  const height = 400;
  const xStat = 'turnovers_per_game';
  const yStat = 'assists_per_game';
  const xMin = data => d3.min(data, d => d[xStat]);
  const xMax = data => d3.max(data, d => d[xStat]);
  const yMax = data => d3.max(data, d => d[yStat]);
  const yMin = data => d3.min(data, d => d[yStat]);

  const xScale = data => (
    d3.scaleLinear()
      .domain([xMin(data), xMax(data)])
      .range([padding, width - padding * 2])
  );

  const yScale = data => (
    d3.scaleLinear()
      .domain([yMin(data), yMax(data)])
      .range([height - padding, padding])
  );

  return (
    <div className={styles.scatterplot}>
      Scatterplot
      <svg width={width} height={height}>
        <ScatterplotDots
          playerData={playerData}
          xScale={xScale(playerData)}
          yScale={yScale(playerData)}
          xStat={xStat}
          yStat={yStat}
        />
        <ScatterplotXYAxes
          playerData={playerData}
          xScale={xScale(playerData)}
          yScale={yScale(playerData)}
          padding={padding}
          height={height}
        />
      </svg>
    </div>
  );
};
