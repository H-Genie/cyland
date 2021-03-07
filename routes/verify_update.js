const pool = require("../database");

module.exports = function (req, res) {
    let id = req.body.id;
    let password = req.body.password;

    pool.getConnection(function (err, conn) {
        let sql = "SELECT * FROM cyland WHERE id = ?";
        conn.query(sql, [id], function (err, result) {
            if (password == result[0].password) {
                context = {
                    result: result,
                };

                req.app.render("modify", context, function (err, html) {
                    res.end(html);
                });
            } else {
                res.send(
                    '<script>alert("비밀번호를 확인해주세요"); window.location.href = "/";</script>'
                );
            }

            conn.release();
        });
    });
};
