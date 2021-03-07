const pool = require("../database");

module.exports = function (req, res) {
    let user = req.body.user;
    let password = req.body.password;
    let comment = req.body.comment;

    if (!user || !password || !comment) {
        res.send(
            '<script>alert("모든 정보를 입력해주세요"); window.location.href = "/";</script>'
        );
    } else {
        pool.getConnection(function (err, conn) {
            let data = {
                user: user,
                password: password,
                comment: comment,
                date: new Date(),
            };

            let sql = "INSERT INTO cyland SET ?";
            conn.query(sql, data, function (err, result) {
                res.redirect("/");
            });
        });
    }
};
