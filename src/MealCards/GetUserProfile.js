import { useEffect } from 'react';

export default function GetUserProfile({ userProfile }) {

  useEffect(() => {
    fetch(
      //placeholder for database search
      "http://127.0.0.1:5500/src/MealCards/placeholderJSON/userprofile.json"
    )
      .then((response) => response.json())
      .then((data) => {
        userProfile(data, "GetUserProfile");
        //probably need to do some diet/intolerance mapping to handle multiple responses
      })
      .catch(() => {
        console.log("error - user profile");
        //error handling
      });
  }, []);
}