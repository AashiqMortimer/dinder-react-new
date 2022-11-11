import React, { useState } from 'react'
import './MealCard.css';
import GetDietaryReqs from "./GetDietaryReqs";
import MealList from "./MealList";
import SearchMeal from "./SearchMeal";
import SwipeButtonsHP from "./SwipeButtonsHomepage";
//note: make sure a Live Server is running to access the JSON files

//this is running twice each time. why?
export default function MealCard() {
  //dietaryReqs links to GetDietaryReqs to fetch user dietary preferences. 
  const [dietary, setDietary] = useState("");

  function DietaryReqs(dietary) {
    setDietary(dietary);
    console.log("dietary reqs fetched: ", dietary.intolerances); //debug
  }

  const [mealData, setMealData] = useState(null);
  const [newMealNeeded, setNewMealNeeded] = useState(false);

  function GetMealData(mealData) {
    setMealData(mealData);
    console.log("MealData fetched: ", {mealData});
  }

  function NewMeal(newMeal) {
    setNewMealNeeded(newMeal);
    console.log("New Meal: ", newMealNeeded);
  }

  //return the card.
  return (
    <div className="App">

      <section>
        <GetDietaryReqs dietaryReqs={DietaryReqs} />
      </section>

      {dietary && <SearchMeal dietary={dietary} newMealNeeded={newMealNeeded} getMealData={GetMealData} newMeal={NewMeal} />}

      {mealData && <MealList mealData={mealData} />}

      <section>
        <SwipeButtonsHP newMeal={NewMeal} />
      </section>
    </div>
  );
}