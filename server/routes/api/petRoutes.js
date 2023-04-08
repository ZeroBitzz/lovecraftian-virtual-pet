
const express = require('express');
const router = express.Router();
// const { getPetById } = require('../../controllers/pet');
const { postPet } = require('../../controllers/Pet');
// const { getPets } = require('../../controllers/Pet');
const { putPet } = require('../../controllers/Pet');
// router.get('/:petsid', getPetById);
router.post('/pets', postPet);
// router.get('/pets', getPets);
router.put('/pets/:id', putPet);


module.exports = router;