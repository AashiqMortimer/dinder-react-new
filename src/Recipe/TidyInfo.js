import { useEffect } from "react";


export default function TidyInfo({ allInfo, getIngred, getSteps, newRecipeNeeded, newRecipe }) {
    useEffect(() => {
        if (newRecipeNeeded === "true") {
            let ingred = [];
            let step = [];
            for (var i = 0; i < allInfo.length; i++) {
                allInfo[i].map(e => {
                    step.push(e.step);
                    e.ingredients.map(el =>
                        ingred.push(el.name))
                })
            }

            getSteps(step);
            getIngred(ingred);
            newRecipe("false");
        }
    }, [newRecipeNeeded]);
}