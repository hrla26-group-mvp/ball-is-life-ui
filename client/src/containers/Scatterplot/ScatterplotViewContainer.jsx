import { connect } from 'react-redux';
import { ScatterplotView } from '../../components/scatterplot/ScatterplotView';
import { updateScatterplotData, updateScatterplotXStat, updateScatterplotYStat } from '../../actions/Scatterplot';

const mapStateToProps = state => ({
  scatterplotData: state.scatterplotData,
  playerData: state.playerData,
  xStat: state.xStat,
  yStat: state.yStat,
});

const mapDispatchToProps = dispatch => ({
  updateScatterplotData: (scatterplotData) => { dispatch(updateScatterplotData(scatterplotData)); },
  updateScatterplotXStat: (xStat) => { dispatch(updateScatterplotXStat(xStat)); },
  updateScatterplotYStat: (yStat) => { dispatch(updateScatterplotYStat(yStat)); },
});

const ScatterplotViewContainer = connect(mapStateToProps, mapDispatchToProps)(ScatterplotView);

export default ScatterplotViewContainer;
