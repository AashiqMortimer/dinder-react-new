import { useEffect } from "react";


export default function TidyInfo({ allInfo, getIngred, getSteps, newRecipeNeeded, newRecipe }) {
    useEffect(() => {
        if (newRecipeNeeded === "true") {
            let temp = [];
            let ingred = [];
            let step = [];
            for (var i = 0; i < allInfo.length; i++) {
                allInfo[i].map(e => {
                    step.push(e.step);
                    e.ingredients.map(el =>
                        temp.push(el.name))
                })
            }

            ingred = [...new Set(temp)]; //handle duplicates

            getSteps(step);
            getIngred(ingred);
            newRecipe("false");
        }
    }, [newRecipeNeeded]);
}