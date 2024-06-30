import React from "react";

const RecipeInfo = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <div>
      <h3>{data.title}</h3>
      <img src={data.image} alt={data.title} />
      <p>Servings: {data.servings}</p>
      <p>Ready in: {data.readyInMinutes} minutes</p>
      <div dangerouslySetInnerHTML={{ __html: data.instructions }} />
      <a href={data.sourceUrl} target="_blank" rel="noopener noreferrer">
        View Recipe Source
      </a>
    </div>
  );
};

export default RecipeInfo;
