// build your `Project` model here
const db = require("../../data/dbConfig");

function getProjects() {
  return db("projects");
}

async function addProject(newProject) {
  const newProjectId = await db("projects").insert(newProject)
  return getProjectById(newProjectId)
}

function getProjectById(project_id) {
  return db("projects").where("project_id", project_id).first()
}

module.exports = { getProjects, addProject, getProjectById };
