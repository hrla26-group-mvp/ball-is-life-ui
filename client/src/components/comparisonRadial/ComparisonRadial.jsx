import React from 'react';
import Chart from './Chart.jsx';
import ArcOne from './ArcOne.jsx';
import ArcTwo from './ArcTwo.jsx';
import Input from './Input.jsx';
import styles from '../../styles/comparison/Comparison.css';
import { defaultPlayer } from './default';

export default class ComparisonRadial extends React.Component { 
    constructor(props){
      super(props);
    }
    render(){
      const playerOneData = this.props.playerData[1] ? this.props.playerData.filter(data => data["full_name"] === this.props.playerOne) :
      defaultPlayer;
      const playerTwoData = this.props.playerData[1] ? this.props.playerData.filter(data => data["full_name"] === this.props.playerTwo) :
      defaultPlayer;
      const playerOneArr = [ 
          { name: 'assists per game', data: playerOneData[0] ? playerOneData[0]['assists_per_game'] : "7.2"},
          { name: 'blocks per game', data: playerOneData[0] ? playerOneData[0]['blocks_per_game']: "0.7"},
          { name: 'field goals made per game', data: playerOneData[0] ? playerOneData[0]['field_goals_made_per_game']: "10.0"},
          { name: 'three points made per game', data: playerOneData[0] ? playerOneData[0]['three_points_made_per_game'] : "2.0"},
          { name: 'two points made per game', data: playerOneData[0] ? playerOneData[0]['two_points_made_per_game'] : "8.0"},
          { name: 'rebounds per game', data: playerOneData[0] ? playerOneData[0]['rebounds_per_game'] : "7.5"},
          { name: 'free throws made per game', data: playerOneData[0] ? playerOneData[0]['free_throws_made_per_game'] : "5.3"},
        ];
      const playerTwoArr = [ 
          { name: 'assists per game', data: playerTwoData[0] ? playerTwoData[0]['assists_per_game'] : "7.2"},
          { name: 'blocks per game', data: playerTwoData[0] ? playerTwoData[0]['blocks_per_game']: "0.7"},
          { name: 'field goals made per game', data: playerTwoData[0] ? playerTwoData[0]['field_goals_made_per_game']: "10.0"},
          { name: 'three points made per game', data: playerTwoData[0] ? playerTwoData[0]['three_points_made_per_game'] : "2.0"},
          { name: 'two points made per game', data: playerTwoData[0] ? playerTwoData[0]['two_points_made_per_game'] : "8.0"},
          { name: 'rebounds per game', data: playerTwoData[0] ? playerTwoData[0]['rebounds_per_game'] : "7.5"},
          { name: 'free throws made per game', data: playerTwoData[0] ? playerTwoData[0]['free_throws_made_per_game'] : "5.3"},
        ];
      const hoveredProper = this.props.hoveredData.replace(/ /g,"_");
      const playerOneSelected = playerOneData[0] ? playerOneData[0][hoveredProper] : playerOneData[hoveredProper];
      const playerTwoSelected = playerOneData[0] ? playerTwoData[0][hoveredProper] : playerOneData[hoveredProper];

      return (
        <div className={styles.chartContainer}>
          <div className={styles.chartTopContainer}>
            <div className={styles.inputContainer}>
              <Input handleChoice={this.props.handleChoice} playerData={this.props.playerData}/> 
            </div>
            <div className={styles.arcOneContainer}>
              <ArcOne playerOneSelected = {playerOneSelected} />
            </div>
            <div className={styles.arcTwoContainer}>
              <ArcTwo playerTwoSelected = {playerTwoSelected} />
            </div>
          </div>
          <div className={styles.chartBottomContainer}>
            <Chart updateSize = {this.props.updateSize} updateHover = {this.props.updateHover} playerOneArr = {playerOneArr} playerTwoArr = {playerTwoArr} />
          </div>
        </div>
      );
    }
}
