var db = require('../database');

exports.index = (req, res, next) => {
    res.render('fmeaEngineer');
}

exports.post = (req, res, next) => {
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
        res.redirect('/fmeaEngineer');
    });
}