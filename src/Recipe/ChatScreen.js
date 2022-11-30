import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import FetchRecipe from "./FetchRecipe";
import PaintRecipe from "./PaintRecipe";
import TidyInfo from "./TidyInfo.js";
import UserApi from "./UserApi";
import "./ChatScreen.css";

export default function ChatScreen() {
    //pulls in the meal data including mealID when can be used in the API to search recipe
    const [meal, setMeal] = useState("");
    let mealData = useLocation();
    useEffect(() => {
        setMeal(mealData.state.meal);
    }, []);

    //GetUserApi fetches the user Apikey
    const [apiKey, setApiKey] = useState("");
    function GetUserApi(apiKey) {
        setApiKey(apiKey);
    }

    //NewRecipe decides when the API needs to fetch recipe info
    const [newRecipeNeeded, setNewRecipeNeeded] = useState(false);
    function NewRecipe(newRecipe) {
        setNewRecipeNeeded(newRecipe);
    }

    //GetAllInfo collects the recipe information
    const [allInfo, setAllInfo] = useState(null);
    function GetAllInfo(allInfo) {
        setAllInfo(allInfo);
    }

    //GetIngred collects the ingredient list
    const [ingred, setIngred] = useState(null);
    function GetIngred(ingred) {
        setIngred(ingred);
    }

    //GetSteps collects the recipe steps
    const [steps, setSteps] = useState(null);
    function GetSteps(steps) {
        setSteps(steps);
    }

    //IfRecipe decides which buttons to display on the screen
    function IfRecipe(allInfo) {
        if (allInfo.allInfo == null) {
            return (
                <div>
                    <button className='chatScreenButton' onClick={() => NewRecipe(true)}>Get Recipe</button>
                </div>
            )
        } else {
            return (
                <div>
                    <a href={meal.sourceUrl}><button className='chatScreenButton'>Go to Recipe Website</button></a>
                </div>
            )
        }
    }


    return (
        <div>
            <div >
                <UserApi getUserAuth={GetUserApi} />
                <p className='chatScreenHeader'>Let's make {meal.title}!</p>
                <FetchRecipe apiKey={apiKey} mealID={meal.id} newRecipeNeeded={newRecipeNeeded} getAllInfo={GetAllInfo} />
                {allInfo && <TidyInfo allInfo={allInfo} getIngred={GetIngred} getSteps={GetSteps} newRecipe={NewRecipe} newRecipeNeeded={newRecipeNeeded} />}
                {ingred && <PaintRecipe steps={steps} ingred={ingred} meal={meal} />}
                <div className='chatScreenFooter'>
                    <IfRecipe allInfo={allInfo} />
                </div>
            </div>
        </div>
    )
}