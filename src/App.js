import React from 'react';
import Header from './Header';
import Meal from './MealCards/Meal';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chats from './Chats/Chats';
import ChatScreenNew from './Recipe/ChatScreenNew';
import Profile from './Profile/Profile';

import { version } from "react";
console.log("React Version: ", version);

//window.$userID = "0000"; //guest
window.$userID = "123A"; //admin
//window.$userID = "123U"; //user

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/profile">
            <Header backButton="/" />
            <Profile />
          </Route>
          <Route path="/chat/:mealid">
            <Header backButton="/chat" />
            <ChatScreenNew />
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

export default App;
