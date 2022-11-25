import { useState, useEffect } from "react";
import React from 'react';
import Chat from './Chat';
import axios from '../axios';
import AddRecipe from './AddRecipe';
import SentimentDissatisfiedTwoToneIcon from '@mui/icons-material/SentimentDissatisfiedTwoTone';
import './Chats.css';


export default function Chats() {
  const [meals, setMeals] = useState(null);
  useEffect(() => {
    if (window.$userID === "0000") {
      setMeals(JSON.parse(sessionStorage.getItem('guest')));
    } else {
      axios.get(`https://dinder-backend-zaar.herokuapp.com/card/${window.$userID}`) //need to get queries matching userID only. DOENST WORK
        .then(function (response) {
          setMeals(response.data);
        })
        .catch((err) => {
          console.log(err, "error - Chats");
        });
    }
  }, [window.$userID]);

  function AdminAddMeal() {
    if (window.$userID[window.$userID.length] === "A") {
      return (
        <div className='addRecipeButtonContainer'>
          <button className='addRecipeButton' onClick={AddRecipe}>Add A Recipe</button>
        </div>
      )
    } else {
      return null
    }
  }



  function HandleEmpty(meals) {
    if (meals.meals === null  ) {
      return (
        <div className='noMeals'>
          <h1 className='noMealsMessage'>No meals saved yet!</h1>
          <SentimentDissatisfiedTwoToneIcon className='sadFace'>
          </SentimentDissatisfiedTwoToneIcon>
        </div>
      )
    } else {
      return (
        <div className='chats'>
          {meals.meals.map(meal => (
            <Chat key={meal.id} meal={meal} />))}
        </div>
      )
    }
  }

  return (
    <div>
      <AdminAddMeal />
      {meals && <HandleEmpty meals={meals} />}
    </div>
  )

}
