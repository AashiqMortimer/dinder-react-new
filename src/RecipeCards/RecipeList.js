//Meal calls the JSON file to collect recipe information and build a recipe card.
import React from "react"; 
import RecipeCard from "./RecipeCard"; 

export default function RecipeList({ recipeData }) {
  return (
    <main>
      <section className="results">
        {recipeData.results.map((meal) => {
          return <RecipeCard key={meal.id} meal={meal} />;
        })} 
      </section>
    </main>
  );
}