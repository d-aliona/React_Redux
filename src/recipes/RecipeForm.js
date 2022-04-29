import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { addRecipe } from '../redux/actions/actions';

function RecipeForm() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch();

    function handlerSubmit(e) {
        e.preventDefault();

        if (title && content) {
            dispatch(addRecipe(title, content))
            setTitle('');
            setContent('');
        };
    }

    return (
        <>
            <h3> Add your own recipe to our list</h3>
            <form onSubmit={handlerSubmit}>
                Cooking Title 
                <br />
                <TextField id="standard-basic"  variant="standard" 
                    type='text'
                    className='bg-light'
                    name='title'
                    value={title}
                    placeholder='Type the cooking title here'
                    onChange={(e) => setTitle(e.target.value)} 
                />
                <br />
                <p className='backdown'> Recipe </p>
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    className='bg-light'
                    name='content'
                    value={content}
                    placeholder='Type the recipe here'
                    onChange={(e) => setContent(e.target.value)}
                />
                <br /><br />
                <Button variant="contained" type='submit'>Add a recipe </Button>
            </form>
        </>
    )
}

export default RecipeForm;