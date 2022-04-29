import {ADD_RECIPE, REMOVE_RECIPE, SAVE_EDITED_RECIPE} from '../actions/actions';

const initialState = {
    recipes: [],
};

function rootReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_RECIPE:
            return {
                recipes: [
                    ...state.recipes,
                    {
                        title: action.title,
                        content: action.content,
                    }
                ]
            };
        
        case REMOVE_RECIPE:
            return {
                recipes: state.recipes.filter((recipe, index) => index !== action.id),
            }
        
        case SAVE_EDITED_RECIPE: 
            return {
                recipes: state.recipes.map((recipe, index) => 
                index === action.id ? {...recipe, title: action.title, content: action.content} : recipe
                )
            }

        default:
            return state;
    }
}

export default rootReducer;