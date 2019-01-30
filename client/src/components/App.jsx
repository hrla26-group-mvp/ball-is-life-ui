import React, { Component } from 'react';
import ComparisonContainer from '../containers/ComparisonContainer.jsx';
import NavbarContainer from '../containers/NavbarContainer.jsx';
import ScatterplotViewContainer from '../containers/ScatterplotViewContainer.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

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
      App
      <NavbarContainer />
      { this.renderCurrentView() }
    </div>
  );
}

export default App;
