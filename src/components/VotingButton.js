import React, { Component } from 'react';
import '../css/VotingButton.css';
import DownArrow from '../img/vote--down.svg';
import UpArrow from '../img/vote--up.svg';

class VotingButton extends Component {
  render() {
    return (
      <div className="voting-buttons">
        <a className="voting-button voting-button--up" href="#">

        </a>
        <a className="voting-button voting-button--down" href="#">

        </a>
      </div>
    );
  }
}
export default VotingButton;
