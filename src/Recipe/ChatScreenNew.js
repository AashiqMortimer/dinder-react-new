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
//NEED THE API. 

/*let apiKey = "d3f28846148b47539eff4b6cf0e2f365" //somehow need to make this universal. 

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

export default ChatScreen*/