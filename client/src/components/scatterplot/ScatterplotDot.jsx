import React from 'react';
import styles from '../../styles/scatterplot/ScatterplotDot.css';

export const ScatterplotDot = ({ playerName, cx, cy, r }) => {
  return (
    <svg>
      <circle
        className={styles.scatterplotdot}
        cx={cx}
        cy={cy}
        r={r}
      />
    </svg>
  );
};
