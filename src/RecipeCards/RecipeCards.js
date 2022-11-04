import React, { useState } from 'react'
import './RecipeCards.css';
import RecipeList from "./RecipeList";
//note: make sure a Live Server is running to access the JSON files

export default function RecipeCards() {

  //fetch user data for recipe search
    const [diet, setDiet] = useState("");
    const [intolerances, setIntolerances] = useState("");
    
    //this needs to run once on page load?? useEffect()?
    function getDietaryReqs(){
      fetch(
      //placeholder for database search
      "http://127.0.0.1:5500/src/RecipeCards/placeholderJSON/dietaryreqs.json"   
      )
    .then((response) => response.json())
    .then((data) => {
      setDiet(data.diet);
      setIntolerances(data.intolerances);
    })
 }
    //getRecipe will return a random meal iD.
    const [recipeData, setRecipeData] = useState(null);

    function getRecipe(diet, intolerances){
       //FETCH method to placeholder JSON file. Collect recipeData
       fetch(
         //mock search result
         "http://127.0.0.1:5500/src/RecipeCards/placeholderJSON/searchrecipe.json"   

         //API call
         //`https://api.spoonacular.com/recipes/complexSearch?apiKey=d3f28846148b47539eff4b6cf0e2f365&diet=${diet}&intolerances=${intolerances}&sort=random&number=1`//
       )
       .then((response) => response.json())
       .then((data) => {
         setRecipeData(data);
       })
       .catch(() => {
         console.log("error"); //error handling
       });
   }
  //return the card. not convinced this is the best place to run getDietaryReqs or that it works properly
  return (
    <div className="App">
      <section>
        <button onClick={()=>{getDietaryReqs(); getRecipe({diet}, {intolerances})}}>Get some food!</button>
        </section>
      
      {recipeData && <RecipeList recipeData={recipeData}/>}

      </div>
      );
}