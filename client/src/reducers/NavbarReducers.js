import { FULLSCREEN } from '../actions/Navbar';
// import { initialState } from '../store/store';

const fullscreenReducer = (state, action) => {
  switch (action.type) {
    case FULLSCREEN:
      return Object.assign({}, state, {
        fullscreen: !state.fullscreen,
      });
    default:
      return state;
  }
};

export default {
  fullscreenReducer,
};
