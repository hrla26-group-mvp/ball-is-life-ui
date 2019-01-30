import { connect } from 'react-redux';
import Navbar from '../components/navbar/Navbar.jsx';
import { toggleFullscreen } from '../actions/Navbar';

// this provides whatever is inside the container with state properties as props
// this replaces passing down this.state.XYZ as a prop
const mapStateToProps = state => ({
  // STATE PROPS HERE
  view: state.view,
  fullscreen: state.fullscreen,
});

// this provides whatever is inside the container with fns that update state by dispatching actions
// this replaces passing down functions ( e.g., (XYZ) => { this.setState(XYZ); } ) as a prop
const mapDispatchToProps = dispatch => ({
  // DISPATCH FNS HERE
  toggleView: () => {
    dispatch(toggleFullscreen());
  },
});

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
