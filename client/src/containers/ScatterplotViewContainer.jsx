import { connect } from 'react-redux';
import { ScatterplotView } from '../components/scatterplot/ScatterplotView';
import { updateScatterplotData } from '../actions/Scatterplot';

const mapStateToProps = state => ({
  scatterplotData: state.scatterplotData,
  playerData: state.playerData,
});

const mapDispatchToProps = dispatch => ({
  updateScatterplotData: (scatterplotData) => { dispatch(updateScatterplotData(scatterplotData)); },
});

const ScatterplotViewContainer = connect(mapStateToProps, mapDispatchToProps)(ScatterplotView);

export default ScatterplotViewContainer;
