import { combineReducers } from 'redux';
import { fullscreenReducer } from './NavbarReducers';
import { scatterplotDataReducer } from './ScatterplotReducers';
import { comparisonReducer } from './ComparisonReducers';

export const rootReducer = combineReducers({
  fullscreenReducer,
  comparisonReducer,
  scatterplotDataReducer,
});

// export default rootReducer;
