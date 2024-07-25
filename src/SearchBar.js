import React, { useState } from "react";

const SearchBar = ({ fetchRecipe }) => {
  const [recipe, setRecipe] = useState('');

  const searchRecipe = () => {
    fetchRecipe(recipe);
  };

  return (
    <div style={styles.container}>
      <input 
        type="text"
        value={recipe}
        onChange={(e) => setRecipe(e.target.value)}
        placeholder="Search for recipes..."
        style={styles.input}
      />
      <button onClick={searchRecipe} style={styles.button}>Search</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
  },
  input: {
    width: '100%',
    maxWidth: '400px',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    marginBottom: '10px',
  },
  button: {
    padding: '10px 20px',
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
  }
};

export default SearchBar;
