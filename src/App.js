import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import RecipeList from "./recipeList";
import RecipeInfo from "./RecipeInfo";

const API_key = "b3304d9436e7432792c3c33f8a88a981";

function App() {
  const [recipeInfo, setRecipeInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  const fetchRecipeData = async (recipe) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_key}&query=${recipe}`);
      if (!response.ok) {
        throw new Error("There is an error.");
      }
      const data = await response.json();
      setRecipeInfo(data.results);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const fetchRecipeInfo = async (id) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_key}`);
      if (!response.ok) {
        throw new Error("There is an error.");
      }
      const data = await response.json();
      setRecipeDetails(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedRecipeId) {
      fetchRecipeInfo(selectedRecipeId);
    }
  }, [selectedRecipeId]);

  const appStyles = {
    container: {
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: '#f4f4f9',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    loading: {
      fontSize: '20px',
      color: '#007bff',
      textAlign: 'center',
    },
    error: {
      fontSize: '20px',
      color: '#ff0000',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    noData: {
      textAlign: 'center',
      fontSize: '18px',
      color: '#666',
    },
  };

  return (
    <div style={appStyles.container}>
      <SearchBar fetchRecipe={fetchRecipeData} />
      {loading && <p style={appStyles.loading}>Loading...</p>}
      {error && <p style={appStyles.error}>Error: {error}</p>}
      {!selectedRecipeId && recipeInfo && recipeInfo.length === 0 && <p style={appStyles.noData}>No recipes found. Please try a different search.</p>}
      {!selectedRecipeId && recipeInfo && recipeInfo.length > 0 && <RecipeList data={recipeInfo} onViewRecipe={setSelectedRecipeId} />}
      {selectedRecipeId && recipeDetails && <RecipeInfo data={recipeDetails} />}
    </div>
  );
}

export default App;
