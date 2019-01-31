import { UPDATE_SCATTERPLOT_DATA } from './actionTypes';

export const updateScatterplotData = scatterplotData => ({
  type: UPDATE_SCATTERPLOT_DATA,
  scatterplotData,
});
