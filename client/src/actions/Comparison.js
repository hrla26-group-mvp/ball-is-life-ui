import {
  UPDATE_PLAYER,
  UPDATE_PLAYER_DATA,
  UPDATE_HOVERED_DATA,
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
