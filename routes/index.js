var router = require('express').Router();

router.use('/api/resources', require('./resources.js'));
router.use('/api/projects', require('./projects.js'));

module.exports = router; 