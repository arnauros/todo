"use strict";

const submitTask = document.getElementById("submitTask");
const inputTask = document.getElementById("inputTask");
const containerTasks = document.getElementById("containerTasks");
const doneButton = document.getElementById("doneButton");
const textItem = document.getElementById("textItem");
const deleteTask = document.getElementById("deleteTask");

//add an event listener to click the btn
document.querySelector = submitTask.addEventListener("click", function () {
  //add a new div
  const container = document.createElement("containerTasks");
  console.log("container created");
});
