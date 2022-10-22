import React from 'react';
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>This is chat</h1>
          </Route>
          <Route path="/">
            <TinderCards />
          </Route>
        </Switch>
        
        

        {/* {Tinder Cards} */}
        {/* {Buttons below tinder cards} */}

        {/* {Chat screen} */}
        {/* {Individual chat screen} */}
      </Router> 
    </div>
  );
}

export default App;
