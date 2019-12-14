import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

// component imports
import React, { Component } from 'react';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import Review from '../Review/Review';
import Success from '../Success/Success';
import StartFeedback from '../StartFeedback/StartFeedback';

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
          <Route exact path="/" component={ StartFeedback } />
          <Route path="/feeling" component={ Feeling } />
          <Route path="/understanding" component={ Understanding } />
          <Route path="/support" component={ Support } />
          <Route path="/comments" component={ Comments } />
          <Route path="/review" component={ Review } />
          <Route path="/success" component={ Success } />
        </Router>
      </div>
    );
  }
}

export default App;