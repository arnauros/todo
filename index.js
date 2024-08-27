"use strict";

let tasks = [];

const submitTask = document.getElementById("submitTask");
const inputTask = document.getElementById("inputTask");
const containerTasks = document.getElementById("containerTasks");
const containerWrapper = document.getElementById("containerWrapper");
const doneButtonTemplate = document.getElementById("doneButton");
const textItemTemplate = document.getElementById("textItem");
const deleteTaskTemplate = document.getElementById("deleteTask");

console.log("loaded4");

// Add an event listener to the submit button
submitTask.addEventListener("click", function (event) {
  event.preventDefault();

  if (inputTask.value !== "") {
    // Create new task object
    const task = {
      text: inputTask.value,
      done: false,
      delete: false,
    };

    // Push the task into the tasks array
    tasks.push(task);

    // Create a new div for the task
    const newTaskContainer = document.createElement("div");

    // Clone the textItemTemplate and set its content
    const newTaskSpan = textItemTemplate.cloneNode(true);
    newTaskSpan.textContent = task.text;

    // Clone the done button and set up its event listener
    const inlineDoneButton = doneButtonTemplate.cloneNode(true);
    inlineDoneButton.addEventListener("click", function () {
      newTaskSpan.style.textDecoration = "line-through";
      task.done = true;
    });

    // Clone the delete button and set up its event listener
    const newDeleteButton = deleteTaskTemplate.cloneNode(true);
    newDeleteButton.addEventListener("click", function () {
      containerWrapper.removeChild(newTaskContainer);
      tasks = tasks.filter((t) => t !== task);
    });

    // Append the cloned elements to the new task container
    newTaskContainer.appendChild(newTaskSpan);
    newTaskContainer.appendChild(inlineDoneButton);
    newTaskContainer.appendChild(newDeleteButton);

    // Append the new task container to the main container
    containerWrapper.appendChild(newTaskContainer);

    // Clear the input field
    inputTask.value = "";
  } else {
    alert("Please enter a task");
  }
});
