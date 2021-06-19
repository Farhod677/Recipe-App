import React from 'react';
import IngredientList from './IngredientList';

export default function Recipe({ name, cookTime, servings, instructions, ingredients, id, handleRecipeDelete, handleRecipeEdit}) {
    return (
        <div className='recipe'>
            <div className='header'>
                <h3 className='title'>{name}</h3>
                <div>
                    <button onClick={() => handleRecipeEdit(id)} className='btn btn-primary mr-1'>Edit</button>
                    <button onClick={() => handleRecipeDelete(id)} className='btn btn-danger'>Delete</button>
                </div>
            </div>
            <div className='row'>
                <span className='label'>Cooktime:</span>
                <span className='value'>{cookTime}</span>
            </div>
            <div className='row'>
                <span className='label'>Servings:</span>
                <span className='value'>{servings}</span>
            </div>
            <div className='row'>
                <span className='label'>Instructions:</span>
                <div className='value value-indented instructions'>{instructions}</div>
            </div>
            <div className='row'>
                <span className='label'>Ingredients:</span>
                <div className='value-indented'>
                    <IngredientList ingredients={ingredients}/>
                </div>
            </div>
        </div>
    );
}