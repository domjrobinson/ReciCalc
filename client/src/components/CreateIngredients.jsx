import React from 'react';
import IngredientInput from './IngredientInput.jsx';


const CreateIngredients = ({ingredients, addNewIngredient, updateRecipe, deleteItem}) => (
        <div>
            <h3>Ingredients:</h3>
            <input className='button' type='button' value='Add Ingredient' onClick={addNewIngredient} />
            {ingredients.map((ingredient, index) => <IngredientInput
                key={`${ingredient.counter}`}
                index={index}
                ingredient={ingredient}
                updateRecipe={updateRecipe}
                deleteItem={deleteItem}
            />)}
        </div>
)
    

export default CreateIngredients;