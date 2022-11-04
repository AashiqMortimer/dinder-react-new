//import dependencies
import React from "react";
import { useState, useEffect } from "react";
import TinderCard from 'react-tinder-card';

//define 'RecipeCard' function and export for later use
export default function RecipeCard({ meal }) {

  //define React hook constants to be used later. 
  const [servings, setServings] = useState("");
  const [cookTime, setCookTime] = useState("");

  useEffect(() => {
    //FETCH method to placeholder JSON file. Collect required information and store in above constants.
    fetch(
      //JSON FILE; placeholder.
      "http://127.0.0.1:5500/src/RecipeCards/placeholderJSON/recipeinfo.json"

      //API call
      //`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=d3f28846148b47539eff4b6cf0e2f365&includeNutrition=false`
    )  
      //storing results in a useable format using PROMISES
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
  //the second argument here [meal.id] means that the useEffect only fires if meal.id changes. 

  //build the recipe card using variables defined above.
  return (
    <div>
        <div className="tinderCards__cardContainer">
            <TinderCard className="swipe" preventSwipe={['up', 'down']}>
                <div style={{ backgroundImage: `url(${meal.image})` }} className="card">
                    <h3>{meal.title}</h3>
                    <ul className="summary">
                        <li>Preparation Time: {cookTime} minutes</li>
                        <li>Number Of Servings: {servings}</li>
                    </ul>
                </div>
            </TinderCard>
        </div>
    </div>
  );
}