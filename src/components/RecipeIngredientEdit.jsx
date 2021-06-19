import React from 'react';

export default function RecipeIngredientEdit({ ingredient, handleIngredientChange, handleIngredientDelete }) {
    const { name, amount, id } = ingredient;
    return (
        <>
            <input onChange={e => handleIngredientChange(id, {...ingredient, name: e.target.value})} value={name} className='input' type="text" />
            <input onChange={e => handleIngredientChange(id, {...ingredient, amount: e.target.value})} value={amount} className='input' type="text" />
            <button onClick={() => handleIngredientDelete(id)} className='btn btn-danger'>&times;</button>
        </>
    );
}