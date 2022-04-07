var db = require('../database');

exports.index = (req, res, next) => {
    var sql = "SELECT * FROM fmea, ttf_ttr WHERE fmea.id = ttf_ttr.id_komponen";
    db.query(sql, function (err, rows) {

            if (err) {
                req.flash('error', err);
                res.render('ttfTtr', { data: '' });
            } else {

                res.render('ttfTtr', { data: rows });
            }

        });

    // db.query('SELECT * FROM ttf_ttr ORDER BY id asc', function (err, rows) {

    //     if (err) {
    //         req.flash('error', err);
    //         res.render('ttfTtr', { dataTtf: '' });
    //     } else {

    //         res.render('ttfTtr', { dataTtf: rows });
    //     }

    // });
}

// exports.getTtf = (req, res, next) => {
//     db.query('SELECT * FROM ttf_ttr ORDER BY id asc', function (err, rows) {

//         if (err) {
//             req.flash('error', err);
//             res.render('ttfTtr', { dataTtf: '' });
//         } else {

//             res.render('ttfTtr', { dataTtf: rows });
//         }

//     });
// }

exports.post = (req, res, next) => {
    var komponen = req.body.komponen;
    var start = req.body.start;
    var finish = req.body.finish;

    var sql = `INSERT INTO ttf_ttr (id_komponen, start, finish) VALUES ("${komponen}", "${start}", "${finish}")`;
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log('record inserted');
        req.flash('success', 'Data added successfully!');
        res.redirect('/ttfTtr');
    });
}