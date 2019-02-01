import React from 'react';
import styles from '../../styles/scatterplot/ScatterplotFilter.css';

export const ScatterplotFilter = ({ name, values }) => (
  <div className={styles.scatterplotfilter}>
    <div className={styles.scatterplotfiltername}>
      {name}
    </div>
    <select className={styles.scatterplotfilterselect}>
      {values.map((value, i) => (
        <option value={value} key={i}>{value}</option>
      ))}
    </select>
  </div>
);
