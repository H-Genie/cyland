const pool = require('../database');


module.exports = function(req,res) {

    let id = req.body.id;
    let user = req.body.user;
    let password = req.body.password;
    let comment = req.body.comment;

    pool.getConnection(function(err,conn) {

        let sql = 'UPDATE cyland SET user=?, password=?, comment=? WHERE id=?';
        conn.query(sql, [user, password, comment, id], function(err,result) {
         
            res.redirect('/');
        })

        conn.release();
    })

}