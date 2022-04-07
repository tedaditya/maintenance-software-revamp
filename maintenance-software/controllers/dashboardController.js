var db = require('../database');

exports.index = (req, res, next) => {
    db.query('SELECT * FROM fmea ORDER BY spn desc', function (err, rows) {

        if (err) {
            req.flash('error', err);
            res.render('dashboard', { data: '' });
        } else {

            res.render('dashboard', { data: rows });
        }

    });

};