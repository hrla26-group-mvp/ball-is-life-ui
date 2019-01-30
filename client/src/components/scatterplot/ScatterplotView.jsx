import React from 'react';
import { Scatterplot } from './Scatterplot';
import { ScatterplotFilters } from './ScatterplotFilters';

export const ScatterplotView = props => (
  <div id="playerscatterplotview">
    Player Scatterplot View
    <ScatterplotFilters />
    <Scatterplot />
  </div>
);
