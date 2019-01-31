import React, { Component } from 'react';
import { Scatterplot } from './Scatterplot';
import { ScatterplotFiltersList } from './ScatterplotFiltersList';
import styles from '../../styles/scatterplot/ScatterplotView.css';

export class ScatterplotView extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  updateScatterplotData = () => {

  };

  render = () => (
    <div className={styles.scatterplotview} ref={this.ref}>
      <ScatterplotFiltersList />
      <Scatterplot
        scatterplotData={this.props.scatterplotData}
        scatterplotViewRef={this.ref}
      />
    </div>
  );
}
