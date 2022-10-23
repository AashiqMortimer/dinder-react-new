import React from 'react';
import './Chats.css';
import Chat from './Chat';

function Chats() {
  return (
    <div className='chats'>
        <Chat 
        name="Tacos"
        message="Hope you have plenty of tortillas..."
        timestamp="35 minutes ago"
        profilePic="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80"
        />
        <Chat 
        name="Pizza"
        message="Pizza puns would be too easy..."
        timestamp="45 minutes ago"
        profilePic="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
    </div>
  )
}

export default Chats