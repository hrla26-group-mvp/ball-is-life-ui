// ACTION CREATOR FUNCTIONS FOR PLAYER-SCATTERPLOT VIEW
// these are functions that return action objects
// these will be used by the functions inside mapDispatchToProps
export default {
    changePlayers: players => ({ type: 'CHANGE_PLAYERS', players }),
  };
  