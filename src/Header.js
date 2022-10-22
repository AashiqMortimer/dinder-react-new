import React from 'react'
import "./Header.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';

function Header() {
  return (
    // BEM naming convention.
    <div className="header">
        <IconButton>
            <AccountCircleIcon className="account__icon" fontSize="large"/>
        </IconButton>
        <img 
        className="header__logo"
        src="https://i.ibb.co/fvsZFnj/dinder-Logo-Placeholder.jpg" 
        alt="Tinder logo"/>
        <IconButton>
            <ForumIcon className="message__icon" fontSize="large"/>
        </IconButton>
    </div>
  )
}

export default Header