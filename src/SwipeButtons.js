import React from 'react'
import "./SwipeButtons.css"
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
import getRecipe from "./RecipeCards/RecipeCards";
import saveRecipe from "./SaveRecipe";


function SwipeButtons() {
  return (
    <div className="swipeButtons">
        <IconButton className="swipeButtons__left">
            <CloseIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipeButtons__right" onClick={saveRecipe}>
            <FavoriteIcon fontSize="large" />
        </IconButton>
    </div>
  )
}
//need to add in 'Get Recipe' but having issues with conflicting React setups. 
export default SwipeButtons