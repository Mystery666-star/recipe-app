import React from "react";

const RecipeList = ({ data, onViewRecipe }) => {
  if (!data || data.length === 0) {
    return <p>No recipes found!</p>;
  }

  return (
    <div>
      {data.map((recipe) => (
        <div key={recipe.id}>
          <img src={recipe.image} alt={recipe.title} />
          <h2>{recipe.title}</h2>
          <button onClick={() => onViewRecipe(recipe.id)}>View Recipe</button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
