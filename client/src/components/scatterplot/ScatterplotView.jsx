import React, { Component } from 'react';
import { Scatterplot } from './Scatterplot';
import { ScatterplotFiltersList } from './ScatterplotFiltersList';
import styles from '../../styles/scatterplot/ScatterplotView.css';

export class ScatterplotView extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.stats = [];
  }

  componentDidMount() {
    this.stats = Object.keys(this.props.scatterplotData[0]);
  }

  updateScatterplotData = () => {
    return;
  };

  render = () => (
    <div className={styles.scatterplotview} ref={this.ref}>
      <ScatterplotFiltersList
        stats={this.stats}
      />
      <Scatterplot
        scatterplotData={this.props.scatterplotData}
        scatterplotViewRef={this.ref}
      />
    </div>
  );
}
