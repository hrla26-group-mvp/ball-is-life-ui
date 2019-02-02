import { combineReducers } from 'redux';
import { fullscreen, view } from './NavbarReducers';
import { xStat, yStat, positionFilters, teamFilters } from './ScatterplotReducers';
import { comparisonData, playerData } from './ComparisonReducers';
import { videos, currentVideo } from './videoReducer';

export const rootReducer = combineReducers({
  fullscreen,
  view,
  xStat,
  yStat,
  positionFilters,
  teamFilters,
  comparisonData,
  playerData,
  videos,
  currentVideo,
});
