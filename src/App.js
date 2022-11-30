import React from 'react';
import Header from './Header';
import Meal from './MealCards/Meal';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chats from './Chats/Chats';
import ChatScreen from './Recipe/ChatScreen';
import GetUserProfile from './GetUserProfile';
import { useState } from "react";

//placeholder for accessing stored information from Account functionality
//localStorage.setItem("userID", "0000") //guest
//localStorage.setItem("userID", "3969") //user
localStorage.setItem("userID", "4209") //admin
//localStorage.setItem("userID", "4222") //unknown user
window.$userID = localStorage.getItem("userID")

function App() {

  const [profile, setProfile] = useState(null);
  function UserProfile(profile) {
    setProfile(profile);
    console.log(profile.isAdmin);
  }

  return (
    <div className="App">
      <GetUserProfile userProfile={UserProfile} />
      <Router>
        <Switch>
          <Route path="/chat/:mealid">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats profile = {profile}/>
          </Route>
          <Route path="/">
            <Header />
            <Meal profile={profile} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
