import React from 'react';
import Main from './Pages/index';
import Post from './Pages/post'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/:post" component={Post}/>
        <Route path="/" component={Main}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
