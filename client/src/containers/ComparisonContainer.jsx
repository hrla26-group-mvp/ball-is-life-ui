import { connect } from 'react-redux';
import ScatterplotView from '../components/player-scatterplot/ScatterplotView';

// this provides whatever is inside the container with state properties as props
// this replaces passing down this.state.XYZ as a prop
const mapStateToProps = state => ({
  playerOne: state.playerOne,
  playerTwo: state.playerTwo,
});

// this provides whatever is inside the container with fns that update state by dispatching actions
// this replaces passing down functions ( e.g., (XYZ) => { this.setState(XYZ); } ) as a prop
const mapDispatchToProps = dispatch => ({
  // DISPATCH FNS HERE
  
});

const ScatterplotViewContainer = connect(mapStateToProps, mapDispatchToProps)(ScatterplotView);

export default ScatterplotViewContainer;
