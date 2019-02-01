import React from 'react';
import { scaleBand, scaleLinear } from 'd3';
import Axes from './Axes';
import Bars from './Bars';
import BarsDos from './BarsDos';
import styles from '../../styles/comparison/Comparison.css';

class Chart extends React.Component {
  constructor() {
    super();
    this.xScale = scaleBand();
    this.yScale = scaleLinear();
    this.myRef = React.createRef();
    this.rescale = this.rescale.bind(this);
    this.state = {
      playerOne: [
        { name: 'assists per game', data: 2 },
        { name: 'blocks per game', data: 3.4 },
        { name: 'field goals per game', data: 17 },
        { name: 'three points per game', data: 9 },
        { name: 'two points per game', data: 34 },
        { name: 'rebounds per game', data: 5 },
        { name: 'freethrows per game', data: 9 },
      ],
      playerTwo: [
        { name: 'assists per game', data: 12 },
        { name: 'blocks per game', data: 5 },
        { name: 'field goals per game', data: 10 },
        { name: 'three points per game', data: 20 },
        { name: 'two points per game', data: 29 },
        { name: 'rebounds per game', data: 8 },
        { name: 'freethrows per game', data: 9 },
      ],
      width: 800,
      height: 500,
    };
  }

  componentDidMount() {
    this.rescale();
    window.addEventListener('resize', this.rescale);
  }

  rescale() {
    // console.log(this.myRef.current.clientWidth)
    // console.log(this.myRef.current.clientHeight)
    this.setState({
      width: this.myRef.current.clientWidth > 800 ? this.myRef.current.clientWidth : 800,
      height: this.myRef.current.clientHeight > 400 ? this.myRef.current.clientHeight : 500,
    });
  }

  render() {
    const margins = {
      top: 50, right: 20, bottom: 100, left: 60,
    };
    const svgDimensions = {
      width: this.state.width,
      height: this.state.height,
    };
    const maxValue = Math.max(...this.state.playerOne.map(d => d.data));
    const xScale = this.xScale
      .padding(0.5)
      .domain(this.state.playerOne.map(d => d.name))
      .range([margins.left, svgDimensions.width - margins.right]);
    const yScale = this.yScale
      .domain([0, maxValue])
      .range([svgDimensions.height - margins.bottom, margins.top]);

    return (
      <div className={styles.svgContainer}>
        <svg width="95%" height="95%" ref={this.myRef}>
          <Axes
            scales={{ xScale, yScale }}
            margins={margins}
            svgDimensions={svgDimensions}
          />
          <Bars
            scales={{ xScale, yScale }}
            margins={margins}
            data={this.state.playerOne}
            maxValue={maxValue}
            svgDimensions={svgDimensions}
          />
          <BarsDos
            scales={{ xScale, yScale }}
            margins={margins}
            data={this.state.playerTwo}
            maxValue={maxValue}
            svgDimensions={svgDimensions}
          />
        </svg>
      </div>
    );
  }
}

export default Chart;
