import React from 'react';
import Chart from './Chart.jsx';
import styles from '../../styles/comparison/Comparison.css';

class ComparisonRadial extends React.Component { 
    constructor(props){
      super(props);
    };
  render(){
    return (
      <div className={styles.chartContainer}>
        <Chart />
      </div>
    );
  }
};
export default ComparisonRadial;
