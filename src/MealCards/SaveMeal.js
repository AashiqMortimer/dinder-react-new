import axios from "axios";

export default function saveRecipe({ mealData }) {
  let mealSaved = false;

  //handling guest storage from sessionStorage
  if (window.$userID === "0000") {
    let saved = sessionStorage.getItem('guest');
    //checking if there is anything in sessionStorage; if not, setting up a blank array.
    if (saved == null) {
      let temp = [];
      temp.push(JSON.parse(saved));
      sessionStorage.setItem('guest', JSON.stringify(temp))
    }

    //checking if the saved meal already exists in the storage
    let temp = JSON.parse(saved) || [];
    for (var i = 0; i < temp.length; i++) {
      if (mealData.id === temp[i].id) {
        mealSaved = true;
        break;
      }
    };
    //storing the saved meal.
    if (!mealSaved) {
      temp.push(mealData);
      sessionStorage.setItem('guest', JSON.stringify(temp));
    }

    //handling saved meals from User DB
  } else {
    axios.get('https://dinder-backend-zaar.herokuapp.com/card')
      .then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
          if (mealData.id.toString() === response.data[i].id) {
            mealSaved = true;
            break;
          }
        };

        //storing saved meal in DB
        if (!mealSaved) {
          console.log(mealData)
          axios.post('https://dinder-backend-zaar.herokuapp.com/card', mealData)
            .then(function (response) {
              console.log(response)
            })
            .catch(function (err) {
              console.log(err, "Save Meal");
            });
        }

      })
  }

  return null;
}

