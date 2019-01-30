import { connect } from 'react-redux';
import { ScatterplotView } from '../components/scatterplot/ScatterplotView';
import { changeScatterplotData } from '../actions/Scatterplot';

const mapStateToProps = state => ({
  scatterplotData: state.scatterplotData,
  playerData: state.playerData,
});

const mapDispatchToProps = dispatch => ({
  changeScatterplotData: (scatterplotData) => {
    dispatch(changeScatterplotData(scatterplotData));
  },
});

const ScatterplotViewContainer = connect(mapStateToProps, mapDispatchToProps)(ScatterplotView);

export default ScatterplotViewContainer;
