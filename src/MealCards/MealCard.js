//note: make sure a Live Server is running to access the JSON files
import React, { useState } from 'react'

import GetDietaryReqs from "./GetDietaryReqs";
import MealList from "./MealList";
import SearchMeal from "./SearchMeal";
import SwipeButtonsHP from "./SwipeButtonsHomepage";

import './MealCard.css';

//MealCard collects information for and builds a new Meal card.
export default function Meal() {
  //DietaryReqs links to GetDietaryReqs to fetch user dietary preferences. 
  const [dietary, setDietary] = useState(null);
  function DietaryReqs(dietary) {
    setDietary(dietary);
    console.log("dietary reqs fetched: ", dietary.intolerances); //debug
  }

  //GetMealData links to SearchMeal to return new meal data.
  const [mealData, setMealData] = useState(null); //meal data is null so that conditional rendering works. 
  function GetMealData(mealData) {
    setMealData(mealData);
    console.log("MealData fetched: ", { mealData });
  }

  //NewMeal lets SearchMeal know when to fetch a new meal
  const [newMealNeeded, setNewMealNeeded] = useState(false);
  function NewMeal(newMeal) {
    setNewMealNeeded(newMeal);
    console.log("New Meal: ", newMealNeeded);
  }

  //Return builds the meal card.
  return (
    <div className="Meal">
      <section>
        <GetDietaryReqs dietaryReqs={DietaryReqs} /> {/*fetch the dietary requirements on load*/}
      </section>

      {dietary && <SearchMeal dietary={dietary} newMealNeeded={newMealNeeded} getMealData={GetMealData} newMeal={NewMeal} />} {/*searches for a new meal based on dietary requirements. only runs once var dietary is valid*/}

      {mealData && <MealList mealData={mealData} />} {/*use the mealData to build the visuals for the meal card. conditionally renders once mealData != null*/}

      <section>
        <SwipeButtonsHP newMeal={NewMeal} /> {/*adds the controls*/}
      </section>
    </div>
  );
}