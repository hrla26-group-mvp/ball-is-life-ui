import React from 'react';
import Scatterplot from './Scatterplot.jsx';
import ScatterplotFilters from './ScatterplotFilters.jsx';

const PlayerScatterplotView = props => (
  <div id="playerscatterplotview">
    Player Scatterplot View
    <ScatterplotFilters />
    <Scatterplot />
  </div>
);

export default PlayerScatterplotView;
