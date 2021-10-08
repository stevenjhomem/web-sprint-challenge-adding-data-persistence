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

exports.seed = async function (knex) {
  await knex("projects").truncate();
  await knex("projects").insert(projects);
};

exports.projects = projects;
