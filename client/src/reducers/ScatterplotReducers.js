import { UPDATE_SCATTERPLOT_DATA } from '../actions/actionTypes';

export const scatterplotData = (state = [], action) => {
  switch (action.type) {
    case UPDATE_SCATTERPLOT_DATA:
      return action.scatterplotData;
    default:
      return state;
  }
};
