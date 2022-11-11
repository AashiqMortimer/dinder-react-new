import { useEffect } from "react";

export default function({dietary, newMealNeeded, getMealData, newMeal}){
console.log(dietary);
    useEffect(()=>{
        fetch(
            //mock search result
            "http://127.0.0.1:5500/src/MealCards/placeholderJSON/searchmeal.json"
            //API call
            //`https://api.spoonacular.com/recipes/complexSearch?apiKey=d3f28846148b47539eff4b6cf0e2f365&diet=${dietary.diet}&intolerances=${dietary.intolerances}&sort=random&number=1&instructionsRequired=true`//
          )
            .then((response) => response.json())
            .then((data) => {
              getMealData(data.results);
              newMeal(false);
            })
            .catch(() => {
              console.log("error - search meal");
              //error handling
            });
    }, [newMealNeeded]);
    
}