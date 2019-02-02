import React from 'react';
import Chart from './Chart.jsx';
import ArcOne from './ArcOne.jsx';
import ArcTwo from './ArcTwo.jsx';
import Input from './Input.jsx';
import styles from '../../styles/comparison/Comparison.css';

class ComparisonRadial extends React.Component { 
    constructor(props){
      super(props);
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
        hoveredBar: 'blocks per game',
      };
    };
  // onMouseOverCallback (each) {
  //   this.setState({
  //     hoveredBar: each
  //   })
  // }

  render(){
    const playerOneSelected = this.state.playerOne.filter((curr) => 
    curr.name === this.state.hoveredBar);
    const playerTwoSelected = this.state.playerTwo.filter((curr) => 
    curr.name === this.state.hoveredBar);
    // console.log(playerOneSelected[0].data, 'playeroneseelcted')
    // console.log(this.state.hovered, 'hovered')
    return (
      <div className={styles.chartContainer}>
        <Input /> 
        <ArcOne playerOneSelected = {playerOneSelected[0].data} />
        <ArcTwo playerTwoSelected = {playerTwoSelected[0].data} />
        <Chart playerOne = {this.state.playerOne} playerTwo = {this.state.playerTwo} />
      </div>
    );
  }
};
export default ComparisonRadial;
