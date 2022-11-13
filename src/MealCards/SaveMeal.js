import axios from "axios";

export default function saveRecipe({mealData}){
    axios.post('/card', {mealData})
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    alert("Recipe saved!");
  }
  //doesn't currently work, I think I maybe need to connect to Heroku?