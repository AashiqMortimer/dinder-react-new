import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import MealInfo from "./MealInfo";
import SearchMeal from "./SearchMeal";
import SwipeButtonsHP from "./SwipeButtonsHomepage";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Meal.css';

//MealCard collects information for and builds a new Meal card.
export default function Meal({ profile }) {

  //GetMealData links to SearchMeal to return new meal data.
  const [mealData, setMealData] = useState(null);
  function GetMealData(mealData) {
    setMealData(mealData);
  }

  //NewMeal lets SearchMeal know when to fetch a new meal
  const [newMealNeeded, setNewMealNeeded] = useState(true);
  function NewMeal(newMeal) {
    setNewMealNeeded(newMeal);
  }

  //Loading displays a loading symbol while the API works. 
  const loadingTheme = createTheme({
    palette: { primary: { main: '#FD3A73' }, contrastThreshold: 4.5 }
  })
  function Loading({ mealData }) {
    if (mealData == null) {
      return (
        <div className='tinderCardsContainer'>
          <ThemeProvider theme={loadingTheme}>
            <CircularProgress className='loading'/>
          </ThemeProvider>
        </div>
      )
    } else {
      return null
    }
  }

  //Return builds the meal card.
  return (
    <div className="Meal">
      <Loading mealData={mealData} />
      {profile && <SearchMeal profile={profile} newMealNeeded={newMealNeeded} getMealData={GetMealData} />} {/*searches for a new meal based on dietary requirements. only runs once var dietary is valid*/}
      {mealData && <MealInfo meal={mealData} apiKey={profile.apiKey} newMealNeeded={newMealNeeded} getMealData={GetMealData} newMeal={NewMeal} />} {/*use the mealData to build the visuals for the meal card. conditionally renders once mealData != null*/}
      <section>
        <SwipeButtonsHP newMeal={NewMeal} mealData={mealData} getMealData={GetMealData} />
      </section>
    </div>
  );
}