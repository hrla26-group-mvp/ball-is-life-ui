import React from 'react';
// import axios from 'axios';
import PropTypes from 'prop-types';

// const chartSize = 450;
// const numberOfScales = 4;
// const middleOfChart = (chartSize / 2).toFixed(4);
// const scale = value => (
//   <circle // setting radius and size of circle
//     key={`scale-${value}`}
//     cx={0}
//     cy={0}
//     r={((value / numberOfScales) * chartSize) / 2}
//     fill="#FAFAFA"
//     stroke="#999"
//     strokeWidth="0.2"
//   />
// );
// const data = [{two_points_pct: 0.5, three_points_pct: 0.388, points_in_paint_pct: 0.541, free_throws_pct: 0.604, field_goals_pct: 0.452}, 
// {two_points_pct: 0.5, three_points_pct: 0.388, points_in_paint_pct: 0.541, free_throws_pct: 0.604, field_goals_pct: 0.452}]


// const captions = Object.keys(data[0]);
// const columns = captions.map((key, i, all) => {
//   return {
//     key,
//     angle: (Math.PI * 2 * i) / all.length,
//   };
// });
// groups.push(<g key={`groups`}>{data.map(shape(columns))}</g>);

const ComparisonRadial = ({playerOne, playerTwo}) => {
  ComparisonRadial.propTypes = {
    playerOne: PropTypes.object,
    playerTwo: PropTypes.object,
  };
  // const groups = [];
  // const scales = [];
  // for (let i = numberOfScales; i > 0; i--) {
  //   scales.push(scale(i));
  // }
  // groups.push(<g key={`scales`}>{scales}</g>);

  return ( // start with empty svg and translate at end to move circle in center of svg
    <svg />
    //   version="1"
    //   xmlns="http://www.w3.org/2000/svg"
    //   width={chartSize}
    //   height={chartSize}
    //   viewBox={`0 0 ${chartSize} ${chartSize}`}
    // >
    //   <g transform={`translate(${middleOfChart},${middleOfChart})`}>{groups}</g>
  );
};

export default ComparisonRadial;
