import { useEffect } from "react";


export default function TidyInfo({ allInfo, getIngred, getSteps, newRecipeNeeded, newRecipe }) {
    useEffect(() => {
        if (newRecipeNeeded === "true") {
            let temp = [];
            let ingred = [];
            let step = [];
            allInfo.map(lvl1 => {
                lvl1.map(lvl2 => {
                    step.push(lvl2.step);
                    lvl2.ingredients.map(lvl3 =>
                        temp.push(lvl3.name))
                })
            })

            ingred = [...new Set(temp)]; //handles duplicates

            getSteps(step);
            getIngred(ingred);
            newRecipe("false");
        }
    }, [newRecipeNeeded]);

    return null;
}