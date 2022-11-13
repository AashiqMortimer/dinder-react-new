//import dependencies
import React from "react";
import { useState, useEffect } from "react";
import TinderCard from 'react-tinder-card';

//MealInfo function collects more information about the recipe and builds the visuals of the meal card.
export default function MealInfo({ meal, apiKey }) {
  console.log(apiKey, "apiKey"); //debug 

  const [servings, setServings] = useState("");
  const [cookTime, setCookTime] = useState("");
  useEffect(() => {
    //FETCH method to placeholder JSON file. Collect required information and store in above constants.
    fetch(
      //JSON FILE; placeholder.
      //"http://127.0.0.1:5500/src/MealCards/placeholderJSON/mealinfo.json"

      //API call
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${apiKey}&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setServings(data.servings);
        setCookTime(data.readyInMinutes);
      })
      //error handling.
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);
  //the second argument here [meal.id] means that useEffect only fires if meal.id changes. 

  //build the meal card using variables defined above.
  return (
    <div>
      <div className="tinderCardsContainer">
        <TinderCard className="swipe" preventSwipe={['up', 'down']}>
          <div className="card" style={{ backgroundImage: `url(${meal.image})` }} >
            <section className="mealInfo">
              <h3>{meal.title}</h3>
              <ul className="summary">
                <li>Preparation Time: {cookTime} minutes</li>
                <li>Number Of Servings: {servings}</li>
              </ul>
            </section>
          </div>
        </TinderCard>
      </div>
    </div>
  );
}