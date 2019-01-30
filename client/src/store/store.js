import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { rootReducer } from '../reducers/main';
import navbarReducers from '../reducers/NavbarReducers';
import scatterplotReducers from '../reducers/ScatterplotReducers';
import comparisonReducers from '../reducers/ComparisonReducers';

const preloadedState = {
  // fullscreenReducer: navbarReducers.fullscreenReducer,
  // comparisonReducer: comparisonReducers.comparisonReducer,
  // scatterplotReducer: scatterplotReducers.scatterplotDataReducer,
  view: 'main',
  fullscreen: false,
  comparisonData: { playerOne: {}, playerTwo: {} },
  scatterplotData: [],
};

console.log('CREATING STORE');
console.log('preloadedState: ', preloadedState);
// const createStoreWithMiddleware = compose(applyMiddleware(thunk, logger))(createStore);
// const store = createStoreWithMiddleware(rootReducer);

const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));
console.log('CREATED STORE');
console.log('store.getState(): ', store.getState());

export default store;
