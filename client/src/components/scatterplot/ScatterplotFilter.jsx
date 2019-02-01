import React from 'react';
import styles from '../../styles/scatterplot/ScatterplotFilter.css';

export const ScatterplotFilter = ({ name, values, updateStat }) => (
  <div className={styles.scatterplotfilter}>
    <div className={styles.scatterplotfiltername}>
      {name}
    </div>
    <select
      className={styles.scatterplotfilterselect}
      onChange={(e) => { updateStat(e.target.value.split(' ').map(a => a.toLowerCase()).join('_')); }}
    >
      {values.map((value, i) => (
        <option value={value} key={i}>{value}</option>
      ))}
    </select>
  </div>
);
