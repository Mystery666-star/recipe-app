import React, { useState } from "react";

const SearchBar = ({ fetchRecipe }) => {
  const [recipe, setRecipe] = useState('');

  const searchRecipe = () => {
    fetchRecipe(recipe);
  };

  return (
    <div>
      <input 
        type="text"
        value={recipe}
        onChange={(e) => setRecipe(e.target.value)}
        placeholder="Search the recipe you want to see"
      />
      <button onClick={searchRecipe}>Search</button>
    </div>
  );
};

export default SearchBar;
