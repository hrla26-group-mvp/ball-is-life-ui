import React from 'react';
import PropTypes from 'prop-types';

export default class Navbar extends React.Component {
  static propTypes = {
    view: PropTypes.string.isRequired,
    fullscreen: PropTypes.bool.isRequired, 
    // fullscreen toggles by clicking the small icon
    // prolly put this one level above
  }
  
  render() {
    const { 
      view, fullscreen
    } = this.props;
    return (
      <div>
        <h1>
          Ball is Life
        </h1>
        <span>
          &#9776;
        </span>
      </div>
    )
  }
}