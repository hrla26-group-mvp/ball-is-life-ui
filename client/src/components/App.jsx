import React, { Component } from 'react';
// IMPORT APP CONTAINERS HERE - MAKE SURE EVERYONE REBASES
import ComparisonRadial from '../components/comparsionRadial/ComparsionRadial.jsx';
import NavbarContainer from '../containers/NavbarContainer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}; // only included to remove eslint error marks
  }

  getData = () => {
    // this should ping our API server directly (different from static server that' solely serving up the index.html)
    // axios requests should go to API server (localhost:5000)
    console.log('getting data');
  };

  // RENDER APP CONTAINERS BELOW - MAKE SURE EVERYONE REBASES
  render = () => (
    <div id="app">
      App
      <ComparisonRadial/>
      <NavbarContainer />
    </div>
  );
}

export default App;
