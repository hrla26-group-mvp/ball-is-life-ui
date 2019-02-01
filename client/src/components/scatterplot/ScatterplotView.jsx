import React, { Component } from 'react';
import { ScatterplotContainer } from '../../containers/Scatterplot/ScatterplotContainer';
import { ScatterplotFiltersList } from './ScatterplotFiltersList';
import styles from '../../styles/scatterplot/ScatterplotView.css';

export class ScatterplotView extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  render = () => {
    const stats = Object.keys(this.props.scatterplotData[0])
      .filter(field => !['id', 'api_id', 'full_name', 'first_name', 'last_name', 'position', 'primary_position'].includes(field))
      .map(stat => stat.split('_').map(word => word[0].toUpperCase() + word.slice(1)).join(' '));
    
    return (
      <div className={styles.scatterplotview} ref={this.ref}>
        <ScatterplotFiltersList
          stats={stats}
          updateXStat={this.props.updateScatterplotXStat}
          updateYStat={this.props.updateScatterplotYStat}
        />
        <ScatterplotContainer />
      </div>
    );
  };
}
