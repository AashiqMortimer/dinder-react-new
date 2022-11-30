//import dependencies
import React from "react";
import { useEffect } from "react";
import TinderCard from 'react-tinder-card';

//MealInfo function collects more information about the recipe and builds the visuals of the meal card.
export default function MealInfo({ meal, apiKey, newMeal, newMealNeeded, getMealData }) {
  useEffect(() => {
    if (newMealNeeded === true) {
      fetch(
        //API call
        `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${apiKey}&includeNutrition=false`
      )
        //data processing
        .then((response) => response.json())
        .then((data) => {
          meal.userID = window.$userID;
          meal.sourceUrl = data.sourceUrl;
          meal.cookTime = data.readyInMinutes;
          meal.servings = data.servings;
          getMealData(meal);
          newMeal(false);
        })
        //error handling.
        .catch((err) => {
          console.log(err, "meal info");
        });
    }
  }, [meal.id, newMealNeeded]);

  //build the meal card using variables defined above.
  return (
    <div>
      <div className="tinderCardsContainer">
        <TinderCard className="swipe" preventSwipe={['up', 'down']}>
          <div className="card" style={{ backgroundImage: `url(${meal.image})`}} alt={meal.title}>
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