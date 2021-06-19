import React from 'react';
import Recipe from './Recipe';

export default function RecipeList({ recipes, handleRecipeAdd, handleRecipeDelete, handleRecipeEdit }) {
    return (
        <div className='recipe-list'>
            <div>
                {recipes.map(recipe => (
                    <Recipe 
                        key={recipe.id} 
                        {...recipe}
                        handleRecipeDelete={handleRecipeDelete}
                        handleRecipeEdit={handleRecipeEdit}
                    />
                ))}
            </div>
            <div className='add-recipe-btn-container'>
                <button onClick={handleRecipeAdd} className='btn btn-primary'>Add Recipe</button>
            </div>
        </div>
    );
}