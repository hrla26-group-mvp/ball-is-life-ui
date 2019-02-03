import { connect } from 'react-redux';
import { handlePlayerChoice, updateHoveredData } from '../actions/Comparison';
import ComparisonRadial from '../components/comparisonRadial/ComparisonRadial';

// this provides whatever is inside the container with state properties as props
// this replaces passing down this.state.XYZ as a prop
const mapStateToProps = state => ({
  // STATE PROPS HERE
  playerOne: state.comparisonData.playerOne,
  playerTwo: state.comparisonData.playerTwo,
  playerData: state.playerData,
  hoveredData: state.hoveredData,
});

// this provides whatever is inside the container with fns that update state by dispatching actions
// this replaces passing down functions ( e.g., (XYZ) => { this.setState(XYZ); } ) as a prop
const mapDispatchToProps = dispatch => ({
// DISPATCH FNS HERE
// function that invokes dispatch on an action (created using action creator)
  handleChoice: (clickedPlayer, position) => { dispatch(handlePlayerChoice(clickedPlayer, position)); },
  updateHover: (hoveredData) => { dispatch(updateHoveredData(hoveredData)); },
});

const ComparisonRadialContainer = connect(mapStateToProps, mapDispatchToProps)(ComparisonRadial);

export default ComparisonRadialContainer;
