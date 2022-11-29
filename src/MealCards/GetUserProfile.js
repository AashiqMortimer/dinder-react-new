import axios from 'axios';
import { useEffect, useState } from 'react';

//GetUserProfile fetches user information from the database
export default function GetUserProfile({ userProfile }) {
  const [newFetch, newFetchNeeded] = useState(true);

  useEffect(() => {
    if (newFetch === true) {
      let profile = {};
      axios.get(`https://dinder-backend-zaar.herokuapp.com/users/${window.$userID}`)
        .then(function (response) {
          response.data.map(user =>
            profile = user)
          newFetchNeeded("false");
          //handling unknown userID
          if (profile.userID !== undefined) {
            userProfile(profile)
          } else {
            console.log("Undefined ID");
            window.$userID = "0000";
            alert('Unknown User');
            newFetchNeeded("true");
          }
        })
        .catch(function (err) {
          console.log("error = user profile", err)
        });
    }
  }, [newFetch])

  return null;
}