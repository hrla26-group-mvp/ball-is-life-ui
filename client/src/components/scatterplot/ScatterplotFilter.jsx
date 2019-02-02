import React from 'react';
import { ScatterplotFilterOption } from './ScatterplotFilterOption';
import styles from '../../styles/scatterplot/ScatterplotFilter.css';

export const ScatterplotAxisSelector = ({ name, values, updateStat }) => (
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

export const ScatterplotFilter = ({ name, values, filters, updateFilters }) => (
  <div className={styles.scatterplotfilter}>
    <div className={styles.scatterplotfiltername}>
      {name}
    </div>
    <div className={styles.scatterplotoptionscontainer}>
      {values.map((value, i) => (
        <ScatterplotFilterOption
          name={name}
          value={value}
          key={i}
          filters={filters}
          updateFilters={updateFilters}
        />
      ))}
    </div>
  </div>
);
