var express = require('express');
var router = express.Router();
const dashboardController = require('../controllers/dashboardController');
var db = require('../database');
var app = express();
var flash = require('express-flash');

/* GET index page. */
router.get('/', dashboardController.index);


module.exports = router;
