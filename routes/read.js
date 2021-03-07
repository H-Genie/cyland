const pool = require('../database');


module.exports = function(req,res) {

    pool.getConnection(function(err,conn) {

        let sql = 'SELECT * FROM cyland ORDER BY id DESC';
        conn.query(sql, function(err,result) {  
            
            conn.release();

            context = {
                result : result,
                modify : undefined
            }

            req.app.render('index', context, function(err,html) {
                res.end(html);
            })
            
        })
        
    })

}