var express = require('express');
var router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const fmeaEngineerController = require('../controllers/fmeaEngineerController');
const fmeaMekanikController = require('../controllers/fmeaMekanikController');

/* GET index page. */
router.get('/', dashboardController.index);
router.get('/fmeaEngineer', fmeaEngineerController.index);
router.get('/fmeaMekanik', fmeaMekanikController.index);

module.exports = router;
