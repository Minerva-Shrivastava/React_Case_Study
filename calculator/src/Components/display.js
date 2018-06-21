import React from 'react';

import '../css/display.css';

class Display extends React.Component {
  render() {
    return (
      <div className="componentDisplay">
        <div>{this.props.value}</div>
      </div>
    );
  }
}