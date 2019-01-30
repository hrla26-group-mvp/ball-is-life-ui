import initialState from '../store/initialState';

export const scatterplotDataReducer = (state = {}, action) => {
  console.log('in scatterplotreducer');
  console.log('state: ', state);
  console.log('action: ', action);
  switch (action.type) {
    case 'CHANGE_SCATTERPLOT_DATA':
      console.log('change scatterplot data');
      return { ...state, scatterplotData: action.scatterplotData };
    default:
      console.log('returning default state: ', state);
      return state;
  }
};

// const scatterplotReducers = { scatterplotDataReducer };

// export default scatterplotReducers;
