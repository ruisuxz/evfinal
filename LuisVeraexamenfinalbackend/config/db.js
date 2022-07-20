const mysql = require('mysql2');

// esto crea la conexion de la base de dato
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'cft',
});

module.exports = connection