import React from 'react';
import PropTypes from 'prop-types';

class ComparisonRadial extends Component { 
    constructor(props){
      super(props);
    }
  componentDidMount() {
    this.drawChart();
  }
  const data1 = props.playerData[0];
  const data2 = props.playerData[1];
  if (data1) { // refactor to handle async
    const arr1 = [
      { 'assists per game': data1.assists_per_game },
      { 'blocks per game': data1.blocks_per_game },
      { 'field goals per game': data1.field_goals_made_per_game },
      { 'three points per game': data1.three_points_made_per_game },
      { 'two points per game': data1.two_points_made_per_game },
      { 'rebounds per game': data1.rebounds_per_game },
      { 'freethrows per game': data1.free_throws_made_per_game },
    ];
    const arr2 = [
      { 'assists per game': data2.assists_per_game },
      { 'blocks per game': data2.blocks_per_game },
      { 'field goals per game': data2.field_goals_made_per_game },
      { 'three points per game': data2.three_points_made_per_game },
      { 'two points per game': data2.two_points_made_per_game },
      { 'rebounds per game': data2.rebounds_per_game },
      { 'freethrows per game': data2.free_throws_made_per_game },
    ];
  }

  drawChart() {
    const data = [12, 5, 6, 6, 9, 10];
    
    const svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("margin-left", 100);
                  
    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - 10 * d)
      .attr("width", 65)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "green")
  };

  // ComparisonRadial.propTypes = {
  //   playerOne: PropTypes.object,
  //   playerTwo: PropTypes.object,
  // };      
  render(){
    return (
      <div></div>
    )
  }
};


export default ComparisonRadial;
