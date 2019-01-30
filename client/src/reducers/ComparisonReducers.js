import { UPDATE_PLAYER, UPDATE_PLAYER_DATA } from '../actions/actionTypes';

export const comparisonData = (state = { playerOne: {}, playerTwo: {} }, action) => {
  switch (action.type) {
    case UPDATE_PLAYER:
      return action.player === 1
        ? { ...state, playerOne: action.clickedPlayer }
        : { ...state, playerTwo: action.clickedPlayer };
    default:
      return state;
  }
};

export const playerData = (state = [], action) => {
  switch (action.type) {
    case UPDATE_PLAYER_DATA:
      return action.playerData;
    default:
      return state;
  }
};
