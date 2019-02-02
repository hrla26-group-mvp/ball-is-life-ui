import { combineReducers } from 'redux';
import { fullscreen, view } from './NavbarReducers';
import { scatterplotData, xStat, yStat, positionFilters, teamFilters } from './ScatterplotReducers';
import { comparisonData, playerData } from './ComparisonReducers';
import { videos, currentVideo } from './videoReducer';

export const rootReducer = combineReducers({
  fullscreen,
  view,
  scatterplotData,
  xStat,
  yStat,
  positionFilters,
  teamFilters,
  comparisonData,
  playerData,
  videos,
  currentVideo,
});
