import axios from 'axios';
import { useEffect, useRef } from 'react';

//UserAuth collects the user apiKey from the db
export default function UserAuth({ getUserAuth }) {
  useEffect(() => {
    axios.get(`https://dinder-backend-zaar.herokuapp.com/users/${window.$userID}`)
      .then(function (response) {
        response.data.map(user =>
          getUserAuth(user.apiKey))
      })
      .catch(function (err) {
        console.log("error -> Recipe Auth", err)
      });
  }, []);
  return null;
}