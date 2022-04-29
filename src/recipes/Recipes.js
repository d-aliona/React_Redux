import React, { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

import "../App.css";

import RecipeForm from './RecipeForm';
import RecipeList from './RecipeList';
import ThemeButton from '../context/ThemeButton';

function Recipes() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <>
            <div className={`bg ${darkMode ? "bg-dark" : "bg-light"}`}>
                <h1>A List Of Recipes (React Redux) </h1>
                <ThemeButton />
                <RecipeForm />
                <hr />
                <hr />
                <RecipeList />
            </div>
           
        </>
    )
}

export default Recipes;