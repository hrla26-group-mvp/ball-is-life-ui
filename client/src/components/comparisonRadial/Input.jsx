import React from 'react';
import styles from '../../styles/comparison/Comparison.css';

const Input = (props) => {
  return (
    <div>
      <div className={styles.playerChoiceContainer}>
        <div className={styles.playerOneContainer}>
          <h1>Player One</h1>
          <select className={styles.playerOneSelect} onChange={(e) => console.log(e.target.value)}>
            <option value="Kobe">Kobe</option>
            <option value="name">Test</option>
            <option value="name">Test</option>
            <option value="Fisher">Fisher</option>
          </select>
        </div>
        <div className={styles.playerTwoContainer}>
          <h1>Player Two</h1>
          <select className={styles.playerTwoSelect} onChange={(e) => console.log(e.target.value)}>
            <option value="Kobe">Kobe</option>
            <option value="name">Test</option>
            <option value="name">Test</option>
            <option value="Fisher">Fisher</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Input;