import React from "react";

const RecipeList=({data})=>{

    if(!data){
        return (<p>No recipe found!</p>)
    }
    return(
        <div>
            {data.map((recipe) =>(
                <div>
                    <img src ={data.image} alt={data.title}> </img>
                Name:{data.title};
                Servings:{data.servings}
                Time:{data.readyInMinutes}
                </div>
            ))}
        </div>
    )   
}

export default RecipeList;