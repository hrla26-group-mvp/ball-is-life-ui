import React from 'react';
import { Scatterplot } from './Scatterplot';
import { ScatterplotFiltersList } from './ScatterplotFiltersList';
import styles from '../../styles/scatterplot/ScatterplotView.css';

export const ScatterplotView = props => (
  <div className={styles.scatterplotview}>
    <ScatterplotFiltersList />
    <Scatterplot  />
  </div>
);
