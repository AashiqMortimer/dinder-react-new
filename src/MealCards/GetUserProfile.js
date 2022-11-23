import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

export default function GetUserProfile({ userProfile }) {
  const profile = useRef({
    "userID": "", "apiKey": "",
    "dietary": "", "intolerances": ""
  });
  const [newFetch, newFetchNeeded] = useState("true");

  useEffect(() => {
    if (newFetch === "true") {
      let temp = {};
      console.log("UserID", window.$userID, newFetch);
      axios.get(`https://dinder-backend-zaar.herokuapp.com/users/${window.$userID}`)
        .then(function (response) {
          response.data.map(user =>
            temp = user)
          newFetchNeeded("false");
          if (temp.userID !== undefined) {
            profile.current.userID = temp.userID;
            profile.current.apiKey = temp.apiKey;
            profile.current.dietary = temp.dietary;
            profile.current.intolerances = temp.intolerances; //collecting only the necessary data for security. 
            userProfile(profile.current);
          } else {
            console.log("undefined id");
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