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
      resource_description: null
  },
  {
      resource_name: "paint brush",
      resource_description: "four inch angle brush"
  }
]

exports.seed = async function (knex) {
  await knex("projects").truncate();
  await knex("projects").insert(projects);
  await knex("resources").truncate();
  await knex("resources").insert(resources);
};

exports.projects = projects;
exports.resources = resources;
