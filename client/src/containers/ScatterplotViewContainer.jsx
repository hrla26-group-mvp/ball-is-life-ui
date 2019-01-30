import { connect } from 'react-redux';
import ScatterplotView from '../components/scatterplot/ScatterplotView';
import scatterplotActions from '../actions/Scatterplot';

const mapStateToProps = state => ({
  scatterplotData: state.scatterplotData,
});

const mapDispatchToProps = dispatch => ({
  updateScatterplotData: (scatterplotData) => { dispatch(scatterplotActions.changeScatterplotData(scatterplotData)); },
});

const ScatterplotViewContainer = connect(mapStateToProps, mapDispatchToProps)(ScatterplotView);

export default ScatterplotViewContainer;
