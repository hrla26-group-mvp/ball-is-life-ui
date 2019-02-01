import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/navbar/Navbar.css';

export default class Navbar extends React.Component {
  static propTypes = {
    fullscreen: PropTypes.bool.isRequired,
    toggleFullscreen: PropTypes.func.isRequired,
    changeView: PropTypes.func.isRequired,
  };

  rendermore() {
    const { fullscreen, toggleFullscreen, changeView } = this.props;
    return(
      <div className={styles.base}>
        <div className={styles.topContainer}>
          <h2 className={styles.title}>Ball is Life</h2>
          <button className={styles.fullscreenButton} onClick={toggleFullscreen} type="button">&#9776;</button>
        </div>
        <div className={styles.container}>
          <button type="button" className={styles.button} onClick={() => changeView('scatterplot')}>
            Scatterplot
          </button>
          <button type="button" className={styles.button} onClick={() => changeView('comparison')}>
            Compare Players
          </button>
          <button type="button" className={styles.button} onClick={() => changeView('video')}>
            Videos
          </button>
        </div>
      </div>
    )
  }

  renderless() {
    const { fullscreen, toggleFullscreen, changeView } = this.props;
    return(
      <div className={styles.fullscreen}>
        <button className={styles.fullscreenButton} onClick={toggleFullscreen} type="button">&#9776;</button>
      </div>
    )    
  }
  
  render() {
  const { fullscreen } = this.props;
    return(
      <div className={styles.navBar}>
        {fullscreen ? this.renderless() : this.rendermore()}  
      </div>
    )
  }

};
