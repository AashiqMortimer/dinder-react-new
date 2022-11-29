//note: make sure a Live Server is running to access the JSON files
import React, { useState} from 'react'

//import GetUserProfile from "./GetUserProfile";
import MealInfo from "./MealInfo";
import SearchMeal from "./SearchMeal";
import SwipeButtonsHP from "./SwipeButtonsHomepage";

import './Meal.css';

//MealCard collects information for and builds a new Meal card.
export default function Meal({profile}) {


  //GetMealData links to SearchMeal to return new meal data.
  const [mealData, setMealData] = useState(null);
  //meal data is null so that conditional rendering works. 
  function GetMealData(mealData) {
    setMealData(mealData);
    console.log("MealData updated: ", { mealData });
  }

  //NewMeal lets SearchMeal know when to fetch a new meal
  const [newMealNeeded, setNewMealNeeded] = useState("true");
  function NewMeal(newMeal) {
    setNewMealNeeded(newMeal);
  }

  //Return builds the meal card.
  return (
    <div className="Meal">


      {profile && <SearchMeal profile={profile} newMealNeeded={newMealNeeded} getMealData={GetMealData} />} {/*searches for a new meal based on dietary requirements. only runs once var dietary is valid*/}

      {mealData && <MealInfo meal={mealData} apiKey={profile.apiKey} newMealNeeded={newMealNeeded} getMealData={GetMealData} newMeal={NewMeal} />} {/*use the mealData to build the visuals for the meal card. conditionally renders once mealData != null*/}

      <section>
        <SwipeButtonsHP newMeal={NewMeal} mealData={mealData} getMealData ={GetMealData} />
      </section>
    </div>
  );
}