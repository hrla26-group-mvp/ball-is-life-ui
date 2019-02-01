import { combineReducers } from 'redux';
import { fullscreen, view } from './NavbarReducers';
import { scatterplotData } from './ScatterplotReducers';
import { comparisonData, playerData } from './ComparisonReducers';
import { videos } from './videoReducer';

export const rootReducer = combineReducers({
  fullscreen,
  view,
  scatterplotData,
  comparisonData,
  playerData,
  videos,
});
