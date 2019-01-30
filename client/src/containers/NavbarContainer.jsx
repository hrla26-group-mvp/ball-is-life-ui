import { connect } from 'react-redux';
import Navbar from '../components/navbar/Navbar';
import { toggleFullscreen, changeView } from '../actions/Navbar';

const mapStateToProps = state => ({
  // view: state.view,
  // fullscreen: state.fullscreen,
});

const mapDispatchToProps = dispatch => ({
  toggleFullscreen: () => { dispatch(toggleFullscreen()); },
  changeView: (view) => { dispatch(changeView(view)); },
});

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
