import React from 'react';
import Main from './Pages/index.jsx';
import Post from './Pages/post.jsx';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { ThemeProvider } from './theme-context';

function App() {

  return (
    <ThemeProvider>
    <Router>
    <div className="App">
      <Switch>
        <Route path="/:post" component={Post}/>
        <Route path="/" component={Main}/>
      </Switch>
    </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
