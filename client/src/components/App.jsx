import React, { Component } from 'react';
import axios from 'axios';
import ComparisonContainer from '../containers/ComparisonContainer.jsx';
import NavbarContainer from '../containers/NavbarContainer.jsx';
import ScatterplotViewContainer from '../containers/ScatterplotViewContainer';
import VideoContainer from '../containers/VideoContainer';
import styles from '../styles/App.css';

export class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    axios.get('/api/data/')
      .then(({ data }) => {
        console.log('data: ', data);
        this.props.updatePlayerData(data);
        this.props.updateScatterplotData(data);
      })
      .catch((err) => { console.error(err); });
  };

  renderCurrentView = () => {
    if (this.props.view === 'scatterplot') {
      return <ScatterplotViewContainer />;
    } else if (this.props.view === 'comparison') {
      return <ComparisonContainer/>;
    } else if (this.props.view === 'video') {
      return <VideoContainer />;
    } else {
      return <div> No view selected </div>
    }
  };

  render = () => (
    <div className={styles.app}>
      <div className={styles.navbarContainer}>
        <NavbarContainer />
      </div>
      <div className={styles.currentviewcontainer}>
        { this.renderCurrentView() }
      </div>
    </div>
  );
}
