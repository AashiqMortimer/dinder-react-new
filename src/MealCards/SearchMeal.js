////note: make sure a Live Server is running to access the JSON files
import { useEffect, useRef } from "react";

//SearchMeal uses var dietary to make an API call to the Complex Search endpoint when newMealNeeded changes
/*SearchMeal throws an ESLint error for missing dependencies for 'getMealData'. However, if
//getMealData is a function, adding it throws an infinite loop. Ideal solution is to change
getMealData to a useCallback function, but doing so prevents MealData from updating in SearchMeal
and the programme stops.*/
export default function SearchMeal({ profile, newMealNeeded, getMealData}) {
    let mealData = useRef({});
    useEffect(() => {
        if (newMealNeeded === "true") {
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
                    getMealData(mealData.current);
                    //newMeal("false")
                })
                .catch((err) => {
                    console.log(err, "error - search meal");//error handling
                });
        }

    }, [newMealNeeded, profile]);

    return null;
}