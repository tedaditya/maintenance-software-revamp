var express = require('express');
var router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const fmeaEngineerController = require('../controllers/fmeaEngineerController');
const fmeaMekanikController = require('../controllers/fmeaMekanikController');
var db = require('../database');

/* GET index page. */
router.get('/', dashboardController.index);
router.get('/fmeaEngineer', fmeaEngineerController.index);
router.post('/fmeaEngineer', function (req, res, next) {
    var komponen = req.body.komponen;
    var fungsi = req.body.fungsi;
    var potensi_kegagalan = req.body.potensi_kegagalan;
    var efek_kegagalan = req.body.efek_kegagalan;
    var penyebab_kegagalan = req.body.penyebab_kegagalan;

    var sql = `INSERT INTO fmea (komponen, fungsi, potensi_kegagalan, efek_kegagalan, penyebab_kegagalan) VALUES ("${komponen}", "${fungsi}", "${potensi_kegagalan}", "${efek_kegagalan}", "${penyebab_kegagalan}")`;
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log('record inserted');
        req.flash('success', 'Data added successfully!');
        res.redirect('/');
    });
});


router.get('/fmeaMekanik', fmeaMekanikController.index);

module.exports = router;
