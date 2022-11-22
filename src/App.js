import React from 'react';
import './App.css';
import Header from './Header';
import Meal from './MealCards/Meal';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chats from './Chats/Chats';
import ChatScreenNew from './Recipe/ChatScreenNew';
//import ChatScreen from './Recipe/ChatScreen';

window.$userID = "1234";

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
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
