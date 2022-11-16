import React from 'react';
import "./ChatScreen.css";
import GetRecipe from "./GetRecipe";
import { useLocation } from 'react-router-dom'
//import LoadingButton from '@mui/material/LoadingButton';


export default function ChatScreen() {
    let mealData = useLocation();
    let meal = mealData.state.meal; //pulls in the meal data inc. mealID when can be used in the API to search recipe. 
    console.log(meal);

   /* when button is clicked: 
   function fetch recipe {
    -->fetch apikey
    --> fetch Recipe
    -->map Recipe
    --> build Recipe 
   }*/

return (
    <div>
        <div>
            <section className='chatScreen'>
                <p className='chatScreenIntro'>Let's make {meal.title}!</p>
                <button className='chatScreenButton' onClick={()=>GetRecipe({meal})}>Get Recipe</button>
            </section>
        </div>
    </div>
)
}