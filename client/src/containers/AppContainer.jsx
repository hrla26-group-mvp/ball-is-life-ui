import { connect } from 'react-redux';
import App from '../components/App';
import { toggleFullscreen, changeView } from '../actions/Navbar';
import { updatePlayerData } from '../actions/Comparison';

const mapStateToProps = state => ({
  view: state.view,
  fullscreen: state.fullscreen,
  playerData: state.playerData,
});

const mapDispatchToProps = dispatch => ({
  toggleFullscreen: () => { dispatch(toggleFullscreen()); },
  changeView: (view) => { dispatch(changeView(view)); },
  updatePlayerData: (playerData) => { dispatch(updatePlayerData(playerData)); },
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
