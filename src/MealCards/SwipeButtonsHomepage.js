//will need 2x swipebutton components as the buttons do different things on different pages
import React from 'react';
import {useState} from 'react'
import "../SwipeButtons.css"
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Snackbar from '@mui/material/Snackbar';
import { IconButton } from '@mui/material';
import saveMeal from "./SaveMeal";
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
//SwipeButtonsHP activates the newMeal function and the saveMeal function depending on requirements. 
export default function SwipeButtonsHP({ newMeal, mealData, getMealData }) {
    const [open, setOpen] = useState(false);
    function HandleClick(){
      setOpen(true);
    };

    function HandleClose(){
      setOpen(false);
    };

  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__left" onClick={() => { newMeal("true"); getMealData(null) }} >
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__right" onClick={() => { saveMeal({ mealData }); newMeal("true"); getMealData(null); HandleClick() }}>
        <FavoriteIcon fontSize="large" />
        <Snackbar open={open} autoHideDuration={1500} onClose={HandleClose}>
          <Alert severity="success" sx={{ width: '100%' }}>
            Recipe Saved!
          </Alert>
        </Snackbar>
      </IconButton>
    </div>
  )}
