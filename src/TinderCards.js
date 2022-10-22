import React, { useState } from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Steve Jobs",
            url: "https://cdn.stylepark.com/articles/2011/steve-jobs-1955-2011/l2_v326043_958_600_567-1.jpg",
        }, 
        {
            name: "Mark Zuckerberg",
            url: "https://upload.wikimedia.org/wikipedia/commons/e/ef/MarkZuckerberg.jpg",
        }
    ]);

  return (
    <div>
        <h1>Tinder Cards</h1>

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