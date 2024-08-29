"use strict";

//apis
const apiKey = "b3239c2d04d2a67ff2cc7a4c6ea25daf";

//inputs
const recipesWrapper = document.querySelector("#recipesWrapper");
const findRecipeButton = document.querySelector("#findRecipeButton");
const inputRecipe = document.querySelector("#inputRecipe");

console.log(inputRecipe);

findRecipeButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("btn clcike");
  const recipe = inputRecipe.value;
  console.log(recipe);
});

const findRecipes = function () {};
