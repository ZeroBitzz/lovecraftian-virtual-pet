const mongoose = require('mongoose');

const actionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Feed', 'Sleep', 'Bathe'],
    required: true,
  },
  pet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pet',
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Action = mongoose.model('Action', actionSchema);

module.exports = Action;
