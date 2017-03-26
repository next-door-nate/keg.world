import React, { Component } from 'react';
import '../css/VotingButton.css';

class VotingButton extends Component {
  render() {
    return (
      <div>
        <a className="voting-button voting-button--up" href="#">
        </a>
        <a className="voting-button voting-button--down" href="#">
        </a>
      </div>
    );
  }
}
export default VotingButton;
