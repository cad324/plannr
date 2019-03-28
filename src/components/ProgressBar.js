import React, { Component } from 'react';
import '../App.css';

class ProgressBar extends Component {

  render() {
    return (
      <div>
        <div id="progress-bar">
          <div id="fill" style={{width:this.props.percentage+"%"}}></div>
        </div>
        <strong id="percentage">{this.props.percentage}%</strong>
      </div>
    );
  }
}

export default ProgressBar;
