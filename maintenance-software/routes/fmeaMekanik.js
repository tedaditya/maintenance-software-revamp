var express = require('express');
var router = express.Router();
const fmeaMekanikController = require('../controllers/fmeaMekanikController');

router.get('/', fmeaMekanikController.index);
router.post('/', fmeaMekanikController.post);


module.exports = router;