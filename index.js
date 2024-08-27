"use strict";

const submitTask = document.getElementById("submitTask");
const inputTask = document.getElementById("inputTask");
const containerTasks = document.getElementById("containerTasks");
const doneButton = document.getElementById("doneButton");
const textItem = document.getElementById("textItem");
const deleteTask = document.getElementById("deleteTask");
const containerWrapper = document.getElementById("containerWrapper");

console.log("loaded");

//add an event listener to click the btn
submitTask.addEventListener("click", function (event) {
  event.preventDefault();

  //add a new div
  const newtask = document.createElement("div");
  console.log("container created");

  const doneButton = doneButtonTemplate.cloneNode(true);
  const textItem = textItemTemplate.cloneNode(true);
  const deleteTask = deleteTaskTemplate.cloneNode(true);

  textItem.textContent = inputTask.value; //get the value of the input

  newtask.appendChild(doneButton);
  newtask.appendChild(textItem);
  newtask.appendChild(deleteTask);

  containerTasks.appendChild(newtask);

  inputTask.value = ""; //clear the input
});
