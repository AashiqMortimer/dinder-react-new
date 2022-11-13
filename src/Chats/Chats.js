import {useEffect, useState} from "react";
import React from 'react';
import Chat from './Chat';
import axios from '../axios';

function Chats() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const req = await axios.get('/card');
      setMeals(req.data);
    }
    fetchMeals();
  }, [])
  //change this to .then because async isn't supported by older browsers (and for consistency)

  return (
    <div>
      <div className='chats'>
        {meals.map(meal => (
        <Chat key={meal.id} meal={meal}/>))}
      </div>
    </div>
  )
}

export default Chats

//this works but returns 'Warning: Each child in a list should have a unique "key" prop'. Something to do with the mapping.