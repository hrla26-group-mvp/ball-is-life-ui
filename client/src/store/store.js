import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/main';

const store = createStore(rootReducer,
  {
    // INITIAL APP STATE HERE - MAKE SURE EVERYONE REBASES
  },
  applyMiddleware(thunk));

export default store;
