"use strict";

//apis
const apiKey = "b3239c2d04d2a67ff2cc7a4c6ea25daf";
const apiID = "4d7e9113";

//log
console.log("recipe.js is connected");

//inputs
const recipesWrapper = document.querySelector("#recipesWrapper");
const findRecipeButton = document.querySelector("#findRecipeButton");
const inputRecipe = document.querySelector("#inputRecipe");

//event listeners
findRecipeButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("btn clcike");
  const recipe = inputRecipe.value;
  console.log(recipe);
});

const findRecipes = function () {
  const apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appId}&app_key=${appKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then(data);
  console.log(data);
};
