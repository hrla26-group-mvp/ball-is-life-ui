import React, { Component } from 'react';
import axios from 'axios';
import ComparisonContainer from '../containers/ComparisonContainer.jsx';
import NavbarContainer from '../containers/NavbarContainer.jsx';
import ScatterplotViewContainer from '../containers/ScatterplotViewContainer.jsx';
import styles from '../styles/App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    axios.get('/api/data/')
      .then(({ data }) => {
        console.log('data: ', data);
        this.props.updatePlayerData(data);
      })
      .catch((err) => { console.error(err); });
  };

  renderCurrentView = () => {
    if (this.props.view === 'scatterplot') {
      return <ScatterplotViewContainer />;
    } else if (this.props.view === 'comparison') {
      return <ComparisonContainer/>;
    } else {
      return <div> No view selected </div>
    }
  };

  render = () => (
    <div className={styles.app}>
      <NavbarContainer />
      <div className={styles.currentviewcontainer}>
        { this.renderCurrentView() }
      </div>
    </div>
  );
}
