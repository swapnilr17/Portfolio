import React,{useEffect,useState} from 'react';
import Main from './Pages/index';
import Post from './Pages/post'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Preloader from './Pages/preloader'


function App() {

  const [mount,setMount]=useState(false);

  useEffect(() => (setMount(!mount)), []);

  console.log(mount);
  
  return (
    <Router>
    <div className="App">
      <Preloader mounted={mount}/>
      <Switch>
        <Route path="/:post" component={Post}/>
        <Route path="/" component={Main}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
