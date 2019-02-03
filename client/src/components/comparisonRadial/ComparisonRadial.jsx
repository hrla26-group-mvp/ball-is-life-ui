import React from 'react';
import Chart from './Chart.jsx';
import ArcOne from './ArcOne.jsx';
import ArcTwo from './ArcTwo.jsx';
import Input from './Input.jsx';
import styles from '../../styles/comparison/Comparison.css';
import { defaultPlayer } from './default';

class ComparisonRadial extends React.Component { 
    constructor(props){
      super(props);
      // this.state = {
        // playerData: props.playerData,
        // playerOne: props.playerOne ? props.playerOne : "LeBron James",
        // playerTwo: props.playerData.filter(data => data[0][full_name] === props.playerTwo),
        // playerOne: [
        //   { name: 'assists per game', data: 2 },
        //   { name: 'blocks per game', data: 3.4 },
        //   { name: 'field goals per game', data: 17 },
        //   { name: 'three points per game', data: 9 },
        //   { name: 'two points per game', data: 34 },
        //   { name: 'rebounds per game', data: 5 },
        //   { name: 'freethrows per game', data: 9 },
        // ],
        // playerTwo: [
        //   { name: 'assists per game', data: 12 },
        //   { name: 'blocks per game', data: 5 },
        //   { name: 'field goals per game', data: 10 },
        //   { name: 'three points per game', data: 20 },
        //   { name: 'two points per game', data: 29 },
        //   { name: 'rebounds per game', data: 8 },
        //   { name: 'freethrows per game', data: 9 },
        // ],
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
        // hoveredData: props.hoveredData,
      // };
    };
  // onMouseOverCallback (each) {
  //   this.setState({
  //     hoveredData: each
  //   })
  // }
  // componentDidUpdate(){
  //   console.log(this.props.playerOne)

  // }

  render(){
    // console.log(defaultPlayer['full_name'])
    // console.log(this.props.hoveredData, 'hoveredData')
    const playerOneData = this.props.playerData[1] ? this.props.playerData.filter(data => data["full_name"] === this.props.playerOne) :
    defaultPlayer;
    const playerTwoData = this.props.playerData[1] ? this.props.playerData.filter(data => data["full_name"] === this.props.playerTwo) :
    defaultPlayer;
    // console.log(playerOneData, 'playerdata')
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
    // console.log(playerOneArr, 'playerOneArr is ')
    // console.log(playerOneData, 'playerOneData is ')
    // console.log(this.props.playerOne, 'props at playerone is ')

    // const playerOneSelected = playerOneArr.filter((curr) => 
    // curr.name === (this.props.hoveredData));
    // const playerTwoSelected = playerTwoArr.filter((curr) => 
    // curr.name === (this.props.hoveredData));
    const hoveredProper = this.props.hoveredData.replace(/ /g,"_");
    const playerOneSelected = playerOneData[0] ? playerOneData[0][hoveredProper] : playerOneData[hoveredProper];
    const playerTwoSelected = playerOneData[0] ? playerTwoData[0][hoveredProper] : playerOneData[hoveredProper];
    // console.log(playerOneData[0], 'playeronedata')
    console.log(playerOneSelected, 'playerOneSelected is ')
    // console.log(playerTwoSelected, 'playerTwoSelected is ')
    console.log(hoveredProper, 'hovered')
    // console.log(this.props.hoveredData + '', 'propsdatahover')
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
        <Chart updateHover = {this.props.updateHover} playerOneArr = {playerOneArr} playerTwoArr = {playerTwoArr} />
      </div>
    );
  }
};
export default ComparisonRadial;
