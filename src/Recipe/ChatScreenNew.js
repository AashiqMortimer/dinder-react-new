//import React, { useState } from 'react';
import "./ChatScreen.css";
//import FetchRecipe from "./FetchRecipe";
import { useLocation } from 'react-router-dom'


export default function ChatScreen() {
    let mealData = useLocation();
    let meal = mealData.state.meal; //pulls in the meal data inc. mealID when can be used in the API to search recipe. 
    console.log(meal);
    // });*/
}
/*
return (
    <div>
    <fetch apikey/>
    <FetchRecipe mealID={meal.id} getRecipe={GetRecipe} apiKey = {apiKey} />
    <button to map recip
        <section className='chatScreen'>
            <p className='chatScreenIntro'>Let's make {meal.title}!</p>
            <button className='chatScreenButton' onClick={RecipeBreakdown(recipe)}>Get Recipe</button>
        </section>
    </div>

);
}*/

export default ChatScreen*/