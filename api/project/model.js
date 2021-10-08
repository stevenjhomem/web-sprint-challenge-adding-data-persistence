// build your `Project` model here
const db = require("../../data/dbConfig");

function getProjects() {
  return db("projects");
}

function addProject() {
  return Promise.resolve(`Newly created project has been successful`);
}

function getProjectById(project_id) {
  return Promise.resolve(
    `Here is the project you requested with project id ${project_id}`
  );
}

module.exports = { getProjects, addProject, getProjectById };
