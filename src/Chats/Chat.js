import React from 'react';
import './Chat.css';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom'

function Chat({ meal }) {
  return (
    <Link to={{
      pathname: `/chat/${meal.mealID}`,
      state: { meal }
    }}
    >
      <div className='chat'>
        <Avatar className='chat__image' alt={meal.title} src={meal.image} />
        <div className='chat__details'>
          <h2>{meal.title}</h2>
        </div>
      </div>
    </Link>
  )
}

export default Chat