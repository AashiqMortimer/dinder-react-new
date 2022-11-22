//note: make sure a Live Server is running to access the JSON files
import React, { useState, useCallback } from 'react'

import GetUserProfile from "./GetUserProfile";
import MealInfo from "./MealInfo";
import SearchMeal from "./SearchMeal";
import SwipeButtonsHP from "./SwipeButtonsHomepage";

import './Meal.css';

//MealCard collects information for and builds a new Meal card.
export default function Meal() {
  //DietaryReqs links to GetDietaryReqs to fetch user dietary preferences. 
  const [profile, setProfile] = useState(null);
  function UserProfile(profile) {
    setProfile(profile);
    //console.log("user profile fetched: ", profile.apiKey); //debug
  }

  //GetMealData links to SearchMeal to return new meal data.
  const [mealData, setMealData] = useState(null);
  //meal data is null so that conditional rendering works. 
  function GetMealData(mealData) {
    setMealData(mealData);
    console.log("SearchMeal completed: ", { mealData });
  }

  //NewMeal lets SearchMeal know when to fetch a new meal
  const [newMealNeeded, setNewMealNeeded] = useState("true");
  function NewMeal(newMeal) {
    setNewMealNeeded(newMeal);
    console.log("New Meal: ", newMealNeeded);
  }

  //Return builds the meal card.
  return (
    <div className="Meal">
      <section>
        <GetUserProfile userProfile={UserProfile} /> {/*fetch the user profile on load*/}
      </section>

      {profile && <SearchMeal profile={profile} newMealNeeded={newMealNeeded} getMealData={GetMealData} newMeal={NewMeal} />} {/*searches for a new meal based on dietary requirements. only runs once var dietary is valid*/}

      {mealData && <MealInfo meal={mealData} apiKey={profile.apiKey} newMealNeeded={newMealNeeded} newMeal={NewMeal} />} {/*use the mealData to build the visuals for the meal card. conditionally renders once mealData != null*/}

      <section>
        <SwipeButtonsHP newMeal={NewMeal} mealData={mealData} /> {/*adds the controls*/}
      </section>
    </div>
  );
}