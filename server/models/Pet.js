const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  hunger: {
    type: Number,
    required: true,
    default: 50,
  },
  sleep: {
    type: Number,
    required: true,
    default: 50,
  },
  cleanliness: {
    type: Number,
    required: true,
    default: 50,
  },
  evolutionStage: {
    type: String,
    enum: ['Baby', 'Child', 'Adult'],
    default: 'Baby',
  },
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
