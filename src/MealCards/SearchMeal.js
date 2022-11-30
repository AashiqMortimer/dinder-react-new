////note: make sure a Live Server is running to access the JSON files
import { useEffect } from "react";

//SearchMeal uses var dietary to make an API call to the Complex Search endpoint when newMealNeeded changes
export default function SearchMeal({ profile, newMealNeeded, getMealData }) {
    useEffect(() => {
        if (newMealNeeded === true) {
            fetch(
                //API call
                `https://api.spoonacular.com/recipes/complexSearch?apiKey=${profile.apiKey}&diet=${profile.diet}&intolerances=${profile.intolerances}&sort=random&number=1&instructionsRequired=true`//
            )
                .then((response) => response.json())
                .then((data) => {
                    data.results.map(meal =>
                        getMealData(meal)
                    )
                })
                .catch((err) => {
                    alert("You are out of API Calls for Today!")
                    getMealData([]);
                    console.log(err, "error - search meal");
                });
        }
    }, [newMealNeeded, profile]);
    return null;
}