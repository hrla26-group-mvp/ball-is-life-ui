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
    const { scatterplotData, playerData, xStat, yStat, updateScatterplotData, updateScatterplotXStat, updateScatterplotYStat } = this.props;
    const stats = Object.keys(scatterplotData[0])
      .filter(field => !['id', 'api_id', 'team_name', 'team_market', 'full_name', 'first_name', 'last_name', 'position', 'primary_position'].includes(field))
      .map(stat => stat.split('_').map(word => word[0].toUpperCase() + word.slice(1)).join(' '));
    const positions = [...new Set(playerData.map(p => p.primary_position === 'NA' ? 'SF' : p.primary_position))]; // manually set 1 'NA' to 'SF'
    const teams = [...new Set(playerData.map(p => p.team_name))];

    return (
      <div className={styles.scatterplotview} ref={this.ref}>
        <ScatterplotFiltersList
          stats={stats}
          positions={positions}
          teams={teams}
          updateXStat={updateScatterplotXStat}
          updateYStat={updateScatterplotYStat}
          updateScatterplotData={updateScatterplotData}
          scatterplotData={scatterplotData}
          playerData={playerData}
        />
        <Scatterplot
          scatterplotData={scatterplotData}
          playerData={playerData}
          xStat={xStat}
          yStat={yStat}
          updateScatterplotData={updateScatterplotData}
        />
      </div>
    );
  };
}
