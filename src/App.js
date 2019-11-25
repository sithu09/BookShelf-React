import React from 'react';
import COmponentToPrint from './COmponentToPrint';
import BookShelf from './BookShelf';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (
  
      <Router>
         <Switch>
              <Route exact path='/' component={BookShelf} />
          </Switch>
      </Router>
    
    
  );
}





