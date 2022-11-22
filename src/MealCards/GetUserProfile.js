import axios from 'axios';
import { useEffect, useRef} from 'react';

export default function GetUserProfile({ userProfile }) {
  const profile = useRef({
    "userID": "", "apiKey": "",
    "dietary": "", "intolerances": ""
  });
  const temp = useRef({});
  if (window.$userID === "0000") {
    console.log("guest"); //placeholder
  };
  useEffect(() => {
    axios.get(`https://dinder-backend-zaar.herokuapp.com/users/${window.$userID}`)
      .then(function (response) {
        response.data.map(user =>
          temp.current = user)
        profile.current.userID = temp.current.userID;
        profile.current.apiKey = temp.current.apiKey;
        profile.current.dietary = temp.current.dietary;
        profile.current.intolerances = temp.current.intolerances; //collecting only the necessary data for security. 
        userProfile(profile.current)
      })
      .catch(function (err) {
        console.log("error = user profile", err)
      });
  },[])

  return null;
}