import { GET_VIDEOS, CURRENT_VIDEO } from '../actions/actionTypes';

export const videos = (state = { videos: [], currentVideo: {} }, action) => {
  switch (action.type) {
    case GET_VIDEOS:
      return { videos: action.videos, currentVideo: action.videos[0] };
    default:
      return state;
  }
};

export const currentVideo = (state = {}, action) => {
  switch (action.type) {
    case CURRENT_VIDEO:
      return { currentVideo: action.video };
    default:
      return state;
  }
};