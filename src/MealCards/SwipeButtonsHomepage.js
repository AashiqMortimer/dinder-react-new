//will need 2x swipebutton components as the buttons do different things on different pages
import React from 'react'
import "../SwipeButtons.css"
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
import saveMeal from "./SaveMeal";

//SwipeButtonsHP activates the newMeal function and the saveMeal function depending on requirements. 
export default function SwipeButtonsHP({newMeal, mealData}) {
  return (
    <div className="swipeButtons">
        <IconButton className="swipeButtons__left" onClick = {() => newMeal("true")} >
            <CloseIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__right" onClick = {() => {saveMeal(mealData); newMeal("true")}}>
            <FavoriteIcon fontSize="large" />
        </IconButton>
    </div>
  )
};
