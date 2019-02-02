import React from 'react';
import { scaleLinear } from 'd3';
import { interpolateLab } from 'd3';

export default class BarsDos extends React.Component {
  constructor(props) {
    super(props);

    this.colorScale = scaleLinear()
      .domain([0, this.props.maxValue])
      .range(['black'])
      .interpolate(interpolateLab);
  }

  render() {
    const { scales, margins, data, svgDimensions } = this.props;
    const { xScale, yScale } = scales;
    const { width, height } = svgDimensions;
    // console.log(xScale(2), '20 xscaled is this');
    // console.log(xScale(40), '40 xscaled is this');
    // console.log(margins.left, 'margin left');
    const bars = data.map(each => (
      <rect
        key={each.name}
        x={margins.left}
        y={yScale(each.name) + width * 0.04}
        height={yScale.bandwidth() / 4}
        // height={width - margins.right - margins.left - scales.xScale(each.data)}
        // width={20}
        width={xScale(each.data) - margins.left}
        fill={this.colorScale(each.data)}
      />
    ));
    return (
      <g>{bars}</g>
    );
  }
}
// import React from 'react';
// import { scaleLinear } from 'd3';
// import { interpolateLab } from 'd3';

// export default class BarsDos extends React.Component {
//   constructor(props) {
//     super(props);

//     this.colorScale = scaleLinear()
//       .domain([0, this.props.maxValue])
//       .range(['rgba(255, 255, 240, 0.6)'])
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
