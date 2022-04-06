var express = require('express');
var router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const fmeaEngineerController = require('../controllers/fmeaEngineerController');
const fmeaMekanikController = require('../controllers/fmeaMekanikController');
var db = require('../database');
var app = express();
var flash = require('express-flash');

/* GET index page. */
router.get('/', dashboardController.index);
router.get('/fmeaMekanik', fmeaMekanikController.index);

module.exports = router;
