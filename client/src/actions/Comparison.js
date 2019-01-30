import { UPDATE_PLAYER, UPDATE_PLAYER_DATA } from './actionTypes';

export const handlePlayerChoice = (clickedPlayer, position) => ({
  type: UPDATE_PLAYER,
  clickedPlayer,
  position,
});

export const updatePlayerData = playerData => ({
  type: UPDATE_PLAYER_DATA,
  playerData,
});
