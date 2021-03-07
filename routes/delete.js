const pool = require("../database");

module.exports = function (req, res) {
    let id = req.body.id;
    let password = req.body.password;

    pool.getConnection(function (err, conn) {
        let sql = "SELECT password FROM cyland WHERE id = ?";
        conn.query(sql, [id], function (err, result) {
            if (password == result[0].password) {
                let sql = "DELETE FROM cyland WHERE id=?";
                conn.query(sql, [id], function (err, result) {
                    res.redirect("/");
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
