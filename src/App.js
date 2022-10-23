import React from 'react';
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header /> 
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router> 
    </div>
  );
}

        // {/* <TinderCards /> */}
        // {/* {Chat screen} */}
        // {/* {Individual chat screen} */}

export default App;
