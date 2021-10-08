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

router.get("/:resource_id", (req, res, next) => {
  Resources.getResourceById(req.params.resource_id)
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Resources.addResource(req.body)
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch(next);
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
