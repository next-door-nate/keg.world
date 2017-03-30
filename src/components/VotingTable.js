import React, { Component } from 'react';
import {Wrapper, Grid, Table} from '../components/layout/Grid.js';
import VotingTableRow from './VotingTableRow.js';
import '../css/VotingTable.css';



class VotingTable extends Component {
  render() {
    return (
      <section className="voting">
        <Wrapper>
          <Table>
            <Grid classNames="grid-noGutter grid-middle">
              <VotingTableRow />
              <VotingTableRow />
              <VotingTableRow />
              <VotingTableRow />
              <VotingTableRow />
              <VotingTableRow />
              <VotingTableRow />
              <VotingTableRow />
              <VotingTableRow />
              <VotingTableRow />
              <VotingTableRow />
              <VotingTableRow />
            </Grid>
          </Table>
        </Wrapper>
      </section>
    );
  }
}

export default VotingTable;
