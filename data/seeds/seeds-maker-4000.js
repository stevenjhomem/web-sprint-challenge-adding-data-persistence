const projects = [
  {
    project_name: "Clean up kitchen",
    project_description: "put dishes away, clean counters, and sweep the floor",
    project_completed: false,
  },
  {
    project_name: "Clean up bedroom",
    project_description: "put clothes in hamper, vaccuum, and make the bed",
    project_completed: true,
  },
  {
    project_name: "Clean up bathroom",
    project_description:
      "clean the loo, wipe the counter and sink, clean the shower",
    project_completed: false,
  },
];

const resources = [
  {
    resource_name: "urbane bronze paint",
    resource_description: null,
  },
  {
    resource_name: "paint brush",
    resource_description: "four inch angle brush",
  },
];

const tasks = [
  {
    task_description: "paint wall and wood boards",
    task_notes: null,
    task_completed: 1,
    project_id: 1,
  },
  {
    task_description: "create wainscotting",
    task_notes: "nail wood to wall according to design pattern",
    task_completed: 0,
    project_id: 1,
  },
];

const project_resources = [
  {
    project_id: 1,
    resource_id: 1,
  },
  {
    project_id: 1,
    resource_id: 2,
  },
  {
    project_id: 1,
    resource_id: 3,
  },
];

exports.seed = async function (knex) {
  await knex("projects").truncate();
  await knex("projects").insert(projects);
  await knex("resources").truncate();
  await knex("resources").insert(resources);
};

exports.projects = projects;
exports.resources = resources;
exports.tasks = tasks;
exports.project_resources = project_resources;
