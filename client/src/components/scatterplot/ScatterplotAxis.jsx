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

  render = () => (
    <g className="scatterplotaxiscontainer">
      {this.props.orient === 'bottom' ?
        <text transform={`translate(${this.props.width / 2}, ${this.props.height})`}>{this.props.stat}</text>
      : this.props.orient === 'left' ?
        <text x={this.props.padding} y={`${this.props.height / 2}`}>{this.props.stat}</text>
      : null}
      <g className="scatterplotaxis" ref="axis" transform={this.props.translate} />
    </g>
  );
}
