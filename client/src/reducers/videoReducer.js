import { GET_VIDEOS, CURRENT_VIDEO } from '../actions/actionTypes';

export const videos = (state = [], action) => {
  switch (action.type) {
    case GET_VIDEOS:
      return action.videos;
    default:
      return state;
  }
};

export const currentVideo = (state = {}, action) => {
  switch (action.type) {
    case CURRENT_VIDEO:
      return action.video;
    default:
      return state;
  }
};