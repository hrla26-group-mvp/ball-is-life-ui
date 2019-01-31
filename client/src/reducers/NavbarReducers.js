import { FULLSCREEN, CHANGE_VIEW } from '../actions/actionTypes';

export const fullscreen = (state = false, action) => {
  switch (action.type) {
    case FULLSCREEN:
      return !state;
    default:
      return state;
  }
};

export const view = (state = 'comparison', action) => {
  switch (action.type) {
    case CHANGE_VIEW:
      return action.view;
    default:
      return state;
  }
};
