import React, { Component } from 'react';
import * as d3 from 'd3';

export class ScatterplotAxis extends Component {
  componentDidMount = () => { this.renderAxis(); };
  componentDidUpdate = () => { this.renderAxis(); };

  renderAxis = () => {
    let node = this.refs.axis;
    let axis =
      this.props.orient === 'bottom' ?
        d3.axisBottom(this.props.scale)
          .ticks(5)
          .tickFormat(d => d.toString())
      : this.props.orient === 'left' ?
        d3.axisLeft(this.props.scale)
          .ticks(5)
      : null;

    d3.select(node).call(axis);
  };

  render = () => {
    const { orient, translate, padding, width, height, stat } = this.props;

    return (
      <g className="scatterplotaxiscontainer">
        {orient === 'bottom' ?
          <text transform={`translate(${width / 2}, ${height})`}>{stat}</text>
        : orient === 'left' ?
          <text
            transform={`rotate(-90)`}
            x={`${0 - height / 2}`}
            y={`${padding / 2}`}
          >{stat}</text>
        : null}
        <g className="scatterplotaxis" ref="axis" transform={translate} />
      </g>
    );
  };
}

