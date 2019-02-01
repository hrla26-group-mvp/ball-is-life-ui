import React, { Component } from 'react';
import * as d3 from 'd3';
import { ScatterplotDots } from './ScatterplotDots';
import { ScatterplotXYAxes } from './ScatterplotXYAxes';
import styles from '../../styles/scatterplot/Scatterplot.css';

export class Scatterplot extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      lPadding: 60,
      rPadding: 40,
      tPadding: 40,
      bPadding: 60,
      width: 0,
      height: 0,
    };

    this.xStat = 'turnovers_per_game';
    this.yStat = 'assists_per_game';

    this.xMin = data => d3.min(data, d => d[this.xStat]);
    this.xMax = data => d3.max(data, d => d[this.xStat]);
    this.yMax = data => d3.max(data, d => d[this.yStat]);
    this.yMin = data => d3.min(data, d => d[this.yStat]);

    this.xScale = data => (
      d3.scaleLinear()
        .domain([this.xMin(data), this.xMax(data)])
        .range([this.state.lPadding, this.state.width - this.state.rPadding])
    );

    this.yScale = data => (
      d3.scaleLinear()
        .domain([this.yMin(data), this.yMax(data)])
        .range([this.state.height - this.state.bPadding, this.state.tPadding])
    );
  }

  updateDimensions = () => {
    let width = Math.max(800, this.ref.current.clientWidth);
    let height = Math.max(600, this.ref.current.clientHeight);
    this.setState({ width, height });
  };

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  render = () => {
    const { scatterplotData } = this.props;
    const { ref, xStat, yStat, xScale, yScale } = this;
    const { lPadding, rPadding, tPadding, bPadding, width, height } = this.state;

    return (
      <div className={styles.scatterplot}>
        <svg ref={ref} className={styles.scatterplotsvg} width="100%" height="100%">
          <ScatterplotDots
            scatterplotData={scatterplotData}
            xStat={xStat}
            yStat={yStat}
            xScale={xScale(scatterplotData)}
            yScale={yScale(scatterplotData)}
          />
          <ScatterplotXYAxes
            scatterplotData={scatterplotData}
            xStat={xStat}
            yStat={yStat}
            xScale={xScale(scatterplotData)}
            yScale={yScale(scatterplotData)}
            lPadding={lPadding}
            rPadding={rPadding}
            tPadding={tPadding}
            bPadding={bPadding}
            width={width}
            height={height}
          />
        </svg>
      </div>
    );
  };
}
