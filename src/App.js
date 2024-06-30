import React, {useState} from "react";
import SearchBar from "./SearchBar";
import RecipeList from "./recipeList";

const API_key = "8c352681fd0d40c9a98e7eebb34bdd47";

function App(){

  const [recipeInfo, setRecipeInfo] =useState(null);
  const[loading, setLoading] =useState(true);
  const[error, setError] =useState(null);

  const fetchRecipeData= async(recipe)=>{

    try {
      const response = fetch (`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_key}&query=${recipe}`)
      if(!response.ok){
        throw Error("There is an error.")
      }
        const data = (await response).json();
        setRecipeInfo(data);
        setLoading(false);
        setError(false);
    }

    catch(error){
      setError(true)
      setLoading(true)
    }

    if(loading){
      <p>Loading...</p>
    }
    if(error){
     <p>Error: {error.message}</p>
    }
  }
    return (
      <div>
        <SearchBar fetchRecipe ={fetchRecipeData}></SearchBar>
        <RecipeList data = {recipeInfo}></RecipeList>
      </div>
    )
    }
export default App;