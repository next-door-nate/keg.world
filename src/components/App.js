import React, { Component } from 'react';
import VotingTable from './VotingTable.js';

class App extends Component {
  render() {
    return (
      <div className="keg-world">
        <section className="banner">
          <header className="header">
            <div className="wrap">
              <h1 className="logo">Keg.World</h1>
            </div>
          </header>
          <h2>This is a story about a little ol’ keg...called democracy.</h2>
          <a href="#"></a>
        </section>

        <VotingTable/>
      </div>
    );
  }
}

export default App;
