import { useEffect } from "react"

export default function FetchRecipe({ apiKey, mealID, newRecipeNeeded, getAllInfo }) {
    useEffect(() => {
        if (newRecipeNeeded === "true") {
            let allInfo = [];
            fetch(
                //JSON placeholder
                //`http://127.0.0.1:5500/src/Recipe/placeholderJSON/recipeinstructions.json`
                //API call
                `https://api.spoonacular.com/recipes/${mealID}/analyzedInstructions?apiKey=${apiKey}&stepBreakdown=false`//
            )
                .then((response) => response.json())
                .then((data) => {
                    for (var i=0; i<data.length; i++){
                            allInfo.push(data[i].steps) 
                    } //change this to map for consistency
                    getAllInfo(allInfo);
                })
                .catch((err) => {
                    console.log(err, "error - allInfo");//error handling
                });
        }
    }, [newRecipeNeeded]);

    return null;
}