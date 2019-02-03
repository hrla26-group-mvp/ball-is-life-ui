import {
  UPDATE_PLAYER,
  UPDATE_PLAYER_DATA,
  UPDATE_HOVERED_DATA,
  // UPDATE_SIZE
} from '../actions/actionTypes';

export const comparisonData = (state = { playerOne: "LeBron James", playerTwo: "Stephen Curry" }, action) => {
  switch (action.type) {
    case UPDATE_PLAYER:
      return action.position === 1
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

export const hoveredData = (state = 'assists_per_game', action) => {
  switch (action.type) {
    case UPDATE_HOVERED_DATA:
      return action.hoveredData;
    default:
      return state;
  }
};

// export const updateSize = (state = { width: '800', height: '500' }, action) => {
//   switch (action.type) {
//     case UPDATE_SIZE:
//       return { width: action.updateSize.width, height: action.updateSize.height };
//     default:
//       return state;
//   }
// };
