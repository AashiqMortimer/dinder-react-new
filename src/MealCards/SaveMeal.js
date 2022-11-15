import axios from "axios";

export default function saveRecipe({ mealData }) {

  console.log(mealData, "save meal");
  if (window.$userID === "0000") {
    console.log("Guest") //placeholder
  } else {
    axios.post('https://dinder-backend-zaar.herokuapp.com/card', mealData)
      .then(function (response) {
        console.log(response)
      })
      .catch(() => {
        console.log("error - Save Meal");
      });
  }
  alert("Recipe saved!");
}