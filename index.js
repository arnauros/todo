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
    // create new task object
    const task = {
      text: inputTask.value,
      done: false,
      delete: false,
    };
    //take the task object and push it into the tasks array ^^
    tasks.push(task);

    //create new div with this
    const newTaskContainer = document.createElement("div");

    // create new span for the text
    const newTaskSpan = document.createElement("span");
    newTaskSpan.textContent = task.text;

    const inlineDoneButton = document.createElement("button");
    inlineDoneButton.style(".btn");
    inlineDoneButton.addEventListener("click", function () {
      textItemTemplate.style.textDecoration = "line-through";
      task.done = true;
    });

    const newDeleteButton = document.createElement("button");
    newDeleteButton.style(".btn");
    newDeleteButton.addEventListener("click", function () {
      containerWrapper.removeChild(newTaskContainer);
      tasks = tasks.filter((t) => t !== task);
    });

    newTaskContainer.appendChild(newDeleteButton);
    newTaskContainer.appendChild(textItemTemplate);
    newTaskContainer.appendChild(inlineDoneButton);

    containerWrapper.appendChild(newTaskContainer);

    inputTask.value = "";
  } else {
    alert("Please enter a task");
  }
});
