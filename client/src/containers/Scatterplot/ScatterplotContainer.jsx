import { connect } from 'react-redux';
import { Scatterplot } from '../../components/scatterplot/Scatterplot';
import { updateScatterplotData } from '../../actions/Scatterplot';

const mapStateToProps = state => ({
  scatterplotData: state.scatterplotData,
  playerData: state.playerData,
});

const mapDispatchToProps = dispatch => ({
  updateScatterplotData: (scatterplotData) => { dispatch(updateScatterplotData(scatterplotData)); },
});

export const ScatterplotContainer = connect(mapStateToProps, mapDispatchToProps)(Scatterplot);
