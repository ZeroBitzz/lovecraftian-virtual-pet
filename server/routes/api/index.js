const petRoutes = require('./petRoutes.js');

router.use('/pet', petRoutes);

module.exports = router;