import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/main';

const initialState = {
  // INITIAL APP STATE HERE - MAKE SURE EVERYONE REBASES
  view: 'main',
  fullscreen: false,
};

const store = createStore(rootReducer, initialState,
  applyMiddleware(thunk));

export default store;
