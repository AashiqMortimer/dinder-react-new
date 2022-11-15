import axios from 'axios';
import { useEffect } from 'react';

export default function GetUserProfile({ userProfile }) {
  let profile = {};
  useEffect(() => {
    if (window.$userID === "0000") {
      console.log("guest");
    }
    axios.get(`https://dinder-backend-zaar.herokuapp.com/users/${window.$userID}`)
      .then(function (response) {
        response.data.map(user =>
          profile = user)
        userProfile(profile)
      })
      .catch(function (err) {
        console.log("error = user profile", err)
      });
  }, [window.$userID])
}