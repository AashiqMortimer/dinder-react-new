import React, { useEffect } from 'react';
import "./ChatScreen.css";
import FetchRecipe from "./FetchRecipe"
import UserApi from "./UserApi";
import { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
//import LoadingButton from '@mui/material/LoadingButton';


export default function ChatScreen() {

    const [mealID, setMealID] = useState("");
    const [meal, setMeal] = useState("");
    let mealData = useLocation();
    useEffect(() => {
        setMeal(mealData.state.meal); //pulls in the meal data inc. mealID when can be used in the API to search recipe. 
        setMealID(meal.mealID);
        console.log(meal.mealID, "mealID")
    }, [mealID])


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
        console.log(ingred, "Ingredients");
    }

    return (
        <div>
            <div>

                <UserApi getUserAuth={GetUserApi} />

                <section className='chatScreenHeader'>
                    <p className='chatScreenIntro'>Let's make {meal.title}!</p>
                    <button className='chatScreenButton' onClick={() => NewRecipe("true")}>Get Recipe</button>
                </section>

                <FetchRecipe apiKey={apiKey} mealID={mealID} newRecipe={NewRecipe} newRecipeNeeded={newRecipeNeeded} getAllInfo={GetAllInfo} />

                {allInfo && <FetchIngred allInfo = {allInfo} getIngred = {GetIngred}/>}

            </div>
        </div>
    )

    /*{allInfo && <FetchInstr />}

    <paintRecipe/>*/
}