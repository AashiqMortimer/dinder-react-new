import React from 'react';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom'

//Chat function paints the meal chat bar.
function Chat({ meal }) {

  //space for addition of a 'Delete recipe' function for Admin privileges

  return (
    <Link to={{
      pathname: `/chat/${meal.id}`,
      state: { meal }
    }}>
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