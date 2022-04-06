var db = require('../database');

exports.index = (req, res, next) => {
    db.query('SELECT * FROM fmea ORDER BY id asc', function (err, rows) {

        if (err) {
            req.flash('error', err);
            res.render('fmeaMekanik', { data: '' });
        } else {

            res.render('fmeaMekanik', { data: rows });
        }

    });
}

exports.post = (req, res, next) => {
    var komponen = req.body.komponen;
    var severity = req.body.severity;
    var occurence = req.body.occurence;
    var detection = req.body.detection;
    var spn = parseInt(severity) + parseInt(occurence) + parseInt(detection);

    var sql = `UPDATE fmea SET severity = ${severity}, occurence = ${occurence}, detection = ${detection}, spn = ${spn} WHERE id = ${komponen}`;
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log('record inserted');
        req.flash('success', 'Data added successfully!');
        res.redirect('/fmeaMekanik');
    });
}