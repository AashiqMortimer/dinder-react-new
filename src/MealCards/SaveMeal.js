import axios from "axios";

export default function saveRecipe({mealData}) {

console.log(mealData, "save meal");

axios.post('https://dinder-backend-zaar.herokuapp.com/card', mealData)
.then(function(response){
  console.log(response)
})
.catch(() => {
  console.log("error - Save Meal");
});
  alert("Recipe saved!");
}
  //doesn't currently work, I think I maybe need to connect to Heroku?