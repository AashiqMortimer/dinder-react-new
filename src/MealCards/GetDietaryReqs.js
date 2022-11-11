import { useEffect } from 'react';

export default function GetDietaryReqs({ dietaryReqs }) {

  useEffect(() => {
    fetch(
      //placeholder for database search
      "http://127.0.0.1:5500/src/MealCards/placeholderJSON/dietaryreqs.json"
    )
      .then((response) => response.json())
      .then((data) => {
        dietaryReqs(data, "GetDietaryReqs");
        //probably need to do some diet/intolerance mapping to handle multiple responses
      })
      .catch(() => {
        console.log("error - dietary reqs");
        //error handling
      });
  }, []);
}