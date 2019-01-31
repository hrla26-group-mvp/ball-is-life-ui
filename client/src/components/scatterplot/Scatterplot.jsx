import React, { Component } from 'react';
import styles from '../../styles/scatterplot/Scatterplot.css';

export class Scatterplot extends Component {
  constructor(props) {
    super(props);
  }

  render = () => (
    <div className={styles.scatterplot}>
      Scatterplot
    </div>
  );
}
