import React, { Component } from 'react';
import { Scatterplot } from '../../components/scatterplot/Scatterplot';
import { ScatterplotFiltersList } from './ScatterplotFiltersList';
import styles from '../../styles/scatterplot/ScatterplotView.css';

export class ScatterplotView extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  render = () => {
    const {
      playerData,
      xStat,
      yStat,
      positionFilters,
      teamFilters,
      updateScatterplotXStat,
      updateScatterplotYStat,
      updateScatterplotPositionFilters,
      updateScatterplotTeamFilters,
    } = this.props;

    const scatterplotData = playerData
      .filter(player =>
        positionFilters.includes(player.primary_position)
        && teamFilters.includes(player.team_name)
      );

    const stats = ["Games Played", "Minutes Per Game", "Points Per Game", "Off Rebounds Per Game", "Def Rebounds Per Game", "Rebounds Per Game", "Assists Per Game", "Steals Per Game", "Blocks Per Game", "Turnovers Per Game", "Personal Fouls Per Game", "Flagrant Fouls Per Game", "Blocked Att Per Game", "Field Goals Made Per Game", "Field Goals Att Per Game", "Three Points Made Per Game", "Three Points Att Per Game", "Free Throws Made Per Game", "Free Throws Att Per Game", "Two Points Made Per Game", "Two Points Att Per Game", "Efficiency Per Game", "True Shooting Att Per Game", "Points Off Turnovers Per Game", "Points In Paint Made Per Game", "Points In Paint Att Per Game", "Points In Paint Per Game", "Fouls Drawn Per Game", "Offensive Fouls Per Game", "Fast Break Pts Per Game", "Fast Break Att Per Game", "Fast Break Made Per Game", "Second Chance Pts Per Game", "Second Chance Att Per Game", "Second Chance Made Per Game"];
    const positions = [...new Set(playerData.map(p => p.primary_position === 'NA' ? 'SF' : p.primary_position))];
    const teams = [...new Set(playerData.map(p => p.team_name))];

    return (
      <div className={styles.scatterplotview} ref={this.ref}>
        <ScatterplotFiltersList
          playerData={playerData}
          stats={stats}
          positions={positions}
          teams={teams}
          positionFilters={positionFilters}
          teamFilters={teamFilters}
          updateXStat={updateScatterplotXStat}
          updateYStat={updateScatterplotYStat}
          updateScatterplotPositionFilters={updateScatterplotPositionFilters}
          updateScatterplotTeamFilters={updateScatterplotTeamFilters}
        />
        <Scatterplot
          scatterplotData={scatterplotData}
          playerData={playerData}
          xStat={xStat}
          yStat={yStat}
        />
      </div>
    );
  };
}
