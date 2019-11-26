import React from 'react';
import Stuff from './Stuff';
import About from './About';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
  
    <Router>     
 <div class="container">
            <div class="row">
              <div class="col-4">
          <ul >
            <li ><Link to={'/'} > Home </Link></li>
            <li ><Link to={'/contact'} >Contact</Link></li>
            <li><Link to={'/about'} >About</Link></li>
          </ul>
          </div>
          <Switch>
            <div>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Stuff} />
              <Route path='/about' component={About} />
              </div>
          </Switch>
          </div>
          </div>
      </Router>
    
  );
}




