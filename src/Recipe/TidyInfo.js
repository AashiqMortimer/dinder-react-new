import { useEffect } from "react";

//TidyInfo processes the information gathered from the API into lists
export default function TidyInfo({ allInfo, getIngred, getSteps, newRecipeNeeded, newRecipe }) {
    useEffect(() => {
        if (newRecipeNeeded === "true") {
            let temp = [];
            let ingred = [];
            let step = [];
            allInfo.map(e1 => {
                e1.map(e2 => {
                    step.push(e2.step);
                    e2.ingredients.map(e3 =>
                        temp.push(e3.name))
                })
            })
            ingred = [...new Set(temp)]; //handles duplicates
            getSteps(step);
            getIngred(ingred);
            newRecipe(false);
        }
    }, [newRecipeNeeded]);

    return null;
}