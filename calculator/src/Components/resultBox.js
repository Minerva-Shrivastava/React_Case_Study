import React, { Component } from 'react';
import '../css/resultBox.css';

class OutputBox extends Component {
  render() {
    return (
      <div className="resultBox">
        <div className="form-group">
          <input type="text" className="form-control" value={this.props.result}/>
        </div>
      </div>
    );
  }
}

export default OutputBox;