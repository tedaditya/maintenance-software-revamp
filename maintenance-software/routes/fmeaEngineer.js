var express = require('express');
var router = express.Router();
const fmeaEngineerController = require('../controllers/fmeaEngineerController');

router.get('/', fmeaEngineerController.index);
router.post('/', fmeaEngineerController.post);


module.exports = router;