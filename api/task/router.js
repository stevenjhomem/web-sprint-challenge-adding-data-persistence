// build your `/api/tasks` router here
// build your `/api/resources` router here
const router = require("express").Router();
const Tasks = require("./model");

router.get("/", (req, res, next) => {
  Tasks.getTasks()
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch(next);
});

router.get("/:task_id", (req, res, next) => {
  Tasks.getTaskById(req.params.task_id)
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Tasks.addTask(req.body)
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch(next);
});

// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next) => {
  res.status(500).json({
    CustomMessage: "Something went wrong in the Tasks database",
    Message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
