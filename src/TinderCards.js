import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import axios from './axios';

function TinderCards() {
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
                style={{ backgroundImage: `url(${person.url})` }}
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

export default TinderCards