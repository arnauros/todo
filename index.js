"use strict";

const submitTask = document.getElementById("submitTask");
const inputTask = document.getElementById("inputTask");
const containerTasks = document.getElementById("containerTasks");
const containerWrapper = document.getElementById("containerWrapper");
const doneButtonTemplate = document.getElementById("doneButton");
const textItemTemplate = document.getElementById("textItem");
const deleteTaskTemplate = document.getElementById("deleteTask");

console.log("loaded3");

// Add an event listener to the submit button
submitTask.addEventListener("click", function (event) {
  event.preventDefault();
  if (inputTask.value !== "") {
    // Create a new div to hold the task elements
    const newTaskDiv = document.createElement("div");
    console.log("container created");

    // Clone the templates
    const doneButton = doneButtonTemplate.cloneNode(true);
    const textItem = textItemTemplate.cloneNode(true);
    const deleteTask = deleteTaskTemplate.cloneNode(true);

    // Set the text content of the cloned textItem to the input value
    textItem.textContent = inputTask.value;

    // Append the cloned elements to the new task div
    newTaskDiv.appendChild(doneButton);
    newTaskDiv.appendChild(textItem);
    newTaskDiv.appendChild(deleteTask);

    // Append the new task div to the containerTasks div
    containerWrapper.appendChild(newTaskDiv);

    // Clear the input field after adding the task
    inputTask.value = "";
  } else {
    alert("Please enter a task");
  }
});
