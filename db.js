const mysql = require('mysql')

const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "blog_app"
})

module.exports = db