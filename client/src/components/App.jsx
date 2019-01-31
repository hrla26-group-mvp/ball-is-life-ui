import React, { Component } from 'react';
import ComparisonContainer from '../containers/ComparisonContainer.jsx';
import NavbarContainer from '../containers/NavbarContainer.jsx';
import ScatterplotViewContainer from '../containers/ScatterplotViewContainer.jsx';
import axios from 'axios';

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
    <div id="app">
      { this.props.fullscreen ? null : <NavbarContainer /> }
      { this.renderCurrentView() }
    </div>
  );
}
