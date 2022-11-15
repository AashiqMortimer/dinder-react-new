import React from 'react'
import "./Header.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';
import { ArrowBackIos } from '@mui/icons-material';
import { Link, useHistory } from "react-router-dom";

function Header({ backButton }) {
  const history = useHistory();
  return (
    // BEM naming convention.
    <div className="header">
        {backButton ? (
          <IconButton onClick={() => history.replace(backButton)}>
            <ArrowBackIos fontSize='large' className='header__icon'/>
          </IconButton>
        ) : (
          <IconButton>
            <AccountCircleIcon className="account__icon" fontSize="large"/>
          </IconButton>
        )}
        <Link to="/">
          <img 
          className="header__logo"
          src="https://i.ibb.co/fvsZFnj/dinder-Logo-Placeholder.jpg" 
          alt="Dinder"/>
        </Link>
        <Link to="/chat">
          <IconButton>
            <ForumIcon className="message__icon" fontSize="large"/>
        </IconButton>
        </Link>
        
    </div>
  )
}

export default Header