//Meal calls the JSON file to collect recipe information and build a recipe card. Attempt to merge with MealInfo.js
import React from "react"; 
import MealInfo from "./MealInfo"; 

export default function MealList({ mealData, apiKey, updateMeal}) {
  return (
    <main>
      <section className="results">
        {mealData.map((meal) => {
          return <MealInfo key={meal.id} meal={meal} apiKey={apiKey} updateMeal={updateMeal}/>;
        })} 
      </section>
    </main>
  );
}