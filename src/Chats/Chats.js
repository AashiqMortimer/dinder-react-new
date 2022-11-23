import { useState, useEffect } from "react";
import React from 'react';
import Chat from './Chat';
import axios from '../axios';
import AddRecipe from './AddRecipe';
import './Chats.css';

export default function Chats() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    if (window.$userID === "0000") {
      let response = JSON.parse(sessionStorage.getItem('guest'));
      console.log(response, "response");
      if (response == null) {
        alert('No recipes saved yet');
      } else {
        setMeals(response);
      }

    } else {
      axios.get('/card')
        .then(function (response) {
          setMeals(response.data);
        })
        .catch(() => {
          console.log("error - Chats");
        });
    }
  }, []);

  function AdminAddMeal(){
    if (window.$userID[0] === "A"){
      return(
        <div className='addRecipeButtonContainer'>
          <button className='addRecipeButton' onClick={AddRecipe}>Add A Recipe</button>
        </div>
      )
    }
  }

  return (
    <div>

      <AdminAddMeal/>

      <div className='chats'>
        {meals.map(meal => (
          <Chat key={meal.id} meal={meal} />))}
      </div>
    </div>
  )
}
