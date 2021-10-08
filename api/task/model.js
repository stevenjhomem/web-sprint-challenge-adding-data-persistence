const db = require('../../data/dbConfig')

function getTasks() {
  return db("tasks as t").leftJoin("projects as p", "t.project_id", "p.project_id")
}

async function addTask(newTask) {
  const newTaskId = await db("tasks").insert(newTask)
    return getTaskById(newTaskId)
}

function getTaskById(task_id) {
  return db("tasks").where("task_id", task_id).first();
}

module.exports = { getTasks, addTask, getTaskById };
