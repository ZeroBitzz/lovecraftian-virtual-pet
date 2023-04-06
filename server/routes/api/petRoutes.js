
const express = require('express');
const router = express.Router();
//const { getPetId } = require('../../controllers/pet');
const { postPet } = require('../../controllers/pet');
//const { getPet } = require('../../controllers/pet');
//const { putPet } = require('../../controllers/pet');
//router.get('/:petId', getPetId);
router.post('/pets', postPet);
//router.get('/pets', getPet)
//router.put('/pets', putPet)

module.exports = router;
