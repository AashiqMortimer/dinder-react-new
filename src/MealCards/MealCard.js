import React, { useEffect, useState } from 'react'
import './MealCard.css';
import GetDietaryReqs from "./GetDietaryReqs";
import MealList from "./MealList";
import SwipeButtonsHP from "./SwipeButtonsHomepage";
//note: make sure a Live Server is running to access the JSON files

//this is running twice each time. why?
export default function MealCard() {
  //dietaryReqs links to GetDietaryReqs to fetch user dietary preferences. 
  const [dietary, setDietary] = useState("");

  function dietaryReqs(dietary) {
    setDietary(dietary);
    //console.log(dietary.intolerances); //debug
  }

  const [mealData, setMealData] = useState(null);
  const [newMealNeeded, setNewMealNeeded] = useState(true);

  //useEffect to fetch a new Meal every time newMealNeeded changes. It runs once before Dietary Reqs are loaded; investigate
  useEffect(() => {
    //placeholder for accessing dietary reqs from file. Look into props/callback functions.
    fetch(
      //mock search result
      "http://127.0.0.1:5500/src/MealCards/placeholderJSON/searchmeal.json"
      //API call
      //`https://api.spoonacular.com/recipes/complexSearch?apiKey=d3f28846148b47539eff4b6cf0e2f365&diet=${dietary.diet}&intolerances=${dietary.intolerances}&sort=random&number=1&instructionsRequired=true`//
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        setNewMealNeeded(false);
      })
      .catch(() => {
        console.log("error");
        //error handling
      });
  }, [newMealNeeded]
  );

  function newMeal() {
    setNewMealNeeded(true);
  }

  //return the card.
  return (
    <div className="App">

      <section>
        <GetDietaryReqs dietaryReqs={dietaryReqs} />
      </section>

      {mealData && <MealList mealData={mealData} />}

      <section>
        <SwipeButtonsHP newMeal={newMeal} />
      </section>
    </div>
  );
}