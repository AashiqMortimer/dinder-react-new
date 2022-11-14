import React, { useState } from 'react';
import "./ChatScreen.css";
import FetchRecipe from "./FetchRecipe";
//import { useLocation } from 'react-router-dom'

function ChatScreen() {
    /*let meal = useLocation();
    meal = mealData.state;
    //mealData.map(meal => {
        console.log(mealData.title);
   // });*/

    let meal = {
        "id": 716429,
        "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
        "image": "https://spoonacular.com/recipeImages/716429-312x231.jpg",
        "imageType": "jpg"
    }

    let apiKey = "d3f28846148b47539eff4b6cf0e2f365" //somehow need to make this universal. 

    const [recipe, setRecipe] = useState("");
    function GetRecipe(recipe) {
        setRecipe(recipe);
        if (recipe != "") {
            console.log("Recipe Found")
        } else {
            console.log("error - chatscreen");
        }
    }


    const [input, setInput] = useState('')


    return (
        <div>
            <FetchInstr mealID={meal.id} getRecipe={GetRecipe} apiKey = {apiKey} />

            <section className='chatScreen'>
                <p className='chatScreenIntro'>Let's make {meal.title}!</p>
                <button className='chatScreenButton' onClick={RecipeBreakdown(recipe)}>Get Recipe</button>
            </section>
        </div>

    );
}

export default ChatScreen