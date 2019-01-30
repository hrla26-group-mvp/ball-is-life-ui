const UPDATE_PLAYER = 'UPDATE_PLAYER';

const handlePlayerChoice = (clickedPlayer, position) => ({
  type: UPDATE_PLAYER,
  clickedPlayer,
  position,
});


module.exports = { handlePlayerChoice };
