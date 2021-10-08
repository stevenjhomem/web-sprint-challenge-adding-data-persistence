// build your `Project` model here

function getProjects() {
  return Promise.resolve("You have just received all of your projects!");
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
