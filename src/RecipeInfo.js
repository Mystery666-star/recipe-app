import React from "react";

const RecipeInfo = ({ data }) => {
  if (!data) {
    return null;
  }

  const recipeInfoStyles = {
    container: {
      padding: '20px',
      maxWidth: '800px',
      margin: '20px auto',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      margin: '0 0 10px',
      color: '#333',
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '8px',
    },
    details: {
      fontSize: '18px',
      color: '#555',
      margin: '10px 0',
    },
    instructions: {
      textAlign: 'left',
      fontSize: '16px',
      color: '#333',
      lineHeight: '1.6',
      margin: '20px 0',
    },
    link: {
      display: 'inline-block',
      marginTop: '10px',
      fontSize: '16px',
      color: '#007bff',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
    linkHover: {
      textDecoration: 'underline',
    },
  };

  return (
    <div style={recipeInfoStyles.container}>
      <h3 style={recipeInfoStyles.title}>{data.title}</h3>
      <img
        src={data.image}
        alt={data.title}
        style={recipeInfoStyles.image}
      />
      <p style={recipeInfoStyles.details}>Servings: {data.servings}</p>
      <p style={recipeInfoStyles.details}>Ready in: {data.readyInMinutes} minutes</p>
      <div
        style={recipeInfoStyles.instructions}
        dangerouslySetInnerHTML={{ __html: data.instructions }}
      />
      <a
        href={data.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={recipeInfoStyles.link}
        onMouseOver={(e) => e.currentTarget.style.textDecoration = recipeInfoStyles.linkHover.textDecoration}
        onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
      >
        View Recipe Source
      </a>
    </div>
  );
};

export default RecipeInfo;
