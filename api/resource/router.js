// build your `/api/resources` router here
const router = require("express").Router();
const Resources = require("./model");

router.get("/", (req, res, next) => {
  Resources.getResources()
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch(next);
});

router.post("/", async (req, res, next) => {
  const { resource_name } = req.body;
  const nonUniqueNameIssue = await Resources.getResourceByName(resource_name);
  if (!resource_name) {
    res.status(400).json({
      message:
        "You are missing the resource name, please add one before accessing the database",
    });
  } else if (nonUniqueNameIssue) {
    res.status(400).json({ message: "Resource name taken, don't be dumb" });
  } else {
    Resources.addResource(req.body)
      .then((object) => {
        res.status(201).json(object);
      })
      .catch(next);
  }
});

// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next) => {
  res.status(500).json({
    CustomMessage: "Something went wrong in the Resources database",
    Message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
