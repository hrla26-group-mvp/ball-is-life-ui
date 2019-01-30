import { UPDATE_PLAYER } from '../actions/Comparison';
import initialState from '../store/initialState';

export const comparisonReducer = (state = {}, action) => {
  console.log('in comparisonreducer');
  console.log('state: ', state);
  console.log('action: ', action);
  switch (action.type) {
    case UPDATE_PLAYER:
      console.log('updateplayer');
      return action.player === 1
        ? { ...state, playerOne: action.clickedPlayer }
        : { ...state, playerTwo: action.clickedPlayer };
    default:
      console.log('returning default state: ', state);
      return state;
  }
};

// export default { comparisonReducer };
