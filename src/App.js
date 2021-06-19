import React, { useState, useEffect } from 'react';
import RecipeList from './components/RecipeList';
import RecipeEdit from './components/RecipeEdit';
import { v4 as uuid } from 'uuid';
import './styles/app.css';

const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes';

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);
  const [activeRecipe, setActiveRecipe] = useState();
  
  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON !== null) setRecipes(JSON.parse(recipeJSON))
  }, []);
  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes]); 

  const handleRecipeAdd = () => {
    const newRecipe = {
      id: uuid(),
      name: '',
      servings: 1,
      cookTime: '',
      instructions: '',
      ingredients: [
        { id: uuid(), name: '', amount: '' }
      ]
    }
    setRecipes([...recipes, newRecipe]);
    setActiveRecipe(newRecipe);
  };

  const handleRecipeEdit = id => {
    const recipe = recipes.filter(r => r.id === id);
    setActiveRecipe(recipe[0]);
  };

  const handleRecipeDelete = id => {
    setRecipes(recipes.filter(r => r.id !== id));
    setActiveRecipe()
  };

  const handleRecipeChange = (id, recipe) => {
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex(r => r.id === id);
    newRecipes[index] = recipe;
    setRecipes(newRecipes);
  }

  return (
    <div className="App">
      <RecipeList 
        recipes={recipes}
        handleRecipeAdd={handleRecipeAdd}
        handleRecipeDelete={handleRecipeDelete}
        handleRecipeEdit={handleRecipeEdit}
      />
      {activeRecipe && <RecipeEdit handleRecipeChange={handleRecipeChange} setActiveRecipe={setActiveRecipe} recipe={activeRecipe}/>}
    </div>
  );
}


const sampleRecipes = [
  {
    id: 1,
    name: 'Plain chicken',
    cookTime: '1:45',
    servings: 3,
    instructions: '1. Put salt on chicken\n 2. Put chicken in oven\n 3. Eat chicken',
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 Pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs'
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Meat',
    cookTime: '0:45',
    servings: 5,
    instructions: '1. Put paprika on meat\n 2. Put meat in oven\n 3. Eat meat',
    ingredients: [
      {
        id: 1,
        name: 'Meat',
        amount: '2 Pounds'
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '1 Tbs'
      }
    ]
  }
];

export default App;
