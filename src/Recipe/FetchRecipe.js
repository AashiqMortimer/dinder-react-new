import { useEffect } from "react"

//FetchRecipe makes an API call if NewRecipeNeeded is true to collect recipe information
export default function FetchRecipe({ apiKey, mealID, newRecipeNeeded, getAllInfo }) {
    useEffect(() => {
        if (newRecipeNeeded === true) {
            let allInfo = [];
            fetch(
                //API call
                `https://api.spoonacular.com/recipes/${mealID}/analyzedInstructions?apiKey=${apiKey}&stepBreakdown=false`//
            )
                .then((response) => response.json())
                .then((data) => {
                    data.map(e =>{
                        allInfo.push(e.steps)
                    })
                    getAllInfo(allInfo);
                })
                .catch((err) => {
                    console.log(err, "error - allInfo");//error handling
                });
        }
    }, [newRecipeNeeded]);

    return null;
}