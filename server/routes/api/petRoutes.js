
const express = require('express');
const router = express.Router();
const { getPetId } = require('../../controllers/pet');

router.get('/:petId', getPetId);

module.exports = router;
