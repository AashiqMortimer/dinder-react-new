import React from 'react'
import "./Header.css"
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';
import { ArrowBackIos } from '@mui/icons-material';
import { Link, useHistory } from "react-router-dom";
import GuestAlert from './GuestAlert';
import ModalLink from './ModalLink';

function Header({ backButton }) {
  const history = useHistory();
  return (
    // BEM naming convention.
    <div>
      <div className="header">
        {backButton ? (
          <IconButton onClick={() => history.replace(backButton)}>
            <ArrowBackIos fontSize='large' className='header__icon' />
          </IconButton>
        ) : (
          <ModalLink />
        )}
        <Link to="/">
          <img
            className="header__logo"
            src="https://i.ibb.co/fvsZFnj/dinder-Logo-Placeholder.jpg"
            alt="Dinder" />
        </Link>
        <Link to="/chat">
          <IconButton>
            <ForumIcon className="message__icon" fontSize="large" />
          </IconButton>
        </Link>

      </div>

      <div>
        <GuestAlert />
      </div>
    </div>
  )
}

export default Header