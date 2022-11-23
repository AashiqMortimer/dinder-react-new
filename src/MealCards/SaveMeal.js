import axios from "axios";

export default function saveRecipe({ mealData}) {

  //checking for guest access. Guest data is stored in session storage. 
  if (window.$userID === "0000") {
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
      .catch(function(err){
        console.log(err, "Save Meal");
      });
  }

  return null;
}