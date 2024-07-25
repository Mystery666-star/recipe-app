import React from "react";

const RecipeList = ({ data, onViewRecipe }) => {
  if (!data || data.length === 0) {
    return <p style={styles.message}>No recipes found!</p>;
  }

  return (
    <div style={styles.container}>
      {data.map((recipe) => (
        <div key={recipe.id} style={styles.recipeCard}>
          <img src={recipe.image} alt={recipe.title} style={styles.image} />
          <h2 style={styles.title}>{recipe.title}</h2>
          <button 
            onClick={() => onViewRecipe(recipe.id)} 
            style={styles.button}
          >
            View Recipe
          </button>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
    gap: '20px',
  },
  recipeCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '15px',
    maxWidth: '300px',
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
    margin: '0 0 10px',
  },
  button: {
    padding: '10px 15px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  message: {
    fontSize: '18px',
    color: '#555',
    textAlign: 'center',
    padding: '20px',
  },
};

export default RecipeList;
