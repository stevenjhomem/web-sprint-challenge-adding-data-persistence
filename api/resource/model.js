// build your `Resource` model here
function getResources() {
    return Promise.resolve("You have just received all of your resourcess!");
  }
  
  function addResource() {
    return Promise.resolve(`Newly created resource has been successful`);
  }
  
  function getResourceById(resource_id) {
    return Promise.resolve(
      `Here is the resource you requested with resource id ${resource_id}`
    );
  }
  
  module.exports = { getResources, addResource, getResourceById };
  