
const express = require('express');
const router = express.Router();
const petRoutes = require('./petRoutes.js');
const userRoutes = require('./userRoutes.js');
router.use('/pet', petRoutes);
router.use('/users', userRoutes);
module.exports = router;