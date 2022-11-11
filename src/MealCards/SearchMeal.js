////note: make sure a Live Server is running to access the JSON files
import { useEffect } from "react";

//SearchMeal uses var dietary to make an API call to the Complex Search endpoint when newMealNeeded changes
export default function SearchMeal({ dietary, newMealNeeded, getMealData, newMeal }) {
    useEffect(() => {
        fetch(
            //mock search result
            //"http://127.0.0.1:5500/src/MealCards/placeholderJSON/searchmeal.json"
            //API call
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=d3f28846148b47539eff4b6cf0e2f365&diet=${dietary.diet}&intolerances=${dietary.intolerances}&sort=random&number=1&instructionsRequired=true`//
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(dietary); //debug; stops unused var error when using JSON file. 
                getMealData(data.results);
                newMeal(false);
            })
            .catch(() => {
                console.log("error - search meal");//error handling
            });
    }, [newMealNeeded]);
}