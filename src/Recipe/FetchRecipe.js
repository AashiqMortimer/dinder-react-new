import { useEffect } from "react";

//SearchMeal uses var dietary to make an API call to the Complex Search endpoint when newMealNeeded changes
export default function FetchInstr({ mealID, getRecipe, apiKey}) {
    useEffect(() => {
        fetch(
            //mock search result
            `http://127.0.0.1:5500/src/Recipe/placeholderJSON/recipeinstructions.json`
            //API call
            //`https://api.spoonacular.com/recipes/${mealID}/analyzedInstructions?apiKey=${apiKey}&stepBreakdown=false`//
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(apiKey, mealID, "from FetchRecipe"); //debug; stops unused var error when using JSON file. 
                getRecipe(data.results);
            })
            .catch(() => {
                console.log("error - search meal");//error handling
            });
            //console.log
    }, []);
}