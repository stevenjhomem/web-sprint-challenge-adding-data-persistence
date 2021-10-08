const db = require('../../data/dbConfig')

function getTasks() {
  return db("tasks as t").leftJoin("projects as p", "t.project_id", "p.project_id")
}

function addTask() {
  return Promise.resolve(`Newly created Task has been successful`);
}

function getTaskById(task_id) {
  return Promise.resolve(
    `Here is the task you requested with task id ${task_id}`
  );
}

module.exports = { getTasks, addTask, getTaskById };
