exports.index = (req, res, next) => {
    res.render('fmeaEngineer');
}

exports.post = (req, res, next) => {
    var f_name = req.body.f_name;
    var l_name = req.body.l_name;
    var email = req.body.email;
    var message = req.body.message;

    var sql = `INSERT INTO contacts (f_name, l_name, email, message, created_at) VALUES ("${f_name}", "${l_name}", "${email}", "${message}", NOW())`;
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log('record inserted');
        req.flash('success', 'Data added successfully!');
        res.redirect('/');
    });
}