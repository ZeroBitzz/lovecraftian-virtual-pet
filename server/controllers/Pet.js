const Pet = require('../models/Pet');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../../config/connection');

// Middleware to verify token
function verifyToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).send('Unauthorized');
  try {
    const decoded = jwt.verify(token, config.secret);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(400).send('Invalid token');
  }
}

// Create a pet
const postPet=(verifyToken, async (req, res) => {
  const { name, hunger, sleep,cleanliness,evolutionStage } = req.body;
  try {
    const pet = await Pet.create({
      name,
      hunger,
      sleep,
      cleanliness,
      evolutionStage
      // owner: req.user._id, // Set the owner of the pet to the authenticated user
    });
    res.status(201).json({ pet });
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Update a pet
const putPet = async (req, res) => {
  try {
    const pet = await Pet.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (!pet) {
      return res.status(404).json({ msg: 'Pet not found' });
    }
    res.status(200).json({ pet });
  } catch (error) {
    res.status(500).send('Server error');
  }
};


module.exports = router;


//TODO const getPet

//TODO const putPet





module.exports = {
 postPet,
 putPet,
//  getPetById
};