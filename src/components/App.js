import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import VotingTable from './VotingTable.js';
import {Header, Footer} from '../components/layout/Site.js';


const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/past-kegs" component={PastKegs}/>
    </div>
  </Router>
);

const Home = () => (
  <div className="keg-world">
    <section className="banner">
      <Header />
      <h2>This is a story about a little ol’ keg called... democracy.</h2>
      <a className="main-button" href="#">Nominate a keg</a>
    </section>
    <VotingTable/>
    <Footer />
  </div>
);

const PastKegs = () => (
  <div className="keg-world past-kegs">
    <section className="banner">
      <Header />
      <h2>Past Winners</h2>
    </section>
    <VotingTable/>
    <Footer />
  </div>
);

export default App;
