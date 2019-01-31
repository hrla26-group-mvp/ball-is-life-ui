import { connect } from 'react-redux';
import { App } from '../components/App';
import { toggleFullscreen, changeView } from '../actions/Navbar';
import { updatePlayerData } from '../actions/Comparison';
import { updateScatterplotData } from '../actions/Scatterplot';

const mapStateToProps = state => ({
  view: state.view,
  fullscreen: state.fullscreen,
  playerData: state.playerData,
});

const mapDispatchToProps = dispatch => ({
  toggleFullscreen: () => { dispatch(toggleFullscreen()); },
  changeView: (view) => { dispatch(changeView(view)); },
  updatePlayerData: (playerData) => { dispatch(updatePlayerData(playerData)); },
  updateScatterplotData: (scatterplotData) => { dispatch(updateScatterplotData(scatterplotData)); },
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
