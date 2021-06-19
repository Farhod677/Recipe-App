import React from 'react';
import RecipeIngredientEdit from './RecipeIngredientEdit';
import { v4 as uuid } from 'uuid';

export default function RecipeEdit({ recipe, setActiveRecipe, handleRecipeChange }) {
    const { name, cookTime, servings, instructions, ingredients, id } = recipe;

    const handleChange = changes => {
        setActiveRecipe(changes);
        handleRecipeChange(id, changes);
    };

    const handleIngredientChange = (id, ingredient) => {
        const newIngredients = [...ingredients];
        const index = newIngredients.findIndex(i => i.id === id);
        newIngredients[index] = ingredient;
        handleChange({...recipe, ingredients: newIngredients})
    };

    const handleIngredientAdd = () => {
        const newIngredient = {
            id: uuid(),
            name: '',
            amount: ''
        };
        handleChange({...recipe, ingredients: [...ingredients, newIngredient]})
    };

    const handleIngredientDelete = id => {
        handleChange({...recipe, ingredients: ingredients.filter(i => i.id !== id)});
    };

    return (
        <div className='recipe-edit'>
            <div className='remove-btn-container'>
                <button onClick={() => setActiveRecipe()} className='btn remove-btn'>&times;</button>
            </div>
            <div className='details-grid'>
                <label className='edit-label' htmlFor="name">Name</label>
                <input value={name} onChange={e => {handleChange({...recipe, name: e.target.value })}} className='input' type="text" name='name' id='name'/>
                <label className='edit-label' htmlFor="cooktime">Cook Time</label>
                <input value={cookTime} onChange={e => {handleChange({...recipe, cookTime: e.target.value })}} className='input' type="text" name='cooktime' id='cooktime'/>
                <label className='edit-label' htmlFor="servings">Servings</label>
                <input value={servings} onChange={e => {handleChange({...recipe, servings: parseInt(e.target.value) || '' })}} className='input' type="number" min='1' name='servings' id='servings'/>
                <label className='edit-label' htmlFor="instructions">Instructions</label>
                <textarea onChange={e => {handleChange({...recipe, instructions: e.target.value})}} value={instructions} className='input' name="instructions" id="instructions" />
            </div>
            <br />
            <label className='edit-label'>Ingredients</label>
            <div className='ingredient-flex'>
                <div>Name</div>
                <div>Amount</div>
                <div></div>
                { ingredients.map(ingredient => (
                    <RecipeIngredientEdit handleIngredientDelete={handleIngredientDelete} handleIngredientChange={handleIngredientChange} key={ingredient.id} ingredient={ingredient}/>
                )) }
            </div>
            <div className='add-ingredient-btn-container'>
                <button onClick={handleIngredientAdd} className='btn btn-primary'>Add Ingredient</button>
            </div>
        </div>
    );
}