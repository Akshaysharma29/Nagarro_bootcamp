const mysql = require('mysql2')

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database : 'mytestdb',
    password : '1234567'
 })

connection.query(
    `SELECT * FROM persons`,
    function(err, rows, cols) {
        if (err) {
            console.error(err)
        } else {
            console.log(rows)
            console.log(cols)
        }
        connection.close();
    }
)