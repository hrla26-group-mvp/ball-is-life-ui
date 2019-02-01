import { UPDATE_SCATTERPLOT_DATA, UPDATE_X_STAT, UPDATE_Y_STAT } from './actionTypes';

export const updateScatterplotData = scatterplotData => ({
  type: UPDATE_SCATTERPLOT_DATA,
  scatterplotData,
});

export const updateScatterplotXStat = xStat => ({
  type: UPDATE_X_STAT,
  xStat,
});

export const updateScatterplotYStat = yStat => ({
  type: UPDATE_Y_STAT,
  yStat,
});
