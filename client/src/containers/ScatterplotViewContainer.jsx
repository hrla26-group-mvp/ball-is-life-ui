import { connect } from 'react-redux';
import ScatterplotView from '../components/player-scatterplot/ScatterplotView.jsx';

// this provides whatever is inside the container with state properties as props
// this replaces passing down this.state.XYZ as a prop
const mapStateToProps = {
  // STATE PROPS HERE
};

// this provides whatever is inside the container with fns that update state by dispatching actions
// this replaces passing down functions ( e.g., (XYZ) => { this.setState(XYZ); } ) as a prop
const mapDispatchToProps = {
  // DISPATCH FNS HERE
};

const ScatterplotViewContainer = connect(mapStateToProps, mapDispatchToProps)(ScatterplotView);

export default ScatterplotViewContainer;
