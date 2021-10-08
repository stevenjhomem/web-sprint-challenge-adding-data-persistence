const router = require("express").Router();
const Tasks = require("./model");

router.get("/", (req, res, next) => {
  Tasks.getTasks()
    .then((resource) => {
      const tasks = resource.map(task =>{
        return{
          ...task,
          task_completed: (task.task_completed === 0)? false : true
        }
      })
      res.status(200).json(tasks)
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
