// build your `/api/projects` router here
const router = require("express").Router();
const Projects = require("./model");

router.get("/", (req, res, next) => {
  Projects.getProjects()
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch(next);
});

router.get("/:project_id", (req, res, next) => {
  Projects.getProjectById(req.params.project_id)
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Projects.addProject(req.body)
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch(next);
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
