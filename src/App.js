import React from 'react';
import './App.css';
import Header from './Header';
import Meal from './MealCards/MealCard';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import SwipeButtons from './MealCards/SwipeButtonsHomepage';
import Chats from './Chats';
import ChatScreen from './ChatScreen';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header /> 
            <Meal />
          </Route>
        </Switch>
      </Router> 
    </div>
  );
}

        // {/* <TinderCards /> */}
        // {/* {Chat screen} */}
        // {/* {Individual chat screen} */}
        //

export default App;
