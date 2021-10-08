// build your `/api/projects` router here
const router = require("express").Router();
const Projects = require("./model");

router.get("/", (req, res, next) => {
  Projects.getProjects()
    .then((array) => {
      const projects = array.map((project) => {
        return {
          ...project,
          project_completed: project.project_completed === 0 ? false : true,
        };
      });
      return res.status(200).json(projects);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  const { project_name } = req.body;
  if (!project_name) {
    res.status(400).json({
      message:
        "You are missing a project name, please add one before accessing the database",
    });
  } else {
    Projects.addProject(req.body)
      .then((object) => {
        res.status(201).json({
          ...object,
          project_completed: object.project_completed === 1 ? true : false,
        });
      })
      .catch(next);
  }
});

// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next) => {
  res.status(500).json({
    CustomMessage: "Something went wrong in the Projects database",
    Message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
