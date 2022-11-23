import React, { useEffect } from 'react';
import "./ChatScreen.css";
import FetchRecipe from "./FetchRecipe";
import PaintRecipe from "./PaintRecipe";
import TidyInfo from "./TidyInfo.js";
import UserApi from "./UserApi";
import { useState } from 'react';
import { useLocation } from 'react-router-dom';


export default function ChatScreen() {

    const [meal, setMeal] = useState("");
    let mealData = useLocation();
    useEffect(() => {
        setMeal(mealData.state.meal);
    }, []);
    //pulls in the meal data inc. mealID when can be used in the API to search recipe. 

    const [apiKey, setApiKey] = useState("");
    function GetUserApi(apiKey) {
        setApiKey(apiKey);
        console.log("Apikey found");
    }

    const [newRecipeNeeded, setNewRecipeNeeded] = useState("false");
    function NewRecipe(newRecipe) {
        setNewRecipeNeeded(newRecipe);
        console.log("NewRecipe:", newRecipe)
    }

    const [allInfo, setAllInfo] = useState(null);
    function GetAllInfo(allInfo) {
        setAllInfo(allInfo);
        console.log(allInfo, "All Info!");
    }

    const [ingred, setIngred] = useState(null);
    function GetIngred(ingred) {
        setIngred(ingred);
        console.log(ingred, "Debug from Fetch Ingredients");
    }

    const [steps, setSteps] = useState(null);
    function GetSteps(steps) {
        setSteps(steps);
        console.log(steps, "Debug from Fetch Ingredients");
    }

    function IfRecipe(allInfo) {
        if (allInfo.allInfo == null) {
            return (
                <div>
                    <button className='chatScreenButton' onClick={() => NewRecipe("true")}>Get Recipe</button>
                </div>
            )
        } else {
            return (
                <div>
                    <button className='chatScreenButton'>See Ingredients</button>
                    <button className='chatScreenButton'>See Instructions</button>
                    <a href={meal.sourceUrl}><button className='chatScreenButton'>Go to Recipe Website</button></a>
                </div>
            )
        }
    }


    return (
        <div>
            <div>

                <UserApi getUserAuth={GetUserApi} />

                <p className='chatScreenHeader'>Let's make {meal.title}!</p>

                <div className='chatScreenContainer'></div>

                <FetchRecipe apiKey={apiKey} mealID={meal.id} newRecipeNeeded={newRecipeNeeded} getAllInfo={GetAllInfo} />

                {allInfo && <TidyInfo allInfo={allInfo} getIngred={GetIngred} getSteps={GetSteps} newRecipe={NewRecipe} newRecipeNeeded={newRecipeNeeded} />}

                {ingred && <PaintRecipe steps={steps} ingred={ingred} />}

                <div className='chatScreenFooter'>
                    <IfRecipe allInfo={allInfo} />
                </div>

            </div>
        </div>
    )
    //
}