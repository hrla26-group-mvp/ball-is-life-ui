import React from 'react';
import { scaleBand, scaleLinear } from 'd3';
import Axes from './Axes';
import Bars from './Bars';
import BarsDos from './BarsDos';
import styles from '../../styles/comparison/Comparison.css';

class Chart extends React.Component {
  constructor() {
    super();
    this.yScale = scaleBand(); // splits by bands
    this.xScale = scaleLinear();
    this.myRef = React.createRef();
    this.rescale = this.rescale.bind(this);
    this.state = {
      width: 800,
      height: 500,
    };
  }

  componentDidMount() {
    this.rescale();
    window.addEventListener('resize', this.rescale());
  }
  // componentDidUpdate() {
  //   console.log(this.state.hoveredBar, 'is it showing up??');
  // }

  rescale() {
    // console.log(this.myRef.current.clientWidth)
    // console.log(this.myRef.current.clientHeight)
    // console.log('hello', this.myRef.current.clientHeight, 'height picking up?');

    this.setState({
      width: this.myRef.current.clientWidth > 800 ? this.myRef.current.clientWidth : 800,
      height: this.myRef.current.clientHeight > 400 ? this.myRef.current.clientHeight : 500,
    });
  }

  render() {
    const margins = {
      top: this.state.height * 0.1, right: this.state.width * 0.1, bottom: this.state.height * 0.1, left: this.state.width * 0.2,
    };
    console.log(margins, 'margin obj');
    const svgDimensions = {
      width: this.state.width,
      height: this.state.height,
    };
    // const maxValue = Math.max(...this.props.playerOneArr.map(d => d.data));
    const maxValue = 15;
    const yScale = this.yScale
      .padding(0.1)
      .domain(this.props.playerOneArr.map(d => d.name))
      .rangeRound([margins.bottom, svgDimensions.height - margins.top]);
    // const yScale2 = this.yScale
    //   .padding(0.05)
    //   .domain(this.state.playerOne.map(d => d.name))
    //   .rangeRound([0, yScale.bandwidth()]);
    const xScale = this.xScale
      .domain([0, maxValue])
      .range([margins.left, svgDimensions.width - margins.right]);
      // console.log(margins.left, 'margins left', margins.right, 'marginsright')
      // console.log(svgDimensions.width, 'width of svg is')
    return (
      <div className={styles.svgContainer}>
        <svg width="90%" height="90%" ref={this.myRef}>
          <Axes
            scales={{ xScale, yScale }}
            margins={margins}
            svgDimensions={svgDimensions}
          />
          <Bars
            scales={{ xScale, yScale }}
            margins={margins}
            data={this.props.playerOneArr}
            maxValue={maxValue}
            svgDimensions={svgDimensions}
            updateHover={this.props.updateHover}
            // onMouseOverCallback={each => this.setState({ hoveredBar: each })}
            // onMouseOutCallback={() => this.setState({hoveredBar: null})}
          />
          <BarsDos
            scales={{ xScale, yScale }}
            margins={margins}
            data={this.props.playerTwoArr}
            maxValue={maxValue}
            svgDimensions={svgDimensions}
            updateHover={this.props.updateHover}
          />
        </svg>
      </div>
    );
  }
}

export default Chart;