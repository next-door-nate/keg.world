import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import VotingTable from './VotingTable.js';
import {Header, Footer} from '../components/layout/Site.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="keg-world">
          <section className="banner">
            <Header />
            <h2>This is a story about a little ol’ keg called... democracy.</h2>
            <a className="main-button" href="#">Nominate a keg</a>
          </section>

          <VotingTable/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
