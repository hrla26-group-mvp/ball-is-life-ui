import { UPDATE_SCATTERPLOT_DATA, UPDATE_X_STAT, UPDATE_Y_STAT } from '../actions/actionTypes';

export const scatterplotData = (state = [], action) => {
  switch (action.type) {
    case UPDATE_SCATTERPLOT_DATA:
      return action.scatterplotData;
    default:
      return state;
  }
};

export const xStat = (state = 'turnovers_per_game', action) => {
  switch (action.type) {
    case UPDATE_X_STAT:
      return action.xStat;
    default:
      return state;
  }
};

export const yStat = (state = 'assists_per_game', action) => {
  switch (action.type) {
    case UPDATE_Y_STAT:
      return action.yStat;
    default:
      return state;
  }
};
