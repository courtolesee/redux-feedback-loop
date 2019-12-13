import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Router>
          <Route path="/feeling" component={ Feeling } />
          <Route path="/understanding" component={ Understanding } />
          <Route path="/support" component={ Support } />
          <Route path="/comments" component={ Comments } />
        </Router>
      </div>
    );
  }
}

const putReduxStateOnProps = ( reduxState ) => ({
  reduxState
})
export default connect( putReduxStateOnProps )(App);