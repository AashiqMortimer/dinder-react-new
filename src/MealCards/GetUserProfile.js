import axios from 'axios';
import { useEffect } from 'react';

export default function GetUserProfile({ userProfile }) {
  let profile = {
    "userID": "", "apiKey": "",
    "dietary": "", "intolerances": ""
  };
  let temp = {};
  useEffect(() => {
    if (window.$userID === "0000") {
      console.log("guest"); //placeholder
    }
    axios.get(`https://dinder-backend-zaar.herokuapp.com/users/${window.$userID}`)
      .then(function (response) {
        response.data.map(user =>
          temp = user)
        profile.userID = temp.userID;
        profile.apiKey = temp.apiKey;
        profile.dietary = temp.dietary;
        profile.intolerances = temp.intolerances;
        userProfile(profile)
      })
      .catch(function (err) {
        console.log("error = user profile", err)
      });
  }, [window.$userID])
}