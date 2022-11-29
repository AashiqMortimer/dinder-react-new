import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

export default function GetUserProfile({ userProfile }) {
  const [newFetch, newFetchNeeded] = useState("true");

  useEffect(() => {
    if (newFetch === "true") {
      let profile = {};
      axios.get(`https://dinder-backend-zaar.herokuapp.com/users/${window.$userID}`)
        .then(function (response) {
          response.data.map(user =>
            profile = user)
          newFetchNeeded("false");
          if (profile.userID !== undefined) {
            userProfile(profile)
          } else {
            console.log("Undefined ID");
            window.$userID = "0000";
            alert('Unknown User');
            newFetchNeeded("true");
          } //handling unknown userID
        })
        .catch(function (err) {
          console.log("error = user profile", err)
        });
    }
  }, [newFetch])

  return null;
}