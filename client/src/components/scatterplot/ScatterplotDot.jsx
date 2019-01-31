import React from 'react';

export const ScatterplotDot = ({ cx, cy, r }) => {
  return (
    <svg>
      <circle
        cx={cx}
        cy={cy}
        r={r}
      />
    </svg>
  );
};
