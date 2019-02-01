import React, { Component } from 'react';
import { ScatterplotContainer } from '../../containers/Scatterplot/ScatterplotContainer';
import { ScatterplotFiltersList } from './ScatterplotFiltersList';
import styles from '../../styles/scatterplot/ScatterplotView.css';

export class ScatterplotView extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.stats = Object.keys(this.props.scatterplotData[0]);
  }

  render = () => {
    const stats = Object.keys(this.props.scatterplotData[0])
      .filter(d => !['id', 'api_id', 'full_name', 'first_name', 'last_name', 'position', 'primary_position'].includes(d))
      .map(stat => stat.split('_').map(word => word[0].toUpperCase() + word.slice(1)).join(' '));

    return (
      <div className={styles.scatterplotview} ref={this.ref}>
        <ScatterplotFiltersList stats={stats} />
        <ScatterplotContainer />
      </div>
    );
  };
}
