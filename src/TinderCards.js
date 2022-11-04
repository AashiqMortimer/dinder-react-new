import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import axios from './axios';

export default function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() =>  {
        async function fetchData() {
            const req = await axios.get('/card');
            
            setPeople(req.data);
        }

        fetchData();
    }, [])

    console.log(people);

  return (
    <div>
        <div className="tinderCards__cardContainer">
        {people.map(person => (
            <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={['up', 'down']}
            >
                <div 
                style={{ backgroundImage: `url(${person.imgUrl})` }}
                //replace this with meal.image
                className="card"
                >
                    <h3>{person.name}</h3>
                </div>
            </TinderCard>
        ))}
        </div>
    </div>
  )
}