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
      padding: 50,
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
        .range([this.state.padding, this.state.width - this.state.padding])
    );

    this.yScale = data => (
      d3.scaleLinear()
        .domain([this.yMin(data), this.yMax(data)])
        .range([this.state.height - this.state.padding, this.state.padding])
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
    return (
      <div className={styles.scatterplot}>
        <svg ref={this.ref} className={styles.scatterplotsvg} width="95%" height="95%">
          <ScatterplotDots
            scatterplotData={scatterplotData}
            xScale={this.xScale(scatterplotData)}
            yScale={this.yScale(scatterplotData)}
            xStat={this.xStat}
            yStat={this.yStat}
          />
          <ScatterplotXYAxes
            scatterplotData={scatterplotData}
            xStat={this.xStat}
            yStat={this.yStat}
            xScale={this.xScale(scatterplotData)}
            yScale={this.yScale(scatterplotData)}
            padding={this.state.padding}
            width={this.state.width}
            height={this.state.height}
          />
        </svg>
      </div>
    );
  };
}
