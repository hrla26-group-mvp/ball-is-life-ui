import { combineReducers } from 'redux';
import { fullscreen, view } from './NavbarReducers';
import { scatterplotData, xStat, yStat } from './ScatterplotReducers';
import { comparisonData, playerData } from './ComparisonReducers';
import { videos, currentVideo } from './videoReducer';

export const rootReducer = combineReducers({
  fullscreen,
  view,
  scatterplotData,
  xStat,
  yStat,
  comparisonData,
  playerData,
  videos,
  currentVideo,
});
