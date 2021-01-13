module.exports = app => {
  const person = require("../controllers/person.controller.js");

  var router = require("express").Router();

  router.post("/", person.create);
  
  router.get("/", person.findAll);
  
  app.use('/api/persons', router);
};
