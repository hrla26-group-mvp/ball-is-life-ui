import { UPDATE_SCATTERPLOT_DATA } from './actionTypes';

export const changeScatterplotData = scatterplotData => ({
  type: UPDATE_SCATTERPLOT_DATA,
  scatterplotData,
});
