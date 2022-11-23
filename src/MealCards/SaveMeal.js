import axios from "axios";

export default function saveRecipe({ mealData }) {

  //checking for guest access. Guest data is stored in session storage. 
  if (window.$userID === "0000") {
    alert("You are not logged in. Your recipes will not be saved once you close the browser");
    //sessionStorage.clear(); //debug
    let saved = sessionStorage.getItem('guest');
    if (saved == null) {
      let temp = [];
      temp.push(JSON.parse(saved));
      sessionStorage.setItem('guest', JSON.stringify(temp))
    }
    let temp = JSON.parse(saved) || [];
    temp.push(mealData);
    console.log(temp, "temp");
    sessionStorage.setItem('guest', JSON.stringify(temp));
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

  return null;
}