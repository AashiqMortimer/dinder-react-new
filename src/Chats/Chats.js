import { useState } from "react";
import React from 'react';
import Chat from './Chat';
import axios from '../axios';

export default function Chats() {
  const [meals, setMeals] = useState([]);
  if (window.$userID === "0000") {
    console.log("Guest") //placeholder
  } else {
    axios.get('/card')
      .then(function (response) {
        setMeals(response.data);
      })
      .catch(() => {
        console.log("error - Chats");
      });
  }

  return (
    <div>
      <div className='chats'>
        {meals.map(meal => (
          <Chat key={meal.id} meal={meal} />))}
      </div>
    </div>
  )
}

//this works but returns 'Warning: Each child in a list should have a unique "key" prop'. Something to do with the mapping.