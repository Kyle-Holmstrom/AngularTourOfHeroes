var express = require('express');
var router = express.Router('');
var hero_controller = require('../controller/hero');

// A simple test url to check that all of our files are communicating correctly
router.get('/test', hero_controller.test);

// Example: URL=create, call hero_controller.hero_create
router.post('/heroes', hero_controller.create);

router.get('/heroes', hero_controller.heroes);

var hero_controller = require('../controller/hero');

// A simple test url to check that all of the files are communicating correctly
router.get('/test', hero_controller.test);

// Example: URL=create, call hero_controller.hero_create
router.post('/heroes', hero_controller.create);
router.get('/heroes', hero_controller.heroes);
router.get('/heroes', hero_controller.read);
router.put('/heroes', hero_controller.update);
router.delete('/heroes/:id', hero_controller.delete);

module.exports = router;