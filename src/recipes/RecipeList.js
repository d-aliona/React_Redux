import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { removeRecipe, saveEditedRecipe } from '../redux/actions/actions';

function RecipeList() {
    const recipes = useSelector((state) => state.recipes);
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [updatedRecipe, setUpdatedRecipe] = useState(null);

    function handlerRemoveRecipe(index) {
        dispatch(removeRecipe(index))
    }

    function handlerEditRecipe(title, content, index) {
        dispatch(saveEditedRecipe(title, content, index));
    }

    const recipeItems = recipes.map((recipe, index) => {
        const isCurrentBeingUpdated = updatedRecipe === index;
                
        const saveOrEdit = (e) => {
            e.preventDefault();

            setUpdatedRecipe(isCurrentBeingUpdated ? null : index);
            setName(recipe.title);
            setDescription(recipe.content);

            if (isCurrentBeingUpdated) {
                handlerEditRecipe(name, description, index)
            } else {
                handlerEditRecipe(recipe.title, recipe.content, index)
            }
        }

        const deleteOrCancel = (e) => {
            e.preventDefault();

            if (isCurrentBeingUpdated) {
                handlerEditRecipe(recipe.title, recipe.content, index);
                setUpdatedRecipe(isCurrentBeingUpdated ? null : index);
            } else {
                handlerRemoveRecipe(index);
            }
        }
         
        return (
        <li key={index} >
            <b> {isCurrentBeingUpdated ? (
                <TextField 
                    id="standard-basic"  variant="standard" 
                    type='text'
                    name='title'
                    className='bg-light'
                    defaultValue={recipe.title}
                    placeholder='Type the cooking title here'
                    onChange={(e) => setName(e.target.value)} 
                />) : (
                    recipe.title
                )}
            </b> 
            <br />
            <p>{isCurrentBeingUpdated ? (
                <TextField 
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    className='bg-light'
                    name='content'
                    defaultValue={recipe.content}
                    placeholder='Type the cooking title here'
                    onChange={(e) => setDescription(e.target.value)} 
                />) : ( recipe.content )} 
            </p>

            <ButtonGroup disableElevation variant="contained" color='secondary' size="small">
                <Button onClick={saveOrEdit}>
                    {isCurrentBeingUpdated ? "Save" : "Edit"}
                </Button>
                <Button onClick={deleteOrCancel}> 
                    {isCurrentBeingUpdated ? "Cancel" : "Delete"}
                </Button>
            </ButtonGroup>
            <hr />
                        
        </li>)
    })
    
    return (
        <>
           <h3>The list of recipes</h3> 
           <ol>
               {recipeItems}
           </ol>
        </>
    )
}

export default RecipeList;