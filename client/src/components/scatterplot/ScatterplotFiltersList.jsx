import React from 'react';
import styles from '../../styles/scatterplot/ScatterplotFiltersList.css';
import { ScatterplotFilter } from './ScatterplotFilter';

export const ScatterplotFiltersList = ({ stats, updateXStat, updateYStat }) => (
  <div className={styles.scatterplotfilterslist}>
    <ScatterplotFilter name="X Axis" values={stats} updateStat={updateXStat} />
    <ScatterplotFilter name="Y Axis" values={stats} updateStat={updateYStat} />
  </div>
);
