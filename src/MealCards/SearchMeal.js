////note: make sure a Live Server is running to access the JSON files
import { useEffect, useRef } from "react";

//SearchMeal uses var dietary to make an API call to the Complex Search endpoint when newMealNeeded changes
export default function SearchMeal({ profile, newMealNeeded, getMealData }) {
    let mealData = useRef({});
    useEffect(() => {
        fetch(
            //mock search result
            "http://127.0.0.1:5500/src/MealCards/placeholderJSON/searchmeal.json"
            //API call
            //`https://api.spoonacular.com/recipes/complexSearch?apiKey=${profile.apiKey}&diet=${profile.diet}&intolerances=${profile.intolerances}&sort=random&number=1&instructionsRequired=true`//
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(profile, "DEBUG from SearchMeal"); //debug; stops unused var error when using JSON file. 
                data.results.map(meal =>
                    mealData.current = meal
                )
                console.log(mealData.current, "current meal")
                getMealData(mealData.current);
            })
            .catch((err) => {
                console.log(err, "error - search meal");//error handling
            });
    }, [newMealNeeded]);
}