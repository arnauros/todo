"use strict";

const submitTask = document.getElementById("submitTask");
const inputTask = document.getElementById("inputTask");
const containerTasks = document.getElementById("containerTasks");
const doneButton = document.getElementById("doneButton");
const textItem = document.getElementById("textItem");
const deleteTask = document.getElementById("deleteTask");

console.log("loaded");

//add an event listener to click the btn
submitTask.addEventListener("click", function (event) {
  event.preventDefault();

  //add a new div
  const newtask = document.createElement("div");
  console.log("container created");
});
