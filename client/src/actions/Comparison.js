import {
  UPDATE_PLAYER,
  UPDATE_PLAYER_DATA,
  UPDATE_HOVERED_DATA,
  // UPDATE_SIZE,
} from './actionTypes';

export const handlePlayerChoice = (clickedPlayer, position) => ({
  type: UPDATE_PLAYER,
  clickedPlayer,
  position,
});

export const updatePlayerData = playerData => ({
  type: UPDATE_PLAYER_DATA,
  playerData,
});

export const updateHoveredData = hoveredData => ({
  type: UPDATE_HOVERED_DATA,
  hoveredData,
});

// export const updateSizeData = (width, height) => ({
//   type: UPDATE_SIZE,
//   width,
//   height,
// });
