import { connect } from 'react-redux';
import handlePlayerChoice from '../actions/Comparison';
import ComparisonRadial from '../components/comparsionRadial/ComparisonRadial.jsx';

// this provides whatever is inside the container with state properties as props
// this replaces passing down this.state.XYZ as a prop
const mapStateToProps = state => ({
  // STATE PROPS HERE
  playerOne: state.playerOne,
  playerTwo: state.playerTwo,
});

// this provides whatever is inside the container with fns that update state by dispatching actions
// this replaces passing down functions ( e.g., (XYZ) => { this.setState(XYZ); } ) as a prop
const mapDispatchToProps = dispatch => ({
	// DISPATCH FNS HERE
	// function that invokes dispatch on an action (created using action creator)
	handleChoice: (clickedPlayer, position) => { dispatch(handlePlayerChoice(clickedPlayer, position)); }
});

const ComparisonRadialContainer = connect(mapStateToProps, mapDispatchToProps)(ComparisonRadial);

export default ComparisonRadialContainer;
