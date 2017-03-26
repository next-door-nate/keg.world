import React, { Component } from 'react';
import {Grid, Column} from '../components/layout/Grid.js';
import VotingButton from './VotingButton.js';

class VotingTableRow extends Component {
  render() {
    return (
      <Column classNames="col-12">
        <div className="table__row">
          <Grid classNames="grid-noGutter">
            <Column classNames="col-7">
              <p>1. <span className='beer__brand'>Barnhammer Brewing</span> - <span className="beer__name">Grandpa&apos;s Sweater</span></p>
            </Column>
            <Column classNames="col-2">
              <p>22 Votes</p>
            </Column>
            <Column classNames="col-3">
              <VotingButton />
            </Column>
          </Grid>
        </div>
      </Column>
    );
  }
}

export default VotingTableRow;
