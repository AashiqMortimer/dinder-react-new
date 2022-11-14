import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import "./ChatScreen.css";

function ChatScreen() {

    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            name: 'Pizza',
            image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            message: 'Want to make a pizza?',
        },
        {
            message: 'Yes!',
        },
        {
            name: 'Pizza',
            image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            message: 'Here you go... get some flour, passata, cheese, etc.',
        },
    ])

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput('');
    };

    return (
        <div className='chatScreen'>
            <p className='chatScreen__timestamp'>Let's make cake!</p>
            {/* if message contains a name, it is the recipe. If it doesn't, it is the user. */}
            {messages.map(message => (
                message.name ? (
                    <div className='chatScreen__message'>
                        <Avatar
                            className='chatScreen__image'
                            alt={message.name}
                            src={message.image}
                        />
                        <p className='chatScreen__text'>{message.message}</p>
                    </div>
                ) : (
                    <div className='chatScreen__message'>
                        <p className='chatScreen__textUser'>{message.message}</p>
                    </div>
                )
            ))}

            <form className='chatScreen__input'>
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className='chatScreen__inputField'
                    type="text"
                    placeholder='Type a message...' />
                <button onClick={handleSend} type="submit" className='chatScreen__inputButton'>SEND</button>
            </form>
        </div>
    );
}

export default ChatScreen