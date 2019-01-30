import { FULLSCREEN } from '../actions/Navbar';
import initialState from '../store/initialState';

export const fullscreenReducer = (state = {}, action) => {
  console.log('in navbarreducer');
  console.log('state: ', state);
  console.log('action: ', action);
  switch (action.type) {
    case FULLSCREEN:
      console.log('fullscreen state');
      return { ...state, fullscreen: !state.fullscreen };
    default:
      console.log('return default state: ', state);
      return state;
  }
};
