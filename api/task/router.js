const router = require("express").Router();
const Tasks = require("./model");
const Projects = require("../project/model");

router.get("/", (req, res, next) => {
  Tasks.getTasks()
    .then((resource) => {
      const tasks = resource.map((task) => {
        return {
          ...task,
          task_completed: task.task_completed === 0 ? false : true,
        };
      });
      res.status(200).json(tasks);
    })
    .catch(next);
});

router.post("/", async (req, res, next) => {
  const { task_description, project_id } = req.body;
  (project_id);
  if (!task_description || !project_id) {
    res.status(404).json({
      message:
        "You are missing the task_descriptipn or project ID, please add one before accessing the database",
    });
  } else{

    const confirmedProjectID = await Projects.getProjectById
    if (!confirmedProjectID) {
    res.status(404).json({ message: "No project with that ID" });
  } else {
    Tasks.addTask(req.body)
      .then((object) => {
        res.status(201).json({
          ...object,
          task_completed: object.task_completed === 1 ? true : false,
        });
      })
      .catch(next);
  }
}
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
