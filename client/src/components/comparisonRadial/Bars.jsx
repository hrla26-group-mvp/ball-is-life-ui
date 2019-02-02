import React, { Component } from 'react';
import { scaleLinear } from 'd3';
import { interpolateLab } from 'd3';

export default class Bars extends Component {
  constructor(props) {
    super(props);

    this.colorScale = scaleLinear()
      .domain([0, this.props.maxValue])
      .range(['#85E3FF', '#63E09B'])
      .interpolate(interpolateLab);
  }

  render() {
    const { scales, margins, data, svgDimensions } = this.props;
    const { xScale, yScale } = scales;
    const { width, height } = svgDimensions;

    const bars = data.map(each => (
      <rect
        key={each.name}
        x={margins.left}
        y={yScale(each.name)}
        height={yScale.bandwidth()}
        // height={width - margins.right - margins.left - scales.xScale(each.data)}
        // width={20}
        width={xScale(each.data)}
        fill={this.colorScale(each.data)}
      />
    ));
    return (
      <g>{bars}</g>
    );
  }
}
// import React, { Component } from 'react';
// import { scaleLinear, scaleOrdinal } from 'd3';
// import { interpolateLab } from 'd3';

// export default class Bars extends Component {
//   constructor(props) {
//     super(props);

//     this.colorScale = scaleLinear()
//       .domain([0, this.props.maxValue])
//       .range(['#85E3FF', '#63E09B'])
//       .interpolate(interpolateLab);
//   }

//   render() {
//     const { scales, margins, data, svgDimensions } = this.props;
//     const { xScale, yScale } = scales;
//     const { height } = svgDimensions;

//     const bars = data.map(each => (
//       <rect
//         key={each.name}
//         x={xScale(each.name)}
//         y={yScale(each.data)}
//         height={height - margins.bottom - scales.yScale(each.data)}
//         width={xScale.bandwidth()}
//         fill={this.colorScale(each.data)}
//       />
//     ));
//     return (
//       <g>{bars}</g>
//     );
//   }
// }
