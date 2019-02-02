import React from 'react';
import styles from '../../styles/scatterplot/ScatterplotFiltersList.css';
import { ScatterplotAxisSelector, ScatterplotFilter } from './ScatterplotFilter';

export const ScatterplotFiltersList = ({ stats, positions, teams, updateXStat, updateYStat, updateScatterplotData, playerData }) => (
  <div className={styles.scatterplotfilterslist}>
    <ScatterplotAxisSelector name="X Axis" values={stats} updateStat={updateXStat} />
    <ScatterplotAxisSelector name="Y Axis" values={stats} updateStat={updateYStat} />
    <ScatterplotFilter name="Position(s)" values={positions} updateScatterplotData={updateScatterplotData} playerData={playerData} />
    <ScatterplotFilter name="Team(s)" values={teams} updateScatterplotData={updateScatterplotData} playerData={playerData} />
  </div>
);
