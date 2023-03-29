const Pet = require('../models/Pet');

const getPetId = async (req, res, next) => {
  try {
    const { petId } = req.params;
    const pet = await Pet.findById(petId);
    if (!pet) {
      return res.status(404).json({ message: 'Pet not found' });
    }
    res.render('pet', { pet });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getPetId,
};