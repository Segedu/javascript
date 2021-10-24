const fs = require("fs");
let handlingFunc = process.argv[2];
let taskName = process.argv[3];
let id = Number(process.argv[4]);
let date = process.argv[5];
let isComplited = process.argv[6];
const task = { taskName, id, date, isComplited };

const tasks = [
  {
    id: 1,
    taskName: "homework",
    date: "24/10/2021",
    isComplited: true,
  },
  {
    id: 2,
    taskName: "protfolio",
    date: "28/10/2021",
    isComplited: false,
  },
  { id: 3, taskName: "anotherProject", date: "30/10/2021", isComplited: false },
];

function crudFunctions(handlingFunc) {
  switch (handlingFunc) {
    case "read":
      readTasks();
      break;
    case "add":
      addTask();
      break;
    case "update":
      updateTask();
      break;
    case "remove":
      removeTask();
      break;
    default:
      console.log("please choose what action to take");
      break;
  }
}
crudFunctions(handlingFunc);

function addTask() {
  for (let i = 0; i < tasks.length; i++) {
    if (handlingFunc === "add" && tasks[i].taskName == task.taskName) {
      console.log(
        `The task: ${task.taskName} already exist in the To do list `
      );
      return;
    }
  }
  tasks.push(task);
  console.log("The updated To do list after adding new task: ", tasks);
}

function readTasks() {
  if (handlingFunc === "read") {
    console.log(tasks);
    return;
  }
  console.log("error at Reading To do list");
}

function updateTask() {
  for (let i = 0; i < tasks.length; i++) {
    if (handlingFunc === "update" && tasks[i].taskName === task.taskName) {
      tasks[i] = task;
      console.log("The updated tasks array: ", tasks);
      return;
    }
  }
  console.log(
    `The task ${task.taskName} you are trying to update doesn't exist`
  );
}

function removeTask() {
  for (let i = 0; i < tasks.length; i++) {
    if (handlingFunc === "remove" && tasks[i].taskName == task.taskName) {
      tasks.splice(tasks[i], 1);
      console.log("The updated To do list after deleting:", tasks);
      return;
    }
  }
  console.log(
    `The task ${task.taskName} you are trying to delete doesn't exist`
  );
}
