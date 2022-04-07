var express = require('express');
var router = express.Router();
const ttfTtrController = require('../controllers/ttfTtrController');

router.get('/', ttfTtrController.index);
router.post('/', ttfTtrController.post);


module.exports = router;