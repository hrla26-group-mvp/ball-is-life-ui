import React from 'react';
import styles from '../../styles/scatterplot/ScatterplotFilterOption.css';

export const ScatterplotFilterOption = ({ value, filters, updateFilters }) => (
  <div className={styles.scatterplotfilteroption}>
    <input
      type="checkbox"
      className={styles.checkbox}
      onClick={(e) => {
        if (e.target.checked) {
          const newFilter = e.target.parentElement.innerText;
          const newFiltersList = [...new Set([...filters, newFilter])];
          updateFilters(newFiltersList);
        } else {
          const filterToRemove = e.target.parentElement.innerText;
          const newFiltersList = filters.filter(a => a !== filterToRemove);
          updateFilters(newFiltersList);
        }
      }}
    />
    {value}
  </div>
);
