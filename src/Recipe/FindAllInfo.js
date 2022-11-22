//import { useEffect} from "react"; 
/*fetch the recipe instructions and return an object with the steps*/

import { useEffect } from "react";

export default function FindAllInfo({ getAllInfo, apiKey, mealID, newRecipe, newRecipeNeeded }) {
    useEffect(() => {
        let allInfo = {};
        console.log(allInfo)
        console.log(mealID, apiKey, "DEBUG from FindAllInfo"); //debug; stops unused var error when using JSON file. 
        fetch(
            //API call
            `https://api.spoonacular.com/recipes/${mealID}/analyzedInstructions?apiKey=${apiKey}&stepBreakdown=false`//
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                getAllInfo(data);
                newRecipe = ("false")
                //data.results.map(instr =>
                //allInfo = instr
                //)

                //getAllInfo(allInfo);
            })
            .catch((err) => {
                console.log(err, "error - allInfo");//error handling
            });
    },[newRecipeNeeded]);
}