import React, { Component } from 'react';
import { Scatterplot } from './Scatterplot';
import { ScatterplotFiltersList } from './ScatterplotFiltersList';
import styles from '../../styles/scatterplot/ScatterplotView.css';

export class ScatterplotView extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  updateScatterplotData = () => {

  };

  render = () => (
    <div className={styles.scatterplotview}>
      <ScatterplotFiltersList />
      <Scatterplot playerData={this.props.playerData} />
    </div>
  );
}
