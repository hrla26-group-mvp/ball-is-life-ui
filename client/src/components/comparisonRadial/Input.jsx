import React from 'react';
import styles from '../../styles/comparison/Comparison.css';

const Input = (props) => {
  return (
    <div>
      <div className={styles.playerChoiceContainer}>
        <div className={styles.playerOneContainer}>
          <div className={styles.playerOneText}>Player One</div>
          <select className={styles.playerOneSelect} onChange={(e) => props.handleChoice(e.target.value, 1)}>
            {props.playerData.map((value, i) => (
              <option value={value.full_name} key={i}>{value.full_name}</option>))}
          </select>
        </div>
        <div className={styles.playerTwoContainer}>
          <div className={styles.playerTwoText}>Player Two</div>
          <select className={styles.playerTwoSelect} onChange={(e) => props.handleChoice(e.target.value, 2)}>
            {props.playerData.map((value, i) => (
              <option value={value.full_name} key={i}>{value.full_name}</option>))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Input;