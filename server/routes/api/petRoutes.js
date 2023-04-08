
const express = require('express');
const router = express.Router();
const { getPetById } = require('../../controllers/Pet');
const { postPet } = require('../../controllers/Pet');
const { getPets } = require('../../controllers/Pet');
const { putPet } = require('../../controllers/Pet');
const { deletePet } = require('../../controllers/Pet');
router.get('/:pets/:id', getPetById);
router.post('/pets', postPet);
router.get('/pets', getPets);
router.put('/pets/:id', putPet);
router.delete('/pets/:id', deletePet);


module.exports = router;