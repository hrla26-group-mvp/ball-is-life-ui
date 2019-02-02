import React from 'react';
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

export const ScatterplotFilter = ({ name, values, updateScatterplotData, playerData }) => (
  <div className={styles.scatterplotfilter}>
    <div className={styles.scatterplotfiltername}>
      {name}
    </div>
    <select
      multiple
      className={styles.scatterplotfilterselect}
      onChange={(e) => {
        const selections = [...e.target.selectedOptions].map(s => s.text);
        const field =
          name === 'Position(s)' ?
            'primary_position'
          : name === 'Team(s)' ?
            'team'
          : null;
        const updatedData = playerData.filter(player => selections.includes(player[field]));
        updateScatterplotData(updatedData);
      }}
    >
      {values.map((value, i) => (
        <option value={value} key={i}>{value}</option>
      ))}
    </select>
  </div>
);
