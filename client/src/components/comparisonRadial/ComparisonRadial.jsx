import React from 'react';
import PropTypes from 'prop-types';
import { select, scaleBand, scaleLinear } from 'd3';
import styles from '../../styles/comparison/Comparison.css';

class ComparisonRadial extends React.Component { 
    constructor(props){
      super(props);
      // const data1 = props.playerData[0];
      // const data2 = props.playerData[1]; 
      // console.log(props, 'its coming here')  
      // // refactor to handle async
      // const arr1 = [ 
      //   { 'name': 'assists per game', 'data': data1.assists_per_game },
      //   { 'name': 'blocks per game', 'data': data1.blocks_per_game },
      //   { 'name': 'field goals per game', 'data': data1.field_goals_made_per_game },
      //   { 'name': 'three points per game', 'data': data1.three_points_made_per_game },
      //   { 'name': 'two points per game', 'data': data1.two_points_made_per_game },
      //   { 'name': 'rebounds per game', 'data': data1.rebounds_per_game },
      //   { 'name': 'freethrows per game', 'data': data1.free_throws_made_per_game },
      // ];
      // const arr2 = [
      //   { 'name': 'assists per game', 'data': data2.assists_per_game },
      //   { 'name': 'blocks per game', 'data': data2.blocks_per_game },
      //   { 'name': 'field goals per game', 'data': data2.field_goals_made_per_game },
      //   { 'name': 'three points per game', 'data': data2.three_points_made_per_game },
      //   { 'name': 'two points per game', 'data': data2.two_points_made_per_game },
      //   { 'name': 'rebounds per game', 'data': data2.rebounds_per_game },
      //   { 'name': 'freethrows per game', 'data': data2.free_throws_made_per_game },
      // ];
    }
  componentDidMount() {
    this.drawChart();
  }
  plot(chart, width, height){
    const xScale = scaleBand()
      .domain(data.map(d => d.name))
      .padding(0.3)
      .range([0, w]);

    const yScale = scaleLinear()
      .domain([0, 100])
      .range([0, h]);
    const colorScale = d3.scaleOrdinal(d3.schemaCategory20);

    chart.selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .classed('bar', true) // add class
      .attr('x', d => xScale(d.name))
      .attr('y', d => yScale(d.data))
      .attr('height', d => (height - yScale(d.value)))
      .attr('width', d => xScale.bandwidth())
      .style('fill', (d, i) => colorScale(i));
    chart.selectAll('.bar-label')
      .data(data)
      .enter()
      .append('text')
      .classed('bar-label', true)
      .attr('x', d=>xScale(d.name) + xScale.bandwidth()/2)
      .attr('dx', 0)
      .attr('y', d => yScale(d.data))
      .attr('dy', -6)  // explore with dx dy for text
      .text(d => d.data)
    const xAxis = d3.axisBottom()
      .scale(xScale);
    chart.append('g')
      .classed('x axis', true)
      .attr('transform', )
    // const upd = node.selectAll('rect').data(data);
    // upd.enter()
    //     .append('rect')
    //     .attr('x', d => xscale(d.name))
    //     .attr('y', d => h -   (d.data))
    //     .attr('width', xscale.bandwidth())
    //     .attr('height', d => yscale(d.data))
    //     .attr('fill', 'black');
  }

  drawChart(){
    const data = [ 
      { 'name': 'assists per game', 'data': 2 },
      { 'name': 'blocks per game', 'data': 3.4 },
      { 'name': 'field goals per game', 'data': 17 },
      { 'name': 'three points per game', 'data': 9 },
      { 'name': 'two points per game', 'data': 34 },
      { 'name': 'rebounds per game', 'data': 5 },
      { 'name': 'freethrows per game', 'data': 9 },
    ];
    const w = 800;
    const h = 450;
    const node = select(this.node)
      .append('svg')
      .attr('class', 'chart')
      .attr('width', w)
      .attr('height', h);
    // const bounds = node.node().getBoundingClientRect();
    
  };
  componentDidUpdate() {
    this.drawChart();
  }







    // const data = arrtest;
    // const w = 700;
    // const h = 500;
    // const svg = d3.select("body")
    // .append("svg")
    // .attr("width", w)
    // .attr("height", h)
    // .style("margin-left", 100);
                  
    // svg.selectAll("rect")
    //   .data(data)
    //   .enter()
    //   .append("rect")
    //   .attr("x", (d, i) => i * 70)
    //   .attr("y", (d, i) => h - 10 * d.data)
    //   .attr("width", 65)
    //   .attr("height", (d, i) => d.data * 10)
    //   .attr("fill", "green")
  // };

  // ComparisonRadial.propTypes = {
  //   playerOne: PropTypes.object,
  //   playerTwo: PropTypes.object,
  // };      
  render(){
    // <div id={"#" + root}></div>
    return (
      <svg className = {styles.chart}
        ref={node => {
          this.node = node;
        }}
        ></svg>
    );
  }
};


export default ComparisonRadial;
