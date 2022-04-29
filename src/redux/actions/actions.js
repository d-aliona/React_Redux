export const ADD_RECIPE = 'ADD_RECIPE';
export const REMOVE_RECIPE = 'REMOVE_RECIPE';
export const EDIT_RECIPE = 'EDIT_RECIPE';
export const SAVE_EDITED_RECIPE = 'SAVE_EDITED_RECIPE';
export const CANCEL_EDITED_RECIPE = 'CANCEL_EDITED_RECIPE';

export function addRecipe(title, content) {
    return {
        type: ADD_RECIPE,
        title: title,
        content: content
    }
}

export function removeRecipe(id) {
    return {
        type: REMOVE_RECIPE,
        id: id
    }
}

export function saveEditedRecipe(title, content, id) {
    return {
        type: SAVE_EDITED_RECIPE,
        title: title,
        content: content,
        id: id
    }
}