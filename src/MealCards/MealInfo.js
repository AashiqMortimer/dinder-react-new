//import dependencies
import React from "react";
import { useEffect } from "react";
import TinderCard from 'react-tinder-card';
//this runs when mealData is initialised. stop it?

//MealInfo function collects more information about the recipe and builds the visuals of the meal card.
export default function MealInfo({ meal, apiKey, newMeal, newMealNeeded, getMealData }) {
  useEffect(() => {
    if (newMealNeeded === "true") {
      //FETCH method to placeholder JSON file. Collect required information and store in above constants.
      fetch(
        //JSON FILE; placeholder.
        "http://127.0.0.1:5500/src/MealCards/placeholderJSON/mealinfo.json"

        //API call
        //`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${apiKey}&includeNutrition=false`
      )
        .then((response) => response.json())
        .then((data) => {
          meal.sourceUrl = data.sourceUrl;
          console.log(data.sourceUrl, "sourceUrl");
          meal.cookTime = data.readyInMinutes;
          meal.servings = data.servings;
          getMealData(meal);
          newMeal("false");
        })
        //error handling.
        .catch(() => {
          console.log("error - meal info");
        });
    }
  }, [meal.id, newMealNeeded]); 

  //build the meal card using variables defined above.
  return (
    <div>
      <div className="tinderCardsContainer">
        <TinderCard className="swipe" preventSwipe={['up', 'down']}>
          <div className="card" style={{ backgroundImage: `url(${meal.image})` }} >
            <section className="mealInfo">
              <h3>{meal.title}</h3>
              <ul className="summary">
                <li>Preparation Time: {meal.cookTime} minutes</li>
                <li>Number Of Servings: {meal.servings}</li>
              </ul>
            </section>
          </div>
        </TinderCard>
      </div>
    </div>
  );
}