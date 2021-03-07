const mysql = require("mysql");

// SQL 연결
module.exports = mysql.createPool({
    connectionLimit: 10,
    host: "us-cdbr-east-02.cleardb.com",
    user: "b0bfe1f0e5ca95",
    password: "18256dda",
    database: "heroku_35ac0793c3cf4c1",
    debug: false,
});

// module.exports = mysql.createPool({
//     connectionLimit: 10,
//     host: "nodejs-007.cafe24.com",
//     user: "h0genie",
//     password: "st227213314!@",
//     database: "h0genie",
//     debug: false,
// });
