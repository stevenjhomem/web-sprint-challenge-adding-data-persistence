// build your `Task` model here
function getTasks() {
  return Promise.resolve("You have just received all of your Tasks!");
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
