const asyncHandler = require('express-async-handler');
const generateToken = require('../config/token');
const Police = require('../models/police');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');

// Registering a police officer
const registerPolice = asyncHandler(async (req, res) => {
  const { name, email, serviceNumber, rank, password, cpassword } = req.body;

  if (!name || !email || !serviceNumber || !rank || !password || !cpassword) {
    res.status(400).json({ error: "Please fill all the fields" });
    return;
  }

  if (serviceNumber.length > 10) {
    res.status(400).json({ error: "Service number cannot exceed 10 digits" });
    return;
  }

  // Checking if email is already registered
  const emailExists = await Police.findOne({ email });
  if (emailExists) {
    res.status(400).json({ error: "Email already registered" });
    return;
  }

  // Checking if serviceNumber is already registered
  const serviceNumberExists = await Police.findOne({ serviceNumber });
  if (serviceNumberExists) {
    res.status(400).json({ error: "Service number already registered" });
    return;
  }

  const salt = bcrypt.genSaltSync(12);
  const police = new Police({
    name,
    email,
    serviceNumber,
    rank,
    password: bcrypt.hashSync(password, salt),
    cpassword: bcrypt.hashSync(cpassword, salt),
  });

  const result = await police.save();

  if (result) {
    res.status(201).json({
      _id: police.id,
      name: police.name,
      email: police.email,
      serviceNumber: police.serviceNumber,
      rank: police.rank,
      token: generateToken(police.id),
    });
  } else {
    res.status(400).json({ error: "Failed to create police" });
  }
});

// Verifying a registered police officer (Login)
const loginPolice = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const policeFound = await Police.findOne({ email });

  if (!policeFound) {
    res.status(400).json({ error: "Invalid credentials" });
    return;
  }

  if (policeFound && bcrypt.compareSync(password, policeFound.password)) {
    const id = policeFound.id;
    res.status(201).json({
      _id: policeFound.id,
      name: policeFound.name,
      email: policeFound.email,
      serviceNumber: policeFound.serviceNumber,
      rank: policeFound.rank,
      token: generateToken(id),
    });
  } else {
    res.status(400).json({ error: "Invalid credentials" });
  }
});

module.exports = { registerPolice, loginPolice };
