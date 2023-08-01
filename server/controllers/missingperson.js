const asyncHandler = require('express-async-handler');
const Missingperson = require('../models/missingperson');

const registerMissingperson = asyncHandler(async (req, res) => {
  const { name, age, place, aadhar, description, personreporting } = req.body;
  
  if (!name || !age || !place || !aadhar || !description || !personreporting) {
    res.status(400).json({ "error": "Please fill all the fields" });
    return;
  }

  const newMissingperson = new Missingperson({
    name,
    age,
    place,
    aadhar,
    description,
    personreporting,
    found: false
  });

  const result = await newMissingperson.save();

  if (result) {
    res.status(201).json({
      name: newMissingperson.name,
      age: newMissingperson.age,
      place: newMissingperson.place,
      aadhar: newMissingperson.aadhar,
      description: newMissingperson.description,
      personreporting: newMissingperson.personreporting,
      found: false
    });
  } else {
    res.status(400).json({ "error": "Failed to create missing person" });
  }
});

const getAllMissingPerson = asyncHandler(async (req, res) => {
  const { name, age, place, description } = req.query;

  const queryObject = {};

  if (name) {
    queryObject.name = name;
  }
  if (age) {
    queryObject.age = age;
  }
  if (place) {
    queryObject.place = place;
  }
  if (description) {
    queryObject.description = description;
  }

  const myMissingPerson = await Missingperson.find(queryObject);
  res.status(200).json({ myMissingPerson });
});

const toggleFound = asyncHandler(async (req, res) => {
  try {
    const missingPerson = await Missingperson.findByIdAndUpdate(
      req.params.id,
      { found: !req.body.found },
      { new: true }
    );

    res.status(200).json(missingPerson);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = { registerMissingperson, getAllMissingPerson, toggleFound };
