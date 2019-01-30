import { UPDATE_PLAYER } from '../actions/Comparison';

const ComparisonReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PLAYER:
      if (action.player === 1) {
        return Object.assign({}, state, {
          playerOne: action.clickedPlayer,
        });
      }
      return Object.assign({}, state, {
        playerTwo: action.clickedPlayer,
      });
    default:
      return state;
  }
};

module.exports = { ComparisonReducer };
// REDUCERS FOR SCATTERPLOT COMPONENT GO HERE
// these are functions that handle actions to update the state
// (state, action) => { return [new state]; }
