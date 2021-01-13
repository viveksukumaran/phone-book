const db = require("../models");
const Person = db.person;

const getPagination = (page, size) => {
  const limit = size ? size : 3;
  const offset = page ? (page-1) * limit : 0;
  return { offset, limit };
};

//Create and Save a new Person
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Person
  const person = new Person({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    address: req.body.address
  });

  // Save Person in the database
  person
  .save()
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Person."
    });
  });
};

//Retrieve all Persons from the database.
exports.findAll = (req, res) => {
  const { page, size } = req.query;
  const { offset, limit } = getPagination(page, size);

  Person.paginate({},{offset, limit})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({ message: "Error retrieving all persons " + err});
  });  
};



