import React from 'react';
// import PropTypes from 'prop-types';
import Chart from './Chart.jsx';
// import { select, scaleBand, scaleLinear } from 'd3';
// import styles from '../../styles/comparison/Comparison.css';

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
  // componentDidMount() {
  //   this.drawChart();
  // }
  

  // drawChart(){
  //   const data = [ 
  //     { 'name': 'assists per game', 'data': 2 },
  //     { 'name': 'blocks per game', 'data': 3.4 },
  //     { 'name': 'field goals per game', 'data': 17 },
  //     { 'name': 'three points per game', 'data': 9 },
  //     { 'name': 'two points per game', 'data': 34 },
  //     { 'name': 'rebounds per game', 'data': 5 },
  //     { 'name': 'freethrows per game', 'data': 9 },
  //   ];
  //   const w = 700;
  //   const h = 500;
  //   const node = select(this.node)
  //     .append('svg')
  //     .attr('class', 'chart')
  //     .attr('width', w)
  //     .attr('height', h);
  //   // const bounds = node.node().getBoundingClientRect();
  //   const xScale = scaleBand();
  //   xScale.domain(data.map(d => d.name));
  //   xScale.padding(0.3);
  //   xScale.range([0, w]);

  //   const yScale = scaleLinear();
  //   yScale.domain([0, 100]);
  //   yScale.range([0, h]);
  //   const upd = node.selectAll('rect').data(data);
  //   upd.enter()
  //       .append('rect')
  //       .attr('x', d => xScale(d.name))
  //       .attr('y', d => h - yScale(d.data))
  //       .attr('width', xScale.bandwidth())
  //       .attr('height', d => yScale(d.data))
  //       .attr('fill', 'black');
  //   upd.append("g")
  //       .attr("class", "x axis")
  //       .attr("transform", "translate(0," + h + ")")
  //       .call(xAxis);
  //   const xAxis = node.axisBottom()
  //     .scale(xScale)
  //   const yAxis = node.axisLeft()
  //     .scale(yScale);
  //   upd.append("g")
  //     .attr("class", "y axis")
  //     .call(yAxis)
  //     .append("text")
  //     .attr("transform", "rotate(-90)")
  //     .attr("y", 6)
  //     .attr("dy", ".71em")
  //     .style("text-anchor", "end")
  //     .text("Frequency");
  // };
  // componentDidUpdate() {
  //   this.drawChart();
  // };

  render(){
    return (
      <div>
        <Chart />
      </div>
    );
  }
};
//   render(){
//     return (
//       <svg className = {styles.chart}
//         ref={node => {
//           this.node = node;
//         }}
//         ></svg>
//     );
//   }
// };


export default ComparisonRadial;
