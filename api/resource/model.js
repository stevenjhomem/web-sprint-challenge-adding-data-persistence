const db = require("../../data/dbConfig");
// build your `Resource` model here
function getResources() {
    return db("resources")
  }

  async function getResourceByName(resource_name) {
    return db("resources").where("resource_name",resource_name).first()
  }
  
  async function addResource(newResource) {
    const newResourceId = await db("resources").insert(newResource)
    return getResourceById(newResourceId)
  }
  
  function getResourceById(resource_id) {
    return db("resources").where("resource_id", resource_id).first()
  }
  
  module.exports = { getResources, addResource, getResourceById, getResourceByName };
  