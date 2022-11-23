import axios from 'axios';
import { useEffect, useRef } from 'react';

export default function UserAuth({ getUserAuth }) {
  const temp = useRef({});
  if (window.$userID === "0000") {
    console.log("guest"); //placeholder
  };
  useEffect(() => {
    axios.get(`https://dinder-backend-zaar.herokuapp.com/users/${window.$userID}`)
      .then(function (response) {
        response.data.map(user =>
          temp.current = user)
        getUserAuth(temp.current.apiKey)
      })
      .catch(function (err) {
        console.log("error -> Recipe Auth", err)
      });
  }, []);

  return null;
}