import React, { useState } from 'react'
import './TinderCards.css';
import RecipeList from "./RecipeList";

//note: make sure a Live Server is running to access the JSON files

export default function RecipeCards() {

    const [recipeData, setRecipeData] = useState(null);
    const [query, setQuery] = useState("Chicken");
    //query exists for the API call. It's used in the button atm to remove unused variables.
 
   //getRecipe will return a random meal iD.
   function getRecipe(){
       //FETCH method to placeholder JSON file. Collect recipeData
       fetch(
         //mock search result
         //"http://127.0.0.1:5500/src/RecipeCards/placeholderJSON/searchrecipe.json"   

         //API call
         `https://api.spoonacular.com/recipes/complexSearch?apiKey=d3f28846148b47539eff4b6cf0e2f365&query=${query}&sort=random&number=1`
       )
       .then((response) => response.json())
       .then((data) => {
         setRecipeData(data);
       })
       .catch(() => {
         console.log("error"); //error handling
       });
   }

    function handleChange(event){
        setQuery(event.target.value);
    }

  //return the card
  return (
    <div className="App">
      <section className="searchbar">
        <input
        type="string"
        placeholder="Chicken" 
        onChange={handleChange}
        />
        <button onClick={getRecipe}>Find A {query} Meal!</button>
      </section>

      {recipeData && <RecipeList recipeData={recipeData}/>}

      </div>
      );
}