import React from 'react';
import styles from '../../styles/scatterplot/ScatterplotFiltersList.css';
import { ScatterplotFilter } from './ScatterplotFilter';

export const ScatterplotFiltersList = ({ stats }) => (
  <div className={styles.scatterplotfilterslist}>
    Scatterplot Filters List
    <ScatterplotFilter name="X Axis" values={stats} />
    <ScatterplotFilter name="Y Axis" values={stats} />
  </div>
);
