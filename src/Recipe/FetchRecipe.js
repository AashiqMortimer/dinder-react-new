import { useState, useEffect } from "react"
//import FindAllInfo from "./FindAllInfo"

export default function FetchRecipe({ apiKey, mealID, newRecipeNeeded, newRecipe, getAllInfo }) {
    //FindAllInfo
    useEffect(() => {
        if (newRecipeNeeded === "true") {
            console.log(apiKey, mealID, "Debug Fetch Recipe");
            console.log(mealID, apiKey, "DEBUG from FindAllInfo");
            let allInfo = {}; //debug; stops unused var error when using JSON file. 
            fetch(
                //API call
                `https://api.spoonacular.com/recipes/${mealID}/analyzedInstructions?apiKey=${apiKey}&stepBreakdown=false`//
            )
                .then((response) => response.json())
                .then((data) => {
                    data.map(instr =>
                        allInfo = instr
                    )

                    getAllInfo(allInfo);
                    newRecipe("false");
                })
                .catch((err) => {
                    console.log(err, "error - allInfo");//error handling
                });
        } else {
            console.log("New recipe not needed", newRecipeNeeded); //debug
        }
    }, [newRecipeNeeded]);
}